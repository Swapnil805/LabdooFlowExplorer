import pandas as pd
import os

os.makedirs("../public/data", exist_ok=True)

print("loading the raw csvs...")

trips = pd.read_csv("raw/Dootrips.csv")
devices = pd.read_csv("raw/Dootronics.csv")
schools = pd.read_csv("raw/Edoovillages.csv")
hubs = pd.read_csv("raw/Hubs_geolocated_by_city.csv")

print(f"loaded: {len(trips)} trips, {len(devices)} devices, {len(schools)} schools, {len(hubs)} hubs")


# ── DOOTRIPS ────────────────────────────────────────────────────────────────

print("\ncleaning dootrips...")

# free-text fields, not used anywhere in the viz
trips = trips.drop(columns=["Dootrippers", "Additional info"], errors="ignore")

# only trips that actually happened
trips = trips[trips["Status"] == "Completed"]
print(f"  after keeping completed only: {len(trips)} trips")

# remove same-country rows as a general data quality step
trips = trips[trips["Origin"] != trips["Destination"]]
print(f"  after removing internal transfers: {len(trips)} trips")

# pull year out of the departure timestamp
trips["year"] = pd.to_datetime(trips["Departure"], errors="coerce").dt.year

# these came in as strings
trips["Capacity"] = pd.to_numeric(trips["Capacity"], errors="coerce").fillna(0).astype(int)
trips["Transported"] = pd.to_numeric(trips["Transported"], errors="coerce").fillna(0).astype(int)
trips["In transit"] = pd.to_numeric(trips["In transit"], errors="coerce").fillna(0).astype(int)

"""
real_trips is the shared base for all three trip-derived outputs below.
Adding Transported > 0 on top of the same-country filter above catches
edge cases like Afghanistan -> Aland Islands where a trip record exists
but zero devices were actually shipped. Using one variable for all three
outputs means the map and bar chart can never show different origin lists.
"""
real_trips = trips[trips["Transported"] > 0]

origin_flows = (
    real_trips.groupby(["Origin", "year"])
    .size()
    .reset_index(name="trip_count")
    .rename(columns={"Origin": "country"})
    .sort_values(["country", "year"])
)
origin_flows.to_csv("../public/data/origin-flows.csv", index=False)

# includes year so the Q1 timeline filter can show only arcs from a clicked year
arc_pairs = (
    real_trips.groupby(["Origin", "Destination", "year"])
    .size()
    .reset_index(name="trip_count")
    .rename(columns={"Origin": "origin", "Destination": "destination"})
    .sort_values("trip_count", ascending=False)
)
arc_pairs.to_csv("../public/data/arc-pairs.csv", index=False)
print(f"  arc-pairs.csv: {len(arc_pairs)} rows (origin-destination-year pairs)")
print(f"  origin-flows.csv: {len(origin_flows)} rows")

# using real_trips here too — without it Germany shows ~2500 "received" trips
# that are just domestic Germany -> Germany donations counted as incoming
dest_flows = (
    real_trips.groupby("Destination")
    .size()
    .reset_index(name="trips_received")
    .rename(columns={"Destination": "country"})
    .sort_values("trips_received", ascending=False)
)
dest_flows.to_csv("../public/data/destination-flows.csv", index=False)
print(f"  destination-flows.csv: {len(dest_flows)} rows")


# ── EDOOVILLAGES ─────────────────────────────────────────────────────────────

print("\ncleaning edoovillages...")

# Completed is just a 0/1 copy of Status, no need for both
schools = schools.drop(columns=["Completed"], errors="ignore")

# only open schools have unmet demand worth visualising
schools_open = schools[schools["Status"] == "open"].copy()
print(f"  open schools: {len(schools_open)} out of {len(schools)}")

for col in ["Needed (N)", "In transit (T)", "Delivered (D)", "Remaining (R = N-T-D)", "Number of students"]:
    schools_open[col] = pd.to_numeric(schools_open[col], errors="coerce").fillna(0).astype(int)

schools_open["% Completed"] = pd.to_numeric(schools_open["% Completed"], errors="coerce").fillna(0)

before = len(schools_open)
schools_open = schools_open.drop_duplicates(subset=["Edoovillage"])
print(f"  removed {before - len(schools_open)} duplicate school entries")

demand_gap = (
    schools_open.groupby("Country")
    .agg(
        needed=("Needed (N)", "sum"),
        delivered=("Delivered (D)", "sum"),
        remaining=("Remaining (R = N-T-D)", "sum"),
        in_transit=("In transit (T)", "sum"),
        school_count=("Edoovillage", "count"),
        total_students=("Number of students", "sum"),
    )
    .reset_index()
    .rename(columns={"Country": "country"})
    .sort_values("remaining", ascending=False)
)

demand_gap["unmet_pct"] = (
    (demand_gap["remaining"] / demand_gap["needed"].replace(0, 1)) * 100
).round(1)

demand_gap.to_csv("../public/data/demand-gap.csv", index=False)
print(f"  demand-gap.csv: {len(demand_gap)} rows (countries)")


# ── DOOTRONICS ───────────────────────────────────────────────────────────────

print("\ncleaning dootronics...")

devices = devices.drop(columns=["Serial number", "Notes", "Pick me up"], errors="ignore")

before = len(devices)
devices = devices.drop_duplicates(subset=["Labdoo ID"])
print(f"  removed {before - len(devices)} duplicate device IDs")

devices = devices[devices["Country"].str.strip() != ""]
print(f"  after dropping no-country rows: {len(devices)} devices")

