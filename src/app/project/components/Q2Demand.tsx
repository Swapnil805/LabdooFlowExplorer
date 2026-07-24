"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import * as d3 from "d3";
import Papa from "papaparse";
import MapBase from "./MapBase";
import { isInRegion, type RegionId } from "./Regions";

type DemandRow = {
  country: string;
  needed: string;
  delivered: string;
  remaining: string;
  in_transit: string;
  school_count: string;
  unmet_pct: string;
};

type DestFlow = {
  country: string;
  trips_received: string;
};

type CountryDetail = {
  country: string;
  needed: number;
  delivered: number;
  remaining: number;
  inTransit: number;
  unmetPct: number;
  trips: number;
};

type Q2Props = {
  width: number;
  height: number;
  selectedRegion: RegionId;
};

type SortMode = "absolute" | "percent";

const CENTROIDS: Record<string, [number, number]> = {
  // Africa
  Uganda: [32.29, 1.37],
  Ghana: [-1.02, 7.95],
  Tanzania: [34.89, -6.37],
  Kenya: [37.91, -0.02],
  Cameroon: [12.35, 3.85],
  Ethiopia: [40.49, 9.15],
  Rwanda: [29.87, -1.94],
  "DR Congo": [23.65, -2.88],
  "Congo (Kinshasa)": [23.65, -2.88],
  "Congo (Brazzaville)": [15.83, -0.23],
  Senegal: [-14.45, 14.5],
  Morocco: [-7.09, 31.79],
  Nigeria: [8.68, 9.08],
  "Ivory Coast": [-5.55, 7.54],
  Mozambique: [35.53, -18.67],
  Zambia: [27.85, -13.13],
  Zimbabwe: [29.15, -20.0],
  Malawi: [34.3, -13.25],
  "South Africa": [25.08, -29.0],
  Madagascar: [46.87, -18.77],
  Sudan: [30.22, 12.86],
  Togo: [0.82, 8.62],
  Benin: [2.32, 9.31],
  "Burkina Faso": [-1.56, 12.36],
  Mali: [-1.98, 17.57],
  Guinea: [-11.81, 11.0],
  Niger: [8.08, 17.61],
  Chad: [18.73, 15.45],
  Angola: [17.87, -11.2],
  Egypt: [30.8, 26.82],
  Tunisia: [9.56, 33.89],
  Algeria: [2.63, 28.03],
  Libya: [17.23, 26.34],
  Somalia: [45.34, 5.15],
  Burundi: [29.92, -3.37],
  "Cape Verde": [-24.01, 14.93],
  Gabon: [11.61, -0.8],
  Gambia: [-15.31, 13.44],
  Liberia: [-9.43, 6.43],
  Mauritania: [-10.94, 20.25],
  Namibia: [18.49, -22.96],
  "Sierra Leone": [-11.78, 8.46],
  Swaziland: [31.47, -26.52],
  "Western Sahara": [-13.0, 24.5],
  // Asia
  India: [78.96, 20.59],
  Nepal: [84.12, 28.39],
  Bangladesh: [90.36, 23.68],
  Philippines: [121.77, 12.88],
  Pakistan: [69.35, 30.38],
  Myanmar: [95.96, 16.87],
  Cambodia: [104.99, 12.57],
  Laos: [102.5, 17.97],
  Vietnam: [108.28, 14.06],
  Indonesia: [113.92, -0.79],
  Thailand: [100.99, 15.87],
  "Sri Lanka": [80.77, 7.87],
  Afghanistan: [67.71, 33.94],
  Syria: [38.3, 34.8],
  Iraq: [43.68, 33.22],
  Iran: [53.69, 32.43],
  Jordan: [36.24, 31.96],
  Palestine: [35.23, 31.95],
  Lebanon: [35.86, 33.87],
  Yemen: [47.59, 15.55],
  China: [104.19, 35.86],
  Mongolia: [103.85, 46.86],
  Kazakhstan: [66.92, 48.02],
  Georgia: [43.36, 42.32],
  Armenia: [44.56, 40.07],
  Turkey: [35.24, 38.96],
  Israel: [34.85, 31.05],
  // Europe
  Germany: [10.45, 51.17],
  Spain: [-3.75, 40.46],
  France: [2.35, 46.23],
  Ukraine: [31.17, 48.38],
  Romania: [24.97, 45.94],
  Bulgaria: [25.49, 42.73],
  Albania: [20.17, 41.15],
  "Bosnia and Herzegovina": [17.68, 44.17],
  Croatia: [15.2, 45.1],
  Greece: [21.82, 39.07],
  Hungary: [19.5, 47.16],
  Italy: [12.57, 41.87],
  Macedonia: [21.75, 41.61],
  Belarus: [27.95, 53.71],
  Belgium: [4.47, 50.5],
  Austria: [14.55, 47.52],
  Russia: [105.32, 61.52],
  "United Kingdom": [-3.44, 55.38],
  // Latin America
  Colombia: [-74.3, 4.57],
  Bolivia: [-64.67, -16.29],
  Peru: [-75.02, -9.19],
  Ecuador: [-78.18, -1.83],
  Guatemala: [-90.23, 15.78],
  Honduras: [-86.24, 15.2],
  Nicaragua: [-85.21, 12.87],
  "El Salvador": [-88.9, 13.79],
  Haiti: [-72.29, 18.97],
  Cuba: [-79.52, 21.52],
  Venezuela: [-66.59, 6.42],
  Paraguay: [-58.44, -23.44],
  Mexico: [-102.55, 23.63],
  Brazil: [-51.93, -14.24],
  Argentina: [-63.62, -38.42],
  Chile: [-71.54, -35.68],
  "Dominican Republic": [-70.16, 18.74],
  "Costa Rica": [-83.75, 9.75],
  Panama: [-80.78, 8.54],
  // North America + Oceania
  "United States": [-95.71, 37.09],
  Australia: [133.78, -25.27],
  "Papua New Guinea": [143.96, -6.31],
  Vanuatu: [166.96, -15.38],
  // countries with real demand-gap data (Edoovillages) but few/no Dootrips records
  Switzerland: [8.23, 46.82],
  Denmark: [9.5, 56.26],
  Ireland: [-8.24, 53.41],
  Portugal: [-8.22, 39.4],
  "New Zealand": [174.88, -40.9],
  Serbia: [21.01, 44.02],
  "South Korea": [127.77, 35.91],
  "South Sudan": [31.31, 6.88],
  Uruguay: [-55.77, -32.52],
  Belize: [-88.5, 17.19],
  "Guinea-Bissau": [-15.18, 11.8],
  Kyrgyzstan: [74.77, 41.2],
  "Marshall Islands": [171.18, 7.13],
  Tonga: [-175.2, -21.18],
};

