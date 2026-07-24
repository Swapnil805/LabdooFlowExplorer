"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";
import * as topojson from "topojson-client";

type WorldData = {
  type: string;
  objects: { countries: object; land: object };
  arcs: unknown[];
};

type MapBaseProps = {
  width: number;
  height: number;
  onReady?: (
    svg: d3.Selection<SVGSVGElement, unknown, null, undefined>,
    projection: d3.GeoProjection
  ) => void;
  // fires on every zoom tick so parents can react (e.g. hub cluster vs individual dot switch)
  onZoom?: (scale: number) => void;
};

export default function MapBase({ width, height, onReady, onZoom }: MapBaseProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current || width === 0 || height === 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const projection = d3
      .geoNaturalEarth1()
      .scale((width / 630) * 115)
      .translate([width / 2, height / 2]);

    const pathGenerator = d3.geoPath().projection(projection);

    const mapGroup = svg.append("g").attr("class", "map-group");

    const zoom = d3
      .zoom<SVGSVGElement, unknown>()
      // 24x max - at 8x (the old limit) dense hub clusters in Switzerland/Germany
      // were still too packed to separate even at full zoom
      .scaleExtent([1, 24])
      // 0.4x padding - enough to pan to the edges at high zoom without
      // drifting off into empty space
      .translateExtent([
        [-width * 0.4, -height * 0.4],
        [width * 1.4, height * 1.4],
      ])
      .filter((event) => {
        if (event.type === "wheel") {
          event.preventDefault();
          return true;
        }
        return !event.ctrlKey && !event.button;
      })
      .on("zoom", (event) => {
        mapGroup.attr("transform", event.transform);
        if (onZoom) onZoom(event.transform.k);
      });

    svg.call(zoom);

    // double-click resets to default view with a smooth transition
    svg.on("dblclick.zoom", () => {
      svg.transition().duration(500).call(zoom.transform, d3.zoomIdentity);
    });

    svg.on("mousedown.cursor", () => { svgRef.current!.style.cursor = "grabbing"; });
    svg.on("mouseup.cursor", () => { svgRef.current!.style.cursor = "grab"; });

    d3.json<WorldData>("/data/world.geojson").then((worldData) => {
      if (!worldData) return;

      const countries = topojson.feature(
        worldData as never,
        (worldData as never as {
          objects: { countries: unknown };
        }).objects.countries as never
      );

      // ocean rect is oversized relative to the viewport so panning never
      // exposes the raw black svg canvas at the edges
      mapGroup
        .append("rect")
        .attr("x", -width * 0.5)
        .attr("y", -height * 0.5)
        .attr("width", width * 2)
        .attr("height", height * 2)
        .attr("fill", "#0d1421");

      mapGroup
        .append("g")
        .attr("class", "countries")
        .selectAll("path")
        .data((countries as d3.ExtendedFeatureCollection).features)
        .join("path")
        .attr("d", pathGenerator)
        .attr("fill", "#1e293b")
        .attr("stroke", "#334155")
        .attr("stroke-width", 0.4);

      mapGroup
        .append("path")
        .datum(
          topojson.mesh(
            worldData as never,
            (worldData as never as {
              objects: { countries: unknown };
            }).objects.countries as never,
            (a, b) => a !== b
          )
        )
        .attr("d", pathGenerator)
        .attr("fill", "none")
        .attr("stroke", "#475569")
        .attr("stroke-width", 0.3);

      // drawn on the outer svg (not mapGroup) so it stays fixed in the corner
      // and doesn't move or scale when the user zooms/pans
      svg
        .append("text")
        .attr("x", width - 8)
        .attr("y", height - 8)
        .attr("text-anchor", "end")
        .attr("fill", "#334155")
        .attr("font-size", "10px")
        .attr("font-family", "Inter, system-ui, sans-serif")
        .attr("pointer-events", "none")
        .text("scroll to zoom · drag to pan · double-click to reset");

      // passes mapGroup (not svg) so overlays drawn by the parent are inside
      // the zoom transform and move/scale with the map correctly
      if (onReady) {
        onReady(
          mapGroup as unknown as d3.Selection<SVGSVGElement, unknown, null, undefined>,
          projection
        );
      }
    });
  }, [width, height, onReady, onZoom]);

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      style={{ display: "block", cursor: "grab" }}
    />
  );
}