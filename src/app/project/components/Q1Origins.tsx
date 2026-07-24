"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import * as d3 from "d3";
import Papa from "papaparse";
import MapBase from "./MapBase";
import { isInRegion, type RegionId } from "./Regions";

type OriginFlow = {
  country: string;
  year: string;
  trip_count: string;
};

type ArcPair = {
  origin: string;
  destination: string;
  year: string;
  trip_count: string;
};

type Hub = {
  hub_name: string;
  country: string;
  lat: string;
  lon: string;
  delivered: string;
  remaining_active: string;
};

type HubDetail = {
  name: string;
  country: string;
  delivered: number;
  remaining: number;
  x: number;
  y: number;
};

type Q1Props = {
  width: number;
  height: number;
  selectedRegion: RegionId;
  arcLayer: "country" | "hub";
};

// centroids for all 26 origin countries + every real destination country in the dataset.
// missing entries here cause arcs to be silently dropped - found this when Germany->Paraguay
// wasn't showing up after clicking Germany, turned out ~half of all destinations had no entry.
const CENTROIDS: Record<string, [number, number]> = {
  // origin countries
  Germany: [10.45, 51.17],
  Spain: [-3.75, 40.46],
  "United States": [-95.71, 37.09],
  Austria: [14.55, 47.52],
  "Hong Kong S.A.R., China": [114.17, 22.32],
  Switzerland: [8.23, 46.82],
  Italy: [12.57, 41.87],
  France: [2.35, 46.23],
  "United Kingdom": [-3.44, 55.38],
  Netherlands: [5.29, 52.13],
  Belgium: [4.47, 50.5],
  "New Zealand": [174.88, -40.9],
  Thailand: [100.99, 15.87],
  Sweden: [18.64, 60.13],
  Uganda: [32.29, 1.37],
  Ireland: [-8.24, 53.41],
  Luxembourg: [6.13, 49.82],
  "Czech Republic": [15.47, 49.82],
  India: [78.96, 20.59],
  Tanzania: [34.89, -6.37],
  Colombia: [-74.3, 4.57],
  Madagascar: [46.87, -18.77],
  Indonesia: [113.92, -0.79],
  Poland: [19.15, 51.92],
  Afghanistan: [67.71, 33.94],
  Swaziland: [31.47, -26.52],
  // destination countries
  Ghana: [-1.02, 7.95],
  Kenya: [37.91, -0.02],
  "Congo (Kinshasa)": [23.65, -2.88],
  "South Africa": [25.08, -29.0],
  Cameroon: [12.35, 3.85],
  Nigeria: [8.68, 9.08],
  Togo: [0.82, 8.62],
  Namibia: [18.49, -22.96],
  Senegal: [-14.45, 14.5],
  Zambia: [27.85, -13.13],
  Nepal: [84.12, 28.39],
  Morocco: [-7.09, 31.79],
  Brazil: [-51.93, -14.24],
  Ukraine: [31.17, 48.38],
  "Bosnia and Herzegovina": [17.68, 44.17],
  Rwanda: [29.87, -1.94],
  Ethiopia: [40.49, 9.15],
  Mozambique: [35.53, -18.67],
  Malawi: [34.3, -13.25],
  Bangladesh: [90.36, 23.68],
  Philippines: [121.77, 12.88],
  Pakistan: [69.35, 30.38],
  Zimbabwe: [29.15, -20.0],
  "Ivory Coast": [-5.55, 7.54],
  Benin: [2.32, 9.31],
  Egypt: [30.8, 26.82],
  Bolivia: [-64.67, -16.29],
  Peru: [-75.02, -9.19],
  Ecuador: [-78.18, -1.83],
  Guatemala: [-90.23, 15.78],
  Haiti: [-72.29, 18.97],
  Romania: [24.97, 45.94],
  Bulgaria: [25.49, 42.73],
  Albania: [20.17, 41.15],
  Algeria: [1.66, 28.03],
  Angola: [17.87, -11.2],
  Armenia: [45.04, 40.07],
  Australia: [133.78, -25.27],
  Belarus: [27.95, 53.71],
  "Burkina Faso": [-1.56, 12.24],
  Burundi: [29.92, -3.37],
  Cambodia: [104.99, 12.57],
  "Cape Verde": [-23.61, 16.0],
  Chile: [-71.54, -35.68],
  China: [104.2, 35.86],
  "Congo (Brazzaville)": [15.83, -0.23],
  "Costa Rica": [-83.75, 9.75],
  Croatia: [15.2, 45.1],
  Cuba: [-77.78, 21.52],
  "Dominican Republic": [-70.16, 18.74],
  Gabon: [11.61, -0.8],
  Gambia: [-15.31, 13.44],
  Georgia: [43.36, 42.32],
  Greece: [21.82, 39.07],
  Guinea: [-9.7, 9.95],
  Honduras: [-86.24, 15.2],
  Hungary: [19.5, 47.16],
  Iran: [53.69, 32.43],
  Iraq: [43.68, 33.22],
  Israel: [34.85, 31.05],
  Jordan: [36.24, 31.96],
  Kazakhstan: [66.92, 48.02],
  Laos: [102.5, 19.86],
  Lebanon: [35.86, 33.85],
  Liberia: [-9.43, 6.43],
  Macedonia: [21.75, 41.61],
  Mali: [-3.99, 17.57],
  Mauritania: [-10.94, 21.01],
  Mexico: [-102.55, 23.63],
  Mongolia: [103.85, 46.86],
  Myanmar: [95.96, 21.91],
  Nicaragua: [-85.21, 12.87],
  Panama: [-80.78, 8.54],
  Paraguay: [-58.44, -23.44],
  Russia: [105.32, 61.52],
  "Sierra Leone": [-11.78, 8.46],
  Somalia: [46.2, 5.15],
  "Sri Lanka": [80.77, 7.87],
  Sudan: [30.22, 12.86],
  Syria: [38.3, 34.8],
  Turkey: [35.24, 38.96],
  Vanuatu: [166.96, -15.38],
  Vietnam: [108.28, 14.06],
  "Western Sahara": [-12.89, 24.21],
};