export default function Q2Demand({ width, height, selectedRegion }: Q2Props) {
  const [demandData, setDemandData] = useState<DemandRow[]>([]);
  const [destFlows, setDestFlows] = useState<DestFlow[]>([]);
  const [countryDetail, setCountryDetail] = useState<CountryDetail | null>(null);
  const [sortMode, setSortMode] = useState<SortMode>("absolute");

  const svgRef = useRef<d3.Selection<SVGSVGElement, unknown, null, undefined> | null>(null);
  const projectionRef = useRef<d3.GeoProjection | null>(null);

  const mapHeight = Math.floor(height * 0.68);
  const chartHeight = height - mapHeight;

  useEffect(() => {
    Papa.parse("/data/demand-gap.csv", {
      download: true, header: true,
      complete: (result) => setDemandData(result.data as DemandRow[]),
    });
    Papa.parse("/data/destination-flows.csv", {
      download: true, header: true,
      complete: (result) => setDestFlows(result.data as DestFlow[]),
    });
  }, []);

  const drawOverlay = useCallback(() => {
    const svg = svgRef.current;
    const projection = projectionRef.current;
    if (!svg || !projection || demandData.length === 0) return;

    svg.select(".overlay-layer").remove();
    const overlay = svg.append("g").attr("class", "overlay-layer");

    const demandByCountry = new Map<string, DemandRow>();
    demandData.forEach((d) => demandByCountry.set(d.country, d));

    const tripsByCountry = new Map<string, number>();
    destFlows.forEach((d) => tripsByCountry.set(d.country, parseInt(d.trips_received) || 0));

    const maxUnmetPct = d3.max(demandData, (d) => parseFloat(d.unmet_pct)) ?? 100;
    const colourScale = d3
      .scaleSequential()
      .domain([0, maxUnmetPct])
      .interpolator(d3.interpolate("#1e4d3a", "#BA7517"));

    // size by devices needed, not trips received - trips can be 0 for countries
    // like Germany or Tonga where devices arrived without a logged Dootrips record
    const maxNeeded = d3.max(demandData, (d) => parseInt(d.needed)) ?? 1;
    const circleSize = d3.scaleSqrt().domain([0, maxNeeded]).range([3, 20]);

    // union of both datasets so countries with real demand but zero trip records
    // (Germany, Tonga, etc.) still get a bubble on the map
    const allCountries = new Set<string>([
      ...destFlows.map((d) => d.country),
      ...demandData.map((d) => d.country),
    ]);

    allCountries.forEach((country) => {
      // Q2 filters by destination region, unlike Q1 which filters by origin
      if (!isInRegion(country, selectedRegion)) return;
      const coords = CENTROIDS[country];
      if (!coords) return;

      const px = projection(coords);
      if (!px) return;

      const demand = demandByCountry.get(country);
      const unmetPct = demand ? parseFloat(demand.unmet_pct) : 0;
      const needed = demand ? parseInt(demand.needed) || 0 : 0;
      const trips = tripsByCountry.get(country) || 0;

      overlay
        .append("circle")
        .attr("cx", px[0])
        .attr("cy", px[1])
        .attr("r", circleSize(needed))
        .attr("fill", colourScale(unmetPct))
        .attr("stroke", "#e2e8f0")
        .attr("stroke-width", 0.5)
        .attr("opacity", 0.85)
        .style("cursor", "pointer")
        .on("click", function () {
          const dem = demandByCountry.get(country);
          setCountryDetail({
            country,
            needed: dem ? parseInt(dem.needed) : 0,
            delivered: dem ? parseInt(dem.delivered) : 0,
            remaining: dem ? parseInt(dem.remaining) : 0,
            inTransit: dem ? parseInt(dem.in_transit) : 0,
            unmetPct: dem ? parseFloat(dem.unmet_pct) : 0,
            trips,
          });
        });
    });

  }, [demandData, destFlows, selectedRegion]);

  useEffect(() => {
    drawOverlay();
  }, [drawOverlay]);

  function handleMapReady(
    svg: d3.Selection<SVGSVGElement, unknown, null, undefined>,
    projection: d3.GeoProjection
  ) {
    svgRef.current = svg;
    projectionRef.current = projection;
    setTimeout(() => drawOverlay(), 0);
  }

  // bar chart filtered by region so it always matches what's visible on the map
  const barData = demandData
    .filter((d) => parseInt(d.remaining) > 0 && parseInt(d.needed) > 0)
    .filter((d) => isInRegion(d.country, selectedRegion))
    .sort((a, b) =>
      sortMode === "absolute"
        ? parseInt(b.remaining) - parseInt(a.remaining)
        : parseFloat(b.unmet_pct) - parseFloat(a.unmet_pct)
    )
    .slice(0, 30);

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%" }}>

      {/* ── choropleth map ── */}
      <div style={{ position: "relative", width: "100%", height: mapHeight, flexShrink: 0 }}>
        <MapBase width={width} height={mapHeight} onReady={handleMapReady} />

        {/* static legend - React div so it never moves with zoom/pan */}
        <div style={{
          position: "absolute", top: "10px", left: "10px",
          background: "rgba(15,17,23,0.55)", borderRadius: "8px",
          padding: "8px 12px", backdropFilter: "blur(4px)",
          pointerEvents: "none", fontSize: "10px", color: "#94a3b8",
          maxWidth: "190px", lineHeight: 1.7,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "2px" }}>
            <span style={{
              width: 14, height: 14, borderRadius: "50%",
              border: "1.5px solid #94a3b8", display: "inline-block", flexShrink: 0,
            }} />
            bigger circle = more devices needed
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{
              width: 10, height: 10, borderRadius: "50%",
              background: "linear-gradient(90deg, #1e4d3a, #BA7517)",
              display: "inline-block", flexShrink: 0,
            }} />
            colour: green = mostly fulfilled, orange = mostly unmet
          </div>
        </div>
      </div>

      {/* ── bottom panel: bars left + detail right ── */}
      <div style={{
        height: chartHeight, background: "#1a1d27",
        borderTop: "1px solid #2a2d3a", display: "flex",
        flexShrink: 0, overflow: "hidden",
      }}>
        {/* bar chart */}
        <div style={{ flex: 1, padding: "10px 14px", overflowY: "scroll", borderRight: "1px solid #2a2d3a", maxHeight: "100%" }}>

          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "5px" }}>
            <span style={{ fontSize: "10px", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              {sortMode === "absolute"
                ? "Top destinations — most devices unmet (absolute)"
                : "Top destinations — highest unmet % (proportional)"}
            </span>
            <button
              onClick={() => setSortMode(sortMode === "absolute" ? "percent" : "absolute")}
              style={{
                marginLeft: "auto", fontSize: "10px", padding: "3px 8px",
                borderRadius: "5px", border: "1px solid #2a2d3a",
                background: "#0f1117", color: "#e2e8f0", cursor: "pointer", fontFamily: "inherit",
                whiteSpace: "nowrap",
              }}
            >
              {sortMode === "absolute" ? "Sort by % unmet" : "Sort by raw count"}
            </button>
          </div>

          {/* colour legend */}
          <div style={{ display: "flex", gap: "12px", marginBottom: "8px" }}>
            {[
              { color: "#0F6E56", label: "delivered" },
              { color: "#185FA5", label: "in transit" },
              { color: "#BA7517", label: "unmet" },
            ].map((item) => (
              <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <div style={{ width: "8px", height: "8px", background: item.color, borderRadius: "2px" }} />
                <span style={{ fontSize: "10px", color: "#64748b" }}>{item.label}</span>
              </div>
            ))}
          </div>

          {barData.map((row, index) => {
            const needed = parseInt(row.needed) || 1;
            const delivered = parseInt(row.delivered) || 0;
            const inTransit = parseInt(row.in_transit) || 0;
            const remaining = parseInt(row.remaining) || 0;

            // each segment as % of needed so they always add up to 100%
            const deliveredPct = Math.min((delivered / needed) * 100, 100);
            const inTransitPct = Math.min((inTransit / needed) * 100, 100 - deliveredPct);
            const remainingPct = Math.min((remaining / needed) * 100, 100 - deliveredPct - inTransitPct);

            const isSelected = countryDetail?.country === row.country;

            return (
              <div
                key={row.country}
                style={{
                  marginBottom: "4px", cursor: "pointer",
                  background: index % 2 === 0 ? "transparent" : "rgba(255,255,255,0.025)",
                  borderRadius: "3px", padding: "2px 0",
                }}
                onClick={() => {
                  setCountryDetail({
                    country: row.country,
                    needed,
                    delivered,
                    remaining,
                    inTransit,
                    unmetPct: parseFloat(row.unmet_pct),
                    trips: destFlows.find((d) => d.country === row.country)
                      ? parseInt(destFlows.find((d) => d.country === row.country)!.trips_received)
                      : 0,
                  });
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <div style={{
                    width: "80px", fontSize: "10px", textAlign: "right", flexShrink: 0,
                    color: isSelected ? "#e2e8f0" : "#94a3b8",
                    fontWeight: isSelected ? 600 : 400,
                  }}>
                    {row.country}
                  </div>
                  <div style={{
                    flex: 1, height: "12px", background: "#0f1117",
                    borderRadius: "2px", overflow: "hidden", position: "relative",
                    outline: isSelected ? "1px solid #0F6E56" : "none",
                  }}>
                    <div style={{ position: "absolute", left: 0, top: 0, height: "100%", width: `${deliveredPct}%`, background: "#0F6E56" }} />
                    <div style={{ position: "absolute", left: `${deliveredPct}%`, top: 0, height: "100%", width: `${inTransitPct}%`, background: "#185FA5" }} />
                    <div style={{ position: "absolute", left: `${deliveredPct + inTransitPct}%`, top: 0, height: "100%", width: `${remainingPct}%`, background: "#BA7517" }} />
                  </div>
                  <div style={{ fontSize: "10px", color: "#BA7517", width: "30px", flexShrink: 0 }}>
                    {parseFloat(row.unmet_pct).toFixed(0)}%
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* detail panel - updates on bubble or bar click */}
        <div style={{ width: "200px", flexShrink: 0, padding: "10px 14px" }}>
          <div style={{ fontSize: "10px", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "10px" }}>
            Country detail
          </div>

          {countryDetail ? (
            <>
              <div style={{ fontSize: "14px", fontWeight: 600, color: "#BA7517", marginBottom: "10px" }}>
                {countryDetail.country}
              </div>
              {[
                { label: "Devices needed", val: countryDetail.needed.toLocaleString(), color: "#e2e8f0" },
                { label: "Delivered", val: countryDetail.delivered.toLocaleString(), color: "#0F6E56" },
                { label: "In transit", val: countryDetail.inTransit.toLocaleString(), color: "#378ADD" },
                { label: "Still unmet", val: countryDetail.remaining.toLocaleString(), color: "#BA7517" },
                { label: "Unmet %", val: `${countryDetail.unmetPct.toFixed(1)}%`, color: "#BA7517" },
                // label is explicit about cross-border so a 0 here doesn't look
                // contradictory next to a non-zero delivered count (e.g. Germany)
                { label: "Cross-border trips received", val: countryDetail.trips.toLocaleString(), color: "#94a3b8" },
              ].map((row) => (
                <div key={row.label} style={{ marginBottom: "6px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #1a2332", paddingBottom: "6px" }}>
                    <span style={{ fontSize: "11px", color: "#64748b" }}>{row.label}</span>
                    <span style={{ fontSize: "11px", color: row.color, fontWeight: 500 }}>{row.val}</span>
                  </div>
                </div>
              ))}

              <div style={{ marginTop: "8px" }}>
                <div style={{ fontSize: "10px", color: "#64748b", marginBottom: "4px" }}>Breakdown</div>
                <div style={{ height: "10px", background: "#0f1117", borderRadius: "3px", overflow: "hidden", display: "flex" }}>
                  <div style={{ width: `${(countryDetail.delivered / countryDetail.needed) * 100}%`, background: "#0F6E56" }} />
                  <div style={{ width: `${(countryDetail.inTransit / countryDetail.needed) * 100}%`, background: "#185FA5" }} />
                  <div style={{ width: `${(countryDetail.remaining / countryDetail.needed) * 100}%`, background: "#BA7517" }} />
                </div>
              </div>
            </>
          ) : (
            <div style={{ fontSize: "12px", color: "#475569", lineHeight: 1.6 }}>
              Click any bubble on the map or a bar in the chart to see country details here.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}