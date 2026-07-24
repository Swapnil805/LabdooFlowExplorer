"use client";

import { useEffect, useState } from "react";
import Papa from "papaparse";
import { isInRegion, type RegionId } from "./Regions";

type PipelineStage = {
  status: string;
  label: string;
  device_count: string;
};

type CountryBacklog = {
  country: string;
  devices_stuck: string;
};

type StageCountry = {
  status: string;
  country: string;
  device_count: string;
};

type SelectedStage = {
  status: string;
  label: string;
  count: number;
  color: string;
};

const STAGE_CONFIG: Record<string, { color: string; shortLabel: string; description: string }> = {
  "S0": {
    color: "#185FA5",
    shortLabel: "Tagged",
    description: "Device has been registered on the Labdoo platform but no hub has collected it yet. It is still with the donor.",
  },
  "S1": {
    color: "#378ADD",
    shortLabel: "At hub, awaiting QA",
    description: "Device has arrived at a Labdoo hub. Volunteers are checking it works, cleaning it, and installing the required software.",
  },
  "S2": {
    color: "#BA7517",
    shortLabel: "Passed QA — awaiting school assignment",
    description: "Device passed all quality checks and is ready to ship. It is sitting in a hub warehouse waiting to be matched with a school in need. This is the biggest bottleneck in the network.",
  },
  "S3": {
    color: "#854F0B",
    shortLabel: "Assigned — awaiting shipment",
    description: "Device has been assigned to a specific school but no Dootrip has been scheduled yet to carry it there.",
  },
  "T1": {
    color: "#EF9F27",
    shortLabel: "In transit",
    description: "Device is currently on a Dootrip — a volunteer is physically carrying it to the destination country.",
  },
  "S4": {
    color: "#0F6E56",
    shortLabel: "Delivered ✓",
    description: "Device has been successfully delivered to a school and is being used by students.",
  },
  "S5": {
    color: "#475569",
    shortLabel: "Broken / retired",
    description: "Device was found to be broken beyond repair during or after the journey and has been retired from service.",
  },
  "S6": {
    color: "#334155",
    shortLabel: "Recycled",
    description: "Device has been responsibly recycled or repurposed at end of life.",
  },
  "Other": {
    color: "#2a2d3a",
    shortLabel: "Other / Edge cases",
    description: "Undocumented status codes (L1, T2, S7-S9). Less than 0.7% of all devices. Grouped here to avoid misleading labels.",
  },
};

const STAGE_ORDER = ["S4", "S2", "S0", "S1", "T1", "S3", "S5", "S6", "Other"];

type Q3Props = {
  // region only affects the right-side country panels, not the funnel bars
  // (total devices per stage is a global number, not meaningful per-region)
  selectedRegion: RegionId;
};