export default function Q1Origins({
  width,
  height,
  selectedRegion,
  arcLayer,
}: Q1Props) {
  const [flows, setFlows] = useState<OriginFlow[]>([]);
  const [arcPairs, setArcPairs] = useState<ArcPair[]>([]);
  const [hubs, setHubs] = useState<Hub[]>([]);
  const [hubDetail, setHubDetail] = useState<HubDetail | null>(null);
  const [selectedYearBar, setSelectedYearBar] = useState<string | null>(null);
  const [selectedOrigin, setSelectedOrigin] = useState<string | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const svgRef = useRef<d3.Selection<SVGSVGElement, unknown, null, undefined> | null>(null);
  const projectionRef = useRef<d3.GeoProjection | null>(null);
  const drawOverlayRef = useRef<() => void>(() => {});

  const mapHeight = Math.floor(height * 0.70);
  const timelineHeight = height - mapHeight;

  useEffect(() => {
    Papa.parse("/data/origin-flows.csv", {
      download: true, header: true,
      complete: (result) => setFlows(result.data as OriginFlow[]),
    });
    Papa.parse("/data/arc-pairs.csv", {
      download: true, header: true,
      complete: (result) => setArcPairs(result.data as ArcPair[]),
    });
    Papa.parse("/data/hubs.csv", {
      download: true, header: true,
      complete: (result) => setHubs(result.data as Hub[]),
    });
  }, []);

  const drawOverlay = useCallback(() => {
    const svg = svgRef.current;
    const projection = projectionRef.current;
    if (!svg || !projection) return;
    if (arcPairs.length === 0 && hubs.length === 0) return;

    svg.select(".overlay-layer").remove();
    const overlay = svg.append("g").attr("class", "overlay-layer");

    const outerSvg = (svg.node() as SVGGElement).closest("svg") as SVGSVGElement;

    function showTooltip(mapX: number, mapY: number, text: string) {
      d3.select(outerSvg).select(".hub-tooltip").remove();
      const t = d3.zoomTransform(outerSvg);
      const screenX = t.applyX(mapX);
      const screenY = t.applyY(mapY);

      d3.select(outerSvg)
        .append("text")
        .attr("class", "hub-tooltip")
        .attr("x", screenX)
        .attr("y", screenY - 12)
        .attr("text-anchor", "middle")
        .attr("fill", "#e2e8f0")
        .attr("font-size", "11px")
        .attr("font-family", "Inter, system-ui, sans-serif")
        .attr("pointer-events", "none")
        .attr("paint-order", "stroke")
        .attr("stroke", "#0d1421")
        .attr("stroke-width", "3px")
        .text(text);
    }
    function hideTooltip() {
      d3.select(outerSvg).select(".hub-tooltip").remove();
    }

    const activeYear = selectedYearBar;

    if (arcLayer === "country" && arcPairs.length > 0) {
      // filter by year and region (region checks origin side - Q1 is about where donations come from)
      const filteredPairs = arcPairs.filter((p) => {
        if (p.origin === p.destination) return false;
        if (activeYear && p.year !== activeYear) return false;
        if (!isInRegion(p.origin, selectedRegion)) return false;
        return true;
      });

      const pairMap = new Map<string, number>();
      filteredPairs.forEach((p) => {
        const key = `${p.origin}||${p.destination}`;
        pairMap.set(key, (pairMap.get(key) || 0) + parseInt(p.trip_count));
      });
      let aggregatedPairs = [...pairMap.entries()].map(([key, count]) => {
        const [origin, destination] = key.split("||");
        return { origin, destination, count };
      });

      // full unfiltered list used for dots so every origin country gets a dot
      // even if its arc didn't make the top-25 cut
      const allPairsForDots = aggregatedPairs;

      if (selectedOrigin) {
        aggregatedPairs = aggregatedPairs.filter((p) => p.origin === selectedOrigin);
      } else {
        aggregatedPairs = aggregatedPairs
          .sort((a, b) => b.count - a.count)
          .slice(0, 25);
      }

      const maxCount = d3.max(allPairsForDots, (p) => p.count) ?? 1;
      const arcWidth = d3.scaleSqrt().domain([1, maxCount]).range([0.6, 7]);
      const arcOpacity2 = d3.scaleSqrt().domain([1, maxCount]).range([0.3, 0.9]);

      const arcGeometry: { pair: typeof aggregatedPairs[number]; d: string; midX: number; midY: number }[] = [];

      aggregatedPairs.forEach((pair) => {
        const originCoords = CENTROIDS[pair.origin];
        const destCoords = CENTROIDS[pair.destination];
        if (!originCoords || !destCoords) return;

        const originPx = projection(originCoords);
        const destPx = projection(destCoords);
        if (!originPx || !destPx) return;

        const count = pair.count;
        const midX = (originPx[0] + destPx[0]) / 2;
        const midY = Math.min(originPx[1], destPx[1]) - 50;
        const d = `M ${originPx[0]} ${originPx[1]} Q ${midX} ${midY} ${destPx[0]} ${destPx[1]}`;

        overlay
          .append("path")
          .attr("d", d)
          .attr("fill", "none")
          .attr("stroke", "#0F6E56")
          .attr("stroke-width", arcWidth(count))
          .attr("opacity", arcOpacity2(count))
          .attr("stroke-linecap", "round")
          .attr("pointer-events", "none");

        arcGeometry.push({ pair, d, midX, midY });
      });

      arcGeometry.forEach(({ pair, d }) => {
        overlay
          .append("path")
          .attr("d", d)
          .attr("fill", "none")
          .attr("stroke", "transparent")
          .attr("stroke-width", 18)
          .style("cursor", "pointer")
          .on("mousemove", function (event: MouseEvent) {
            const [mx, my] = d3.pointer(event, overlay.node());
            showTooltip(mx, my, `${pair.origin} → ${pair.destination}: ${pair.count.toLocaleString()} trips`);
          })
          .on("mouseout", hideTooltip);
      });

      // a country stays green if it appears as an origin anywhere in the data,
      // even if it also appears as a destination ; prevents the dot colour
      // flip-flopping based on whichever pair happened to be processed last
      const allOriginCountries = new Set(allPairsForDots.map((p) => p.origin));
      const drawnOrigins = new Set<string>();
      const drawnDests = new Set<string>();

      allPairsForDots.forEach((pair) => {
        const originCoords = CENTROIDS[pair.origin];
        const destCoords = CENTROIDS[pair.destination];

        if (originCoords && !drawnOrigins.has(pair.origin)) {
          const px = projection(originCoords);
          if (px) {
            const isSelected = selectedOrigin === pair.origin;
            overlay.append("circle")
              .attr("cx", px[0]).attr("cy", px[1])
              .attr("r", isSelected ? 7 : 5)
              .attr("fill", "#0F6E56")
              .attr("opacity", isSelected ? 1 : 0.85)
              .attr("stroke", isSelected ? "#7FE8C0" : "white")
              .attr("stroke-width", isSelected ? 2 : 0.8)
              .style("cursor", "pointer")
              .on("click", function() {
                setSelectedOrigin(selectedOrigin === pair.origin ? null : pair.origin);
              })
              .on("mouseover", function() {
                showTooltip(px[0], px[1] - 10, selectedOrigin === pair.origin
                  ? `${pair.origin} — click to reset`
                  : `${pair.origin} — click to filter`
                );
              })
              .on("mouseout", hideTooltip);
            drawnOrigins.add(pair.origin);
          }
        }

        // orange dot only if this country never appears as an origin
        if (destCoords && !drawnDests.has(pair.destination) && !allOriginCountries.has(pair.destination)) {
          const px = projection(destCoords);
          if (px) {
            overlay.append("circle")
              .attr("cx", px[0]).attr("cy", px[1]).attr("r", 3.5)
              .attr("fill", "#BA7517").attr("opacity", 0.85)
              .attr("stroke", "white").attr("stroke-width", 0.6);
            drawnDests.add(pair.destination);
          }
        }
      });
    }

    if (arcLayer === "hub" && hubs.length > 0) {
      if (zoomLevel < 1.8) {
        // world view: one dot per country, sized by hub count
        const hubsByCountry = new Map<string, { count: number; delivered: number; lat: number; lon: number }>();
        hubs.forEach((hub) => {
          if (!isInRegion(hub.country, selectedRegion)) return;
          const lat = parseFloat(hub.lat);
          const lon = parseFloat(hub.lon);
          if (isNaN(lat) || isNaN(lon)) return;
          const existing = hubsByCountry.get(hub.country);
          if (existing) {
            existing.count++;
            existing.delivered += parseInt(hub.delivered) || 0;
          } else {
            hubsByCountry.set(hub.country, { count: 1, delivered: parseInt(hub.delivered) || 0, lat, lon });
          }
        });

        const maxHubs = Math.max(...[...hubsByCountry.values()].map(v => v.count));

        hubsByCountry.forEach((data, country) => {
          const coords = CENTROIDS[country] ?? [data.lon, data.lat] as [number, number];
          const px = projection(coords);
          if (!px) return;

          // counter-scale by zoom so dots don't balloon as the user zooms toward the switch threshold
          const baseDotSize = Math.max(3, Math.min(13, (data.count / maxHubs) * 13));
          const dotSize = baseDotSize / Math.max(zoomLevel, 1);

          overlay
            .append("circle")
            .attr("cx", px[0]).attr("cy", px[1]).attr("r", dotSize)
            .attr("fill", "#0F6E56").attr("opacity", 0.7)
            .attr("stroke", "white").attr("stroke-width", 0.8 / Math.max(zoomLevel, 1))
            .style("cursor", "pointer")
            .on("mouseover", function() {
              showTooltip(px[0], px[1] - dotSize - 5, `${country}: ${data.count} hubs · ${data.delivered.toLocaleString()} delivered`);
            })
            .on("mouseout", hideTooltip);
        });

      } else {
        // zoomed in: individual hub dots
        hubs.forEach((hub) => {
          if (!isInRegion(hub.country, selectedRegion)) return;
          const lat = parseFloat(hub.lat);
          const lon = parseFloat(hub.lon);
          if (isNaN(lat) || isNaN(lon)) return;

          const px = projection([lon, lat]);
          if (!px) return;

          const delivered = parseInt(hub.delivered) || 0;
          // dots are counter-scaled by zoom level so they stay a fixed visual size
          // rather than ballooning as the map scales up
          const baseDotSize = Math.max(1, Math.min(3.5, delivered / 600));
          const dotSize = baseDotSize / Math.max(zoomLevel, 1);
          const strokeW = 0.4 / Math.max(zoomLevel, 1);

          overlay
            .append("circle")
            .attr("cx", px[0]).attr("cy", px[1]).attr("r", dotSize)
            .attr("fill", "#0F6E56").attr("opacity", 0.85)
            .attr("stroke", "white").attr("stroke-width", strokeW)
            .style("cursor", "pointer")
            .on("mouseover", function() {
              showTooltip(px[0], px[1] - dotSize - 4, hub.hub_name);
            })
            .on("mouseout", hideTooltip)
            .on("click", function (event: MouseEvent) {
              setHubDetail({
                name: hub.hub_name,
                country: hub.country,
                delivered: parseInt(hub.delivered) || 0,
                remaining: parseInt(hub.remaining_active) || 0,
                x: event.offsetX,
                y: event.offsetY,
              });
            });
        });
      }
    }
  }, [flows, arcPairs, hubs, selectedYearBar, selectedRegion, arcLayer, selectedOrigin, zoomLevel]);

  useEffect(() => {
    drawOverlayRef.current = drawOverlay;
  }, [drawOverlay]);

  useEffect(() => {
    drawOverlay();
  }, [drawOverlay]);

  // stable identity across renders so MapBase doesn't tear down and rebuild d3.zoom() on every re-render
  const handleMapReady = useCallback((
    svg: d3.Selection<SVGSVGElement, unknown, null, undefined>,
    projection: d3.GeoProjection
  ) => {
    svgRef.current = svg;
    projectionRef.current = projection;
    setTimeout(() => drawOverlayRef.current(), 0);
  }, []);

  const handleZoom = useCallback((scale: number) => {
    setZoomLevel((prev) => {
      const wasZoomedIn = prev >= 1.8;
      const isZoomedIn = wasZoomedIn ? scale >= 1.7 : scale >= 1.9;
      if (isZoomedIn !== wasZoomedIn) return scale;
      return prev;
    });
  }, []);

  const yearTotals = flows.reduce<Record<string, number>>((acc, f) => {
    const y = f.year;
    if (y && y.length === 4) acc[y] = (acc[y] || 0) + parseInt(f.trip_count);
    return acc;
  }, {});

  const years = Object.keys(yearTotals).sort();
  const maxYearCount = Math.max(...Object.values(yearTotals));
  const barAreaHeight = timelineHeight - 46;

  // true when a specific region is selected but none of its countries
  // appear as an origin in the data , means the region only receives
  // devices in this dataset and never sends them
  const noArcsForRegion =
    arcLayer === "country" &&
    selectedRegion !== "all" &&
    arcPairs.length > 0 &&
    arcPairs.every((p) => !isInRegion(p.origin, selectedRegion));

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%" }}>

      {/* ── map ── */}
      <div style={{ position: "relative", width: "100%", height: mapHeight, flexShrink: 0 }}>
        <MapBase width={width} height={mapHeight} onReady={handleMapReady} onZoom={handleZoom} />

        {/* static legend - plain React div so it never moves or scales with zoom */}
        <div style={{
          position: "absolute", top: "10px", left: "10px",
          background: "rgba(15,17,23,0.55)", borderRadius: "8px",
          padding: "8px 12px", backdropFilter: "blur(4px)",
          pointerEvents: "none", fontSize: "10px", color: "#94a3b8",
          lineHeight: 1.8,
        }}>
          {arcLayer === "country" ? (
            <>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#0F6E56", display: "inline-block" }} />
                origin country
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#BA7517", display: "inline-block" }} />
                destination country
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ width: 12, height: 2, background: "#0F6E56", display: "inline-block" }} />
                thickness = trip count
              </div>
            </>
          ) : (
            <div>zoom in to see individual hubs</div>
          )}
        </div>

        {/* selected origin badge - only shown in country arc mode */}
        {selectedOrigin && arcLayer === "country" && (
          <div style={{
            position: "absolute", top: "10px", right: "10px",
            background: "rgba(15,110,86,0.15)",
            border: "1px solid #0F6E56",
            borderRadius: "20px", padding: "4px 14px",
            display: "flex", alignItems: "center", gap: "8px",
            fontSize: "12px", color: "#7FE8C0", zIndex: 10,
            backdropFilter: "blur(4px)",
          }}>
            <span>Showing arcs from <strong>{selectedOrigin}</strong></span>
            <button
              onClick={() => setSelectedOrigin(null)}
              style={{
                background: "none", border: "none",
                color: "#0F6E56", cursor: "pointer",
                fontSize: "13px", padding: 0, lineHeight: 1,
              }}
            >✕</button>
          </div>
        )}

        {/* empty state - shown when the selected region has no origin trips at all */}
        {noArcsForRegion && (
          <div style={{
            position: "absolute",
            top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            background: "rgba(15,17,23,0.85)",
            border: "1px solid #2a2d3a",
            borderRadius: "12px", padding: "20px 28px",
            textAlign: "center", maxWidth: "340px",
            backdropFilter: "blur(6px)", zIndex: 10,
          }}>
            <div style={{ fontSize: "13px", fontWeight: 600, color: "#e2e8f0", marginBottom: "8px" }}>
              No origin trips from this region
            </div>
            <div style={{ fontSize: "11px", color: "#64748b", lineHeight: 1.7 }}>
              Countries in this region appear as <span style={{ color: "#BA7517" }}>destinations</span> in
              the dataset, not as sources. Switch to{" "}
              <span style={{ color: "#94a3b8", fontStyle: "italic" }}>Demand &amp; Delivery</span> to
              see what they receive.
            </div>
          </div>
        )}

        {/* hub detail panel */}
        {hubDetail && (
          <div style={{
            position: "absolute",
            top: Math.min(hubDetail.y, mapHeight - 160),
            left: Math.min(hubDetail.x + 10, width - 175),
            background: "#1a1d27", border: "1px solid #2a2d3a",
            borderRadius: "8px", padding: "10px 14px",
            fontSize: "12px", color: "#e2e8f0", width: "165px", zIndex: 10,
          }}>
            <button
              onClick={() => setHubDetail(null)}
              style={{ float: "right", background: "none", border: "none", color: "#64748b", cursor: "pointer", fontSize: "14px", padding: 0 }}
            >✕</button>
            <div style={{ fontWeight: 600, color: "#0F6E56", marginBottom: "6px" }}>{hubDetail.name}</div>
            <div style={{ color: "#64748b", marginBottom: "6px", fontSize: "11px" }}>{hubDetail.country}</div>
            {[
              { label: "Delivered", val: hubDetail.delivered.toLocaleString(), color: "#0F6E56" },
              { label: "Remaining", val: hubDetail.remaining.toLocaleString(), color: "#BA7517" },
            ].map((r) => (
              <div key={r.label} style={{ display: "flex", justifyContent: "space-between", marginBottom: "3px" }}>
                <span style={{ color: "#94a3b8", fontSize: "11px" }}>{r.label}</span>
                <span style={{ color: r.color, fontWeight: 500, fontSize: "11px" }}>{r.val}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ── bottom panel: timeline left + origin bar chart right ── */}
      <div style={{
        height: timelineHeight, flexShrink: 0,
        background: "#1a1d27", borderTop: "1px solid #2a2d3a",
        display: "flex", overflow: "hidden", width: "100%",
      }}>

        {/* timeline panel - minWidth:0 + overflow:hidden stops year labels from
            spilling off the page edge */}
        <div style={{
          flex: 1, minWidth: 0, padding: "8px 14px 0",
          display: "flex", flexDirection: "column",
          borderRight: "1px solid #2a2d3a", overflow: "hidden",
        }}>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "6px", gap: "8px" }}>
            <span style={{ fontSize: "10px", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Trips per year — click to filter map
            </span>
            {selectedYearBar && (
              <button
                onClick={() => setSelectedYearBar(null)}
                style={{
                  fontSize: "10px", padding: "2px 8px", borderRadius: "4px",
                  border: "1px solid #2a2d3a", background: "transparent",
                  color: "#64748b", cursor: "pointer", fontFamily: "inherit",
                }}
              >
                clear ✕
              </button>
            )}
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", gap: "2px", flex: 1, paddingBottom: "4px", minWidth: 0 }}>
            {years.map((year) => {
              const count = yearTotals[year] || 0;
              const barH = maxYearCount > 0 ? Math.max(4, (count / maxYearCount) * barAreaHeight) : 4;
              const isSelected = selectedYearBar === year;
              return (
                <div
                  key={year}
                  style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}
                  onClick={() => setSelectedYearBar(isSelected ? null : year)}
                >
                  <div style={{
                    width: "100%", height: `${barH}px`,
                    background: isSelected ? "#0F6E56" : "#185FA5",
                    borderRadius: "2px 2px 0 0",
                    opacity: isSelected ? 1 : 0.6,
                    transition: "all 0.15s",
                  }} />
                  <div style={{
                    fontSize: "8px", marginTop: "3px",
                    color: isSelected ? "#0F6E56" : "#475569",
                    fontWeight: isSelected ? 600 : 400,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "clip",
                    width: "100%",
                    textAlign: "center",
                  }}>
                    {year}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* top origin countries bar chart */}
        <div style={{ width: "260px", flexShrink: 0, padding: "8px 14px 6px" }}>
          <div style={{ fontSize: "10px", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "6px" }}>
            Top origin countries
          </div>
          {(() => {
            const byCountry = flows.reduce<Record<string, number>>((acc, f) => {
              if (selectedYearBar && f.year !== selectedYearBar) return acc;
              if (!isInRegion(f.country, selectedRegion)) return acc;
              acc[f.country] = (acc[f.country] || 0) + parseInt(f.trip_count);
              return acc;
            }, {});
            const top = Object.entries(byCountry)
              .sort((a, b) => b[1] - a[1])
              .slice(0, 6);
            const maxVal = top[0]?.[1] || 1;
            return top.map(([country, count], i) => (
              <div key={country} style={{ marginBottom: "5px", display: "flex", alignItems: "center", gap: "6px" }}>
                <div style={{
                  width: "72px", fontSize: "10px", color: "#94a3b8",
                  textAlign: "right", flexShrink: 0,
                  overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                }}>
                  {country}
                </div>
                <div style={{ flex: 1, height: "10px", background: "#0f1117", borderRadius: "2px", overflow: "hidden" }}>
                  <div style={{
                    height: "100%",
                    width: `${(count / maxVal) * 100}%`,
                    background: i === 0 ? "#0F6E56" : "#185FA5",
                    borderRadius: "2px",
                    opacity: 0.8,
                  }} />
                </div>
                <div style={{ fontSize: "10px", color: "#94a3b8", width: "36px", flexShrink: 0, textAlign: "right" }}>
                  {count.toLocaleString()}
                </div>
              </div>
            ));
          })()}
        </div>

      </div>
    </div>
  );
}