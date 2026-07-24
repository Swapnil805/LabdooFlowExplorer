"use client";

import { useState, useRef, useEffect } from "react";
import Papa from "papaparse";
import Q1Origins from "./components/Q1Origins";
import Q2Demand from "./components/Q2Demand";
import Q3Pipeline from "./components/Q3Pipeline";
import { REGION_LABELS, isInRegion, type RegionId } from "./components/Regions";

type Tab = "q1" | "q2" | "q3";

type OriginFlowRow = { country: string; trip_count: string };
type DemandRow = {
  country: string;
  delivered: string;
  remaining: string;
  total_students: string;
};

export default function ProjectPage() {
  const [activeTab, setActiveTab] = useState<Tab>("q1");
  const [selectedRegion, setSelectedRegion] = useState<RegionId>("all");
  const [arcLayer, setArcLayer] = useState<"country" | "hub">("country");

  // ResizeObserver on the content area so map components always know their actual dimensions and stays accurate even when switching between tabs
  const contentRef = useRef<HTMLDivElement>(null);
  const [mapSize, setMapSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!contentRef.current) return;
    const observer = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      setMapSize({ width, height });
    });
    observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, []);

  // stats strip data loaded at page level so all four numbers react to
  // selectedRegion regardless of which tab is currently active
  const [originFlows, setOriginFlows] = useState<OriginFlowRow[]>([]);
  const [demandData, setDemandData] = useState<DemandRow[]>([]);

  useEffect(() => {
    Papa.parse("/data/origin-flows.csv", {
      download: true, header: true,
      complete: (result) => setOriginFlows(result.data as OriginFlowRow[]),
    });
    Papa.parse("/data/demand-gap.csv", {
      download: true, header: true,
      complete: (result) => setDemandData(result.data as DemandRow[]),
    });
  }, []);

  /*
   * "trips sent" is filtered by ORIGIN country (Q1 framing: where do donations come from).
   * delivered/unmet/students are filtered by DESTINATION country (Q2 framing: where do they go).
   * This is why Latin America shows 0 trips sent but real delivered numbers, it's purely
   * a receiving region in this dataset, never an origin. The label says "from region"
   * so the 0 doesn't look like a bug next to a non-zero delivered count.
   */
  const completedTrips = originFlows
    .filter((f) => isInRegion(f.country, selectedRegion))
    .reduce((sum, f) => sum + (parseInt(f.trip_count) || 0), 0);

  const filteredDemand = demandData.filter((d) => isInRegion(d.country, selectedRegion));
  const devicesDelivered = filteredDemand.reduce((sum, d) => sum + (parseInt(d.delivered) || 0), 0);
  const stillUnmet = filteredDemand.reduce((sum, d) => sum + (parseInt(d.remaining) || 0), 0);
  const studentsReached = filteredDemand.reduce((sum, d) => sum + (parseInt(d.total_students) || 0), 0);

  function formatCompact(n: number): string {
    if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(2)}M`;
    if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
    return n.toLocaleString();
  }

  const STATS = [
    { label: "trips sent (from region)", value: completedTrips.toLocaleString(), color: "var(--text-primary)" },
    { label: "devices delivered", value: devicesDelivered.toLocaleString(), color: "#0F6E56" },
    { label: "still unmet", value: stillUnmet.toLocaleString(), color: "#BA7517" },
    { label: "students reached", value: formatCompact(studentsReached), color: "var(--text-primary)" },
  ];

  return (
    <div style={styles.wrapper}>
      <header style={styles.topbar}>
        <div
          style={{ ...styles.logo, cursor: "pointer" }}
          onClick={() => window.location.reload()}
          title="Reload"
        >
          <span style={styles.logoAccent}>Labdoo</span> Flow Explorer
        </div>

        <nav style={styles.tabs}>
          {(
            [
              { id: "q1", label: "Origins" },
              { id: "q2", label: "Demand & Delivery" },
              { id: "q3", label: "Pipeline Status" },
            ] as { id: Tab; label: string }[]
          ).map((tab) => (
            <button
              key={tab.id}
              style={{ ...styles.tab, ...(activeTab === tab.id ? styles.tabActive : {}) }}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </header>

      {/* stats strip */}
      <div style={styles.statsStrip}>
        {STATS.map((s) => (
          <div key={s.label} style={styles.statBox}>
            <div style={{ ...styles.statNumber, color: s.color }}>{s.value}</div>
            <div style={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </div>

      <div style={styles.body}>
        <aside style={styles.sidebar}>
          <div style={styles.sidebarLabel}>Region</div>
          {(Object.entries(REGION_LABELS) as [RegionId, string][]).map(([id, label]) => (
            <button
              key={id}
              style={{ ...styles.chip, ...(selectedRegion === id ? styles.chipActive : {}) }}
              onClick={() => setSelectedRegion(id)}
            >
              {label}
            </button>
          ))}

          {/* arc layer toggle only relevant on Q1 */}
          {activeTab === "q1" && (
            <>
              <div style={styles.sidebarLabel}>Arc layer</div>
              <button
                style={styles.toggleBtn}
                onClick={() => setArcLayer(arcLayer === "country" ? "hub" : "country")}
              >
                {arcLayer === "country" ? "Country arcs" : "Hub-level dots"}
              </button>
            </>
          )}
        </aside>

        <main ref={contentRef} style={styles.content}>
          {/* all three tabs stay mounted (display:none when inactive) so the
              map doesn't lose its zoom/pan state when switching tabs */}
          <div style={{ width: "100%", height: "100%", display: activeTab === "q1" ? "block" : "none" }}>
            <Q1Origins width={mapSize.width} height={mapSize.height} selectedRegion={selectedRegion} arcLayer={arcLayer} />
          </div>
          <div style={{ width: "100%", height: "100%", display: activeTab === "q2" ? "block" : "none" }}>
            <Q2Demand width={mapSize.width} height={mapSize.height} selectedRegion={selectedRegion} />
          </div>
          <div style={{ width: "100%", height: "100%", display: activeTab === "q3" ? "block" : "none" }}>
            <Q3Pipeline selectedRegion={selectedRegion} />
          </div>
        </main>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    display: "flex", flexDirection: "column", height: "100vh", overflow: "hidden",
    backgroundColor: "#0f1117", color: "#e2e8f0",
    fontFamily: "'Inter', 'DM Sans', system-ui, sans-serif", fontSize: "14px",
  },
  topbar: {
    display: "flex", alignItems: "center", gap: "12px", padding: "8px 16px",
    backgroundColor: "#1a1d27", borderBottom: "1px solid #2a2d3a", flexShrink: 0,
  },
  logo: { fontSize: "15px", fontWeight: 600, color: "#e2e8f0", letterSpacing: "0.02em", whiteSpace: "nowrap" },
  logoAccent: { color: "#0F6E56" },
  tabs: { display: "flex", gap: "4px", flex: 1 },
  tab: {
    fontSize: "12px", padding: "5px 12px", borderRadius: "6px",
    borderWidth: "1px", borderStyle: "solid", borderColor: "transparent",
    background: "transparent", color: "#94a3b8", cursor: "pointer",
    transition: "all 0.15s", fontFamily: "inherit",
  },
  tabActive: { background: "#0f1117", borderColor: "#2a2d3a", color: "#e2e8f0", fontWeight: 500 },
  statsStrip: {
    display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px",
    backgroundColor: "#2a2d3a", borderBottom: "1px solid #2a2d3a", flexShrink: 0,
  },
  statBox: { backgroundColor: "#1a1d27", padding: "10px 14px" },
  statNumber: { fontSize: "18px", fontWeight: 500, lineHeight: 1.2 },
  statLabel: { fontSize: "11px", color: "#64748b", marginTop: "2px" },
  body: { display: "flex", flex: 1, overflow: "hidden", minHeight: 0 },
  sidebar: {
    width: "160px", backgroundColor: "#1a1d27", borderRight: "1px solid #2a2d3a",
    padding: "12px", flexShrink: 0, overflowY: "auto",
  },
  sidebarLabel: {
    fontSize: "10px", color: "#64748b", textTransform: "uppercase",
    letterSpacing: "0.07em", marginBottom: "5px", marginTop: "12px",
  },
  chip: {
    display: "block", width: "100%", textAlign: "left", fontSize: "11px",
    padding: "5px 8px", borderRadius: "5px",
    borderWidth: "1px", borderStyle: "solid", borderColor: "transparent",
    background: "transparent", color: "#94a3b8", cursor: "pointer",
    marginBottom: "2px", fontFamily: "inherit",
  },
  chipActive: { background: "rgba(15, 110, 86, 0.15)", color: "#0F6E56", fontWeight: 500 },
  toggleBtn: {
    width: "100%", textAlign: "left", fontSize: "11px", padding: "5px 8px",
    borderRadius: "5px", border: "1px solid #2a2d3a", background: "#0f1117",
    color: "#e2e8f0", cursor: "pointer", marginTop: "3px", fontFamily: "inherit",
  },
  content: { flex: 1, overflow: "hidden", position: "relative", minHeight: 0 },
};