"""
Realistic laptop battery is 20-100 Wh. One row had 475,245 Wh which is
obviously a typo, so anything above 1000 or below 1 gets nulled out.
Wh doesn't appear in any output file but we clean it anyway in case
we want to use it for something later.
"""
devices["Wh"] = pd.to_numeric(devices["Wh"], errors="coerce")
devices.loc[devices["Wh"] > 1000, "Wh"] = None
devices.loc[devices["Wh"] < 1, "Wh"] = None
bad_wh = devices["Wh"].isna().sum()
print(f"  {bad_wh} devices have Wh set to null (outliers or missing)")

# L1, T2, S7-S9 aren't documented on the Labdoo platform — about 400 devices,
# under 0.7% — grouped so they don't appear as mystery labels in the Q3 chart
known_statuses = ["S0", "S1", "S2", "S3", "T1", "S4", "S5", "S6"]
devices["status_clean"] = devices["Status"].apply(
    lambda s: s if s in known_statuses else "Other"
)

pipeline = (
    devices.groupby("status_clean")
    .size()
    .reset_index(name="device_count")
    .rename(columns={"status_clean": "status"})
)

status_labels = {
    "S0": "Tagged (S0)",
    "S1": "At hub, awaiting QA (S1)",
    "S2": "Passed QA (S2)",
    "S3": "Assigned, awaiting shipment (S3)",
    "T1": "In transit (T1)",
    "S4": "Delivered (S4)",
    "S5": "Broken (S5)",
    "S6": "Recycled (S6)",
    "Other": "Other / Edge cases",
}
sort_order = ["S0", "S1", "S2", "S3", "T1", "S4", "S5", "S6", "Other"]

pipeline["label"] = pipeline["status"].map(status_labels)
pipeline["sort_order"] = pipeline["status"].map(lambda s: sort_order.index(s) if s in sort_order else 99)
pipeline = pipeline.sort_values("sort_order").drop(columns="sort_order")

pipeline.to_csv("../public/data/pipeline-stages.csv", index=False)
print(f"  pipeline-stages.csv: {len(pipeline)} rows")

# total pre-delivery backlog per country — drives the default right panel in Q3
pre_delivery_statuses = ["S0", "S1", "S2", "S3", "T1"]
stuck = devices[devices["status_clean"].isin(pre_delivery_statuses)]

backlog = (
    stuck.groupby("Country")
    .size()
    .reset_index(name="devices_stuck")
    .rename(columns={"Country": "country"})
    .sort_values("devices_stuck", ascending=False)
)
backlog.to_csv("../public/data/pipeline-by-country.csv", index=False)
print(f"  pipeline-by-country.csv: {len(backlog)} rows (countries with pre-delivery devices)")

# one row per (country, stage) — lets Q3 show which countries are specifically
# stuck at S2 rather than just showing total backlog per country
stage_country = (
    devices.groupby(["status_clean", "Country"])
    .size()
    .reset_index(name="device_count")
    .rename(columns={"Country": "country", "status_clean": "status"})
    .sort_values(["status", "device_count"], ascending=[True, False])
)
stage_country.to_csv("../public/data/pipeline-by-country-stage.csv", index=False)
print(f"  pipeline-by-country-stage.csv: {len(stage_country)} rows (per stage per country)")


# ── HUBS ─────────────────────────────────────────────────────────────────────

print("\ncleaning hubs...")

# unnamed first column is just a row index artifact from the csv export
unnamed_cols = [c for c in hubs.columns if c.strip() == ""]
hubs = hubs.drop(columns=unnamed_cols, errors="ignore")

# keeping only active demand columns, not the historical cumulative ones
hubs = hubs.drop(columns=["Needed (N)", "Remaining (R = N-T-D)", "% Completed"], errors="ignore")

hubs = hubs.rename(columns={
    "Needed": "needed_active",
    "Remaining (R = N-T-D).1": "remaining_active",
    "In transit (T)": "in_transit",
    "Delivered (D)": "delivered",
})

# closed hubs don't accept devices anymore so no point drawing them on the map
before = len(hubs)
hubs = hubs[hubs["Semaphore"] == "open"]
print(f"  keeping open hubs only: {len(hubs)} out of {before}")

hubs["Latitude"] = pd.to_numeric(hubs["Latitude"], errors="coerce")
hubs["Longitude"] = pd.to_numeric(hubs["Longitude"], errors="coerce")

hubs = hubs.dropna(subset=["Latitude", "Longitude"])

for col in ["needed_active", "remaining_active", "in_transit", "delivered"]:
    hubs[col] = pd.to_numeric(hubs[col], errors="coerce").fillna(0).astype(int)

hubs = hubs.rename(columns={
    "Hub": "hub_name",
    "Country": "country",
    "Latitude": "lat",
    "Longitude": "lon",
    "Semaphore": "semaphore",
})

hubs.to_csv("../public/data/hubs.csv", index=False)
print(f"  hubs.csv: {len(hubs)} rows")


# ── DONE ─────────────────────────────────────────────────────────────────────

print("\ndone! files written to public/data/:")
print("  origin-flows.csv              - Q1 timeline and origin bar chart")
print("  arc-pairs.csv                 - Q1 arc map")
print("  destination-flows.csv         - Q2 flow map")
print("  demand-gap.csv                - Q2 stacked demand bar")
print("  pipeline-stages.csv           - Q3 funnel chart")
print("  pipeline-by-country.csv       - Q3 country backlog bar")
print("  pipeline-by-country-stage.csv - Q3 per-stage country breakdown")
print("  hubs.csv                      - Q1 hub dots on map")