export default function Q3Pipeline({ selectedRegion }: Q3Props) {
  const [stages, setStages] = useState<PipelineStage[]>([]);
  const [backlog, setBacklog] = useState<CountryBacklog[]>([]);
  const [stageCountry, setStageCountry] = useState<StageCountry[]>([]);
  const [selectedStage, setSelectedStage] = useState<SelectedStage | null>(null);

  useEffect(() => {
    Papa.parse("/data/pipeline-stages.csv", {
      download: true, header: true,
      complete: (result) => setStages(result.data as PipelineStage[]),
    });
    Papa.parse("/data/pipeline-by-country.csv", {
      download: true, header: true,
      complete: (result) => setBacklog(result.data as CountryBacklog[]),
    });
    Papa.parse("/data/pipeline-by-country-stage.csv", {
      download: true, header: true,
      complete: (result) => setStageCountry(result.data as StageCountry[]),
    });
  }, []);

  const sortedStages = [...stages].sort((a, b) => {
    const ai = STAGE_ORDER.indexOf(a.status);
    const bi = STAGE_ORDER.indexOf(b.status);
    return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
  });

  const maxCount = Math.max(...stages.map((s) => parseInt(s.device_count) || 0));

  const topBacklog = [...backlog]
    .filter((b) => isInRegion(b.country, selectedRegion))
    .sort((a, b) => parseInt(b.devices_stuck) - parseInt(a.devices_stuck))
    .slice(0, 15);
  const maxStuck = parseInt(topBacklog[0]?.devices_stuck || "1");

  // per-stage breakdown filtered by both stage and region
  const stageCountryData = selectedStage
    ? [...stageCountry]
        .filter((r) => r.status === selectedStage.status)
        .filter((r) => isInRegion(r.country, selectedRegion))
        .sort((a, b) => parseInt(b.device_count) - parseInt(a.device_count))
        .slice(0, 10)
    : [];
  const maxStageCount = parseInt(stageCountryData[0]?.device_count || "1");

  const preDeliveryStatuses = ["S0", "S1", "S2", "S3", "T1"];
  const totalPreDelivery = stages
    .filter((s) => preDeliveryStatuses.includes(s.status))
    .reduce((sum, s) => sum + (parseInt(s.device_count) || 0), 0);

  const deliveredCount = parseInt(stages.find((s) => s.status === "S4")?.device_count || "0");
  const deliveryRate = deliveredCount
    ? Math.round((deliveredCount / (deliveredCount + totalPreDelivery)) * 100)
    : 0;
  const s2Count = parseInt(stages.find((s) => s.status === "S2")?.device_count || "0");

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%", overflow: "hidden" }}>

      {/* insight banner - explains the Switzerland/Germany paradox upfront */}
      <div style={{
        padding: "8px 16px", background: "#0f1117",
        borderBottom: "1px solid #2a2d3a", fontSize: "11px",
        color: "#64748b", flexShrink: 0,
      }}>
        💡 <span style={{ color: "#94a3b8" }}>
          Countries like Switzerland and Germany appear at the top of the backlog not because they need devices but
          they are major <strong style={{ color: "#0F6E56" }}>sender</strong> countries whose hubs collect laptops before shipping them abroad.
          The backlog represents devices queued up in European warehouses waiting to be assigned to schools in Africa and Asia.
        </span>
      </div>

      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>

        {/* left panel: pipeline funnel */}
        <div style={{
          flex: 1, padding: "14px 16px", overflowY: "auto",
          borderRight: "1px solid #2a2d3a", display: "flex", flexDirection: "column",
        }}>
          <div style={{ marginBottom: "10px" }}>
            <div style={{ fontSize: "10px", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "3px" }}>
              Device pipeline — all stages
            </div>
            <div style={{ fontSize: "11px", color: "#475569" }}>
              Each bar shows how many devices are currently at that stage. Click a stage to see the country breakdown on the right.
            </div>
          </div>

          <div style={{ flex: 1 }}>
            {sortedStages.map((stage) => {
              const count = parseInt(stage.device_count) || 0;
              const config = STAGE_CONFIG[stage.status] ?? { color: "#334155", shortLabel: stage.status, description: "" };
              const widthPct = maxCount > 0 ? (count / maxCount) * 100 : 0;
              const isSelected = selectedStage?.status === stage.status;
              const isBottleneck = stage.status === "S2";

              return (
                <div
                  key={stage.status}
                  style={{ marginBottom: "10px", cursor: "pointer" }}
                  onClick={() =>
                    setSelectedStage(isSelected ? null : {
                      status: stage.status,
                      label: config.shortLabel,
                      count,
                      color: config.color,
                    })
                  }
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "3px" }}>
                    <span style={{ fontSize: "10px", fontWeight: 700, color: config.color, fontFamily: "monospace", width: "32px", flexShrink: 0 }}>
                      {stage.status}
                    </span>
                    <span style={{ fontSize: "11px", color: isSelected ? "#e2e8f0" : "#94a3b8" }}>
                      {config.shortLabel}
                    </span>
                    {isBottleneck && (
                      <span style={{
                        fontSize: "9px", padding: "1px 6px", borderRadius: "10px",
                        background: "#BA751730", color: "#BA7517",
                        border: "1px solid #BA751760", flexShrink: 0,
                      }}>
                        ⚠ biggest backlog
                      </span>
                    )}
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{ width: "32px", flexShrink: 0 }} />
                    <div style={{
                      flex: 1, height: "18px", background: "#0f1117", borderRadius: "3px", overflow: "hidden",
                      outline: isSelected ? `1.5px solid ${config.color}` : "none",
                      boxShadow: isBottleneck && !isSelected ? `0 0 0 1px #BA751740` : "none",
                    }}>
                      <div style={{
                        height: "100%", width: `${widthPct}%`,
                        background: config.color, borderRadius: "3px",
                        boxShadow: isBottleneck ? `0 0 8px ${config.color}60` : "none",
                        transition: "width 0.3s ease",
                      }} />
                    </div>
                    <div style={{ width: "55px", flexShrink: 0, fontSize: "11px", fontWeight: 500, color: isSelected ? "#e2e8f0" : config.color, textAlign: "right" }}>
                      {count.toLocaleString()}
                    </div>
                  </div>

                  {/* stage description expands on click */}
                  {isSelected && (
                    <div style={{
                      marginTop: "5px", marginLeft: "40px", fontSize: "11px",
                      color: "#64748b", lineHeight: 1.6, padding: "6px 10px",
                      background: "#0f1117", borderRadius: "4px",
                      borderLeft: `2px solid ${config.color}`,
                    }}>
                      {config.description}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* summary stats strip */}
          <div style={{
            marginTop: "12px", padding: "12px 14px",
            background: "#0f1117", borderRadius: "6px", border: "1px solid #2a2d3a",
          }}>
            <div style={{ fontSize: "10px", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "10px" }}>
              Pipeline summary
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px" }}>
              {[
                {
                  label: "Delivery rate",
                  value: `${deliveryRate}%`,
                  color: "#0F6E56",
                  explanation: "of all devices ever processed have been successfully delivered to a school",
                },
                {
                  label: "Pre-delivery total",
                  value: totalPreDelivery.toLocaleString(),
                  color: "#BA7517",
                  explanation: "devices are currently somewhere in the pipeline — collected but not yet at a school",
                },
                {
                  label: "S2 bottleneck",
                  value: s2Count.toLocaleString(),
                  color: "#BA7517",
                  explanation: "devices passed quality checks and are ready to ship, but have not been matched with a school yet",
                },
              ].map((stat) => (
                <div key={stat.label}>
                  <div style={{ fontSize: "20px", fontWeight: 600, color: stat.color }}>{stat.value}</div>
                  <div style={{ fontSize: "10px", color: "#94a3b8", marginTop: "2px", marginBottom: "4px", fontWeight: 500 }}>{stat.label}</div>
                  <div style={{ fontSize: "10px", color: "#475569", lineHeight: 1.5 }}>{stat.explanation}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* right panel: backlog overview or per-stage country breakdown */}
        <div style={{ width: "320px", flexShrink: 0, padding: "14px 16px", overflowY: "auto", display: "flex", flexDirection: "column" }}>

          {selectedStage ? (
            <>
              <div style={{ marginBottom: "12px" }}>
                <div style={{ fontSize: "10px", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "6px" }}>
                  Stage detail
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                  <span style={{ fontSize: "13px", fontWeight: 700, color: selectedStage.color, fontFamily: "monospace" }}>
                    {selectedStage.status}
                  </span>
                  <span style={{ fontSize: "12px", color: "#94a3b8" }}>{selectedStage.label}</span>
                </div>
                <div style={{
                  fontSize: "11px", color: "#64748b", lineHeight: 1.6,
                  padding: "8px 10px", background: "#0f1117", borderRadius: "4px",
                  borderLeft: `2px solid ${selectedStage.color}`, marginBottom: "8px",
                }}>
                  {STAGE_CONFIG[selectedStage.status]?.description}
                </div>
                <div style={{ fontSize: "18px", fontWeight: 600, color: selectedStage.color }}>
                  {selectedStage.count.toLocaleString()} devices
                </div>
              </div>

              <div style={{ fontSize: "10px", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "8px" }}>
                Countries with most devices at {selectedStage.status}
              </div>

              <div style={{ flex: 1 }}>
                {stageCountryData.length > 0 ? (
                  stageCountryData.map((row, index) => {
                    const count = parseInt(row.device_count) || 0;
                    const pct = maxStageCount > 0 ? (count / maxStageCount) * 100 : 0;
                    return (
                      <div key={row.country} style={{
                        marginBottom: "6px",
                        background: index % 2 === 0 ? "transparent" : "rgba(255,255,255,0.02)",
                        borderRadius: "3px", padding: "2px 0",
                      }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                          <div style={{ width: "90px", fontSize: "10px", color: "#94a3b8", textAlign: "right", flexShrink: 0 }}>{row.country}</div>
                          <div style={{ flex: 1, height: "10px", background: "#0f1117", borderRadius: "2px", overflow: "hidden" }}>
                            <div style={{ height: "100%", width: `${pct}%`, background: selectedStage.color, borderRadius: "2px" }} />
                          </div>
                          <div style={{ fontSize: "10px", color: "#94a3b8", width: "40px", flexShrink: 0, textAlign: "right" }}>
                            {count.toLocaleString()}
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div style={{ fontSize: "11px", color: "#475569" }}>
                    {selectedRegion === "all"
                      ? "No country data available for this stage"
                      : "No countries in this region have devices at this stage. Try \u201cAll regions\u201d."}
                  </div>
                )}
              </div>

              <button
                onClick={() => setSelectedStage(null)}
                style={{
                  marginTop: "12px", width: "100%", fontSize: "11px", padding: "6px 0",
                  borderRadius: "5px", border: "1px solid #2a2d3a",
                  background: "transparent", color: "#64748b",
                  cursor: "pointer", fontFamily: "inherit",
                }}
              >
                ← back to backlog overview
              </button>
            </>
          ) : (
            <>
              <div style={{ marginBottom: "10px" }}>
                <div style={{ fontSize: "10px", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "3px" }}>
                  Pre-delivery backlog by country
                </div>
                <div style={{ fontSize: "11px", color: "#475569", lineHeight: 1.6 }}>
                  Total devices stuck in S0–S3 + T1 combined. These are devices that have been collected but not yet delivered to a school.
                  European countries dominate because that is where most Labdoo hubs are located.
                </div>
              </div>

              <div style={{ flex: 1 }}>
                {topBacklog.length === 0 ? (
                  <div style={{ fontSize: "11px", color: "#475569", lineHeight: 1.6, paddingTop: "10px" }}>
                    No countries in this region currently have devices stuck pre-delivery. Try &quot;All regions&quot;.
                  </div>
                ) : (
                  topBacklog.map((row, index) => {
                    const count = parseInt(row.devices_stuck) || 0;
                    const pct = maxStuck > 0 ? (count / maxStuck) * 100 : 0;
                    return (
                      <div key={row.country} style={{
                        marginBottom: "6px",
                        background: index % 2 === 0 ? "transparent" : "rgba(255,255,255,0.02)",
                        borderRadius: "3px", padding: "2px 0",
                      }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                          <div style={{ width: "90px", fontSize: "10px", color: "#94a3b8", textAlign: "right", flexShrink: 0 }}>{row.country}</div>
                          <div style={{ flex: 1, height: "10px", background: "#0f1117", borderRadius: "2px", overflow: "hidden" }}>
                            <div style={{ height: "100%", width: `${pct}%`, background: "#BA7517", borderRadius: "2px" }} />
                          </div>
                          <div style={{ fontSize: "10px", color: "#BA7517", width: "40px", flexShrink: 0, textAlign: "right" }}>
                            {count.toLocaleString()}
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}