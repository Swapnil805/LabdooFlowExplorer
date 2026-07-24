(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/project/components/MapBase.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MapBase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/src/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-selection/src/select.js [app-client] (ecmascript) <export default as select>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$geo$2f$src$2f$projection$2f$naturalEarth1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__geoNaturalEarth1$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-geo/src/projection/naturalEarth1.js [app-client] (ecmascript) <export default as geoNaturalEarth1>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$geo$2f$src$2f$path$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__geoPath$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-geo/src/path/index.js [app-client] (ecmascript) <export default as geoPath>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$zoom$2f$src$2f$zoom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__zoom$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-zoom/src/zoom.js [app-client] (ecmascript) <export default as zoom>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$zoom$2f$src$2f$transform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__identity__as__zoomIdentity$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-zoom/src/transform.js [app-client] (ecmascript) <export identity as zoomIdentity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$fetch$2f$src$2f$json$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__json$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-fetch/src/json.js [app-client] (ecmascript) <export default as json>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$topojson$2d$client$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/topojson-client/src/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$topojson$2d$client$2f$src$2f$feature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__feature$3e$__ = __turbopack_context__.i("[project]/node_modules/topojson-client/src/feature.js [app-client] (ecmascript) <export default as feature>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$topojson$2d$client$2f$src$2f$mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__mesh$3e$__ = __turbopack_context__.i("[project]/node_modules/topojson-client/src/mesh.js [app-client] (ecmascript) <export default as mesh>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function MapBase({ width, height, onReady, onZoom }) {
    _s();
    const svgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapBase.useEffect": ()=>{
            if (!svgRef.current || width === 0 || height === 0) return;
            const svg = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"](svgRef.current);
            svg.selectAll("*").remove();
            const projection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$geo$2f$src$2f$projection$2f$naturalEarth1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__geoNaturalEarth1$3e$__["geoNaturalEarth1"]().scale(width / 630 * 115).translate([
                width / 2,
                height / 2
            ]);
            const pathGenerator = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$geo$2f$src$2f$path$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__geoPath$3e$__["geoPath"]().projection(projection);
            const mapGroup = svg.append("g").attr("class", "map-group");
            const zoom = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$zoom$2f$src$2f$zoom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__zoom$3e$__["zoom"]()// 24x max - at 8x (the old limit) dense hub clusters in Switzerland/Germany
            // were still too packed to separate even at full zoom
            .scaleExtent([
                1,
                24
            ])// 0.4x padding - enough to pan to the edges at high zoom without
            // drifting off into empty space
            .translateExtent([
                [
                    -width * 0.4,
                    -height * 0.4
                ],
                [
                    width * 1.4,
                    height * 1.4
                ]
            ]).filter({
                "MapBase.useEffect.zoom": (event)=>{
                    if (event.type === "wheel") {
                        event.preventDefault();
                        return true;
                    }
                    return !event.ctrlKey && !event.button;
                }
            }["MapBase.useEffect.zoom"]).on("zoom", {
                "MapBase.useEffect.zoom": (event)=>{
                    mapGroup.attr("transform", event.transform);
                    if (onZoom) onZoom(event.transform.k);
                }
            }["MapBase.useEffect.zoom"]);
            svg.call(zoom);
            // double-click resets to default view with a smooth transition
            svg.on("dblclick.zoom", {
                "MapBase.useEffect": ()=>{
                    svg.transition().duration(500).call(zoom.transform, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$zoom$2f$src$2f$transform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__identity__as__zoomIdentity$3e$__["zoomIdentity"]);
                }
            }["MapBase.useEffect"]);
            svg.on("mousedown.cursor", {
                "MapBase.useEffect": ()=>{
                    svgRef.current.style.cursor = "grabbing";
                }
            }["MapBase.useEffect"]);
            svg.on("mouseup.cursor", {
                "MapBase.useEffect": ()=>{
                    svgRef.current.style.cursor = "grab";
                }
            }["MapBase.useEffect"]);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$fetch$2f$src$2f$json$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__json$3e$__["json"]("/data/world.geojson").then({
                "MapBase.useEffect": (worldData)=>{
                    if (!worldData) return;
                    const countries = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$topojson$2d$client$2f$src$2f$feature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__feature$3e$__["feature"](worldData, worldData.objects.countries);
                    // ocean rect is oversized relative to the viewport so panning never
                    // exposes the raw black svg canvas at the edges
                    mapGroup.append("rect").attr("x", -width * 0.5).attr("y", -height * 0.5).attr("width", width * 2).attr("height", height * 2).attr("fill", "#0d1421");
                    mapGroup.append("g").attr("class", "countries").selectAll("path").data(countries.features).join("path").attr("d", pathGenerator).attr("fill", "#1e293b").attr("stroke", "#334155").attr("stroke-width", 0.4);
                    mapGroup.append("path").datum(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$topojson$2d$client$2f$src$2f$mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__mesh$3e$__["mesh"](worldData, worldData.objects.countries, {
                        "MapBase.useEffect": (a, b)=>a !== b
                    }["MapBase.useEffect"])).attr("d", pathGenerator).attr("fill", "none").attr("stroke", "#475569").attr("stroke-width", 0.3);
                    // drawn on the outer svg (not mapGroup) so it stays fixed in the corner
                    // and doesn't move or scale when the user zooms/pans
                    svg.append("text").attr("x", width - 8).attr("y", height - 8).attr("text-anchor", "end").attr("fill", "#334155").attr("font-size", "10px").attr("font-family", "Inter, system-ui, sans-serif").attr("pointer-events", "none").text("scroll to zoom · drag to pan · double-click to reset");
                    // passes mapGroup (not svg) so overlays drawn by the parent are inside
                    // the zoom transform and move/scale with the map correctly
                    if (onReady) {
                        onReady(mapGroup, projection);
                    }
                }
            }["MapBase.useEffect"]);
        }
    }["MapBase.useEffect"], [
        width,
        height,
        onReady,
        onZoom
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ref: svgRef,
        width: width,
        height: height,
        style: {
            display: "block",
            cursor: "grab"
        }
    }, void 0, false, {
        fileName: "[project]/src/app/project/components/MapBase.tsx",
        lineNumber: 147,
        columnNumber: 5
    }, this);
}
_s(MapBase, "89Ty783ABEwsfMbSOeu9vscWF34=");
_c = MapBase;
var _c;
__turbopack_context__.k.register(_c, "MapBase");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/project/components/Regions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "REGION_LABELS",
    ()=>REGION_LABELS,
    "isInRegion",
    ()=>isInRegion
]);
/*
 * Countries not listed here (US, Australia, Aland Islands, etc.) don't belong
 * to any of the four filter chips, so they stay visible under "All regions"
 * and get hidden under any specific region - there's simply no chip for them.
 */ const REGION_COUNTRIES = {
    europe: [
        "Germany",
        "Spain",
        "France",
        "United Kingdom",
        "Netherlands",
        "Belgium",
        "Austria",
        "Italy",
        "Switzerland",
        "Sweden",
        "Ireland",
        "Luxembourg",
        "Czech Republic",
        "Poland",
        "Ukraine",
        "Romania",
        "Bulgaria",
        "Albania",
        "Bosnia and Herzegovina",
        "Croatia",
        "Greece",
        "Hungary",
        "Belarus",
        "Georgia",
        "Armenia",
        "Russia",
        "Denmark",
        "Norway",
        "Finland",
        "Portugal",
        "Macedonia"
    ],
    africa: [
        "Uganda",
        "Ghana",
        "Tanzania",
        "Kenya",
        "Cameroon",
        "Nigeria",
        "Congo (Kinshasa)",
        "Congo (Brazzaville)",
        "South Africa",
        "Togo",
        "Namibia",
        "Senegal",
        "Zambia",
        "Zimbabwe",
        "Malawi",
        "Rwanda",
        "Ethiopia",
        "Mozambique",
        "Madagascar",
        "Sudan",
        "Swaziland",
        "Ivory Coast",
        "Benin",
        "Egypt",
        "Morocco",
        "Tunisia",
        "Algeria",
        "Libya",
        "Somalia",
        "Burundi",
        "Cape Verde",
        "Gabon",
        "Gambia",
        "Liberia",
        "Mauritania",
        "Sierra Leone",
        "Burkina Faso",
        "Mali",
        "Guinea",
        "Niger",
        "Chad",
        "Angola",
        "Western Sahara"
    ],
    asia: [
        "India",
        "Nepal",
        "Bangladesh",
        "Philippines",
        "Pakistan",
        "Myanmar",
        "Cambodia",
        "Laos",
        "Vietnam",
        "Indonesia",
        "Thailand",
        "Sri Lanka",
        "Afghanistan",
        "Syria",
        "Iraq",
        "Iran",
        "Jordan",
        "Palestine",
        "Lebanon",
        "Yemen",
        "China",
        "Mongolia",
        "Kazakhstan",
        "Israel",
        "Hong Kong S.A.R., China",
        "Turkey"
    ],
    latam: [
        "Colombia",
        "Bolivia",
        "Peru",
        "Ecuador",
        "Guatemala",
        "Honduras",
        "Nicaragua",
        "El Salvador",
        "Haiti",
        "Cuba",
        "Venezuela",
        "Paraguay",
        "Brazil",
        "Argentina",
        "Chile",
        "Dominican Republic",
        "Costa Rica",
        "Panama",
        "Mexico"
    ]
};
function isInRegion(country, region) {
    if (region === "all") return true;
    return REGION_COUNTRIES[region].includes(country);
}
const REGION_LABELS = {
    all: "All regions",
    europe: "Europe",
    africa: "Sub-Saharan Africa",
    asia: "Asia Pacific",
    latam: "Latin America"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/project/components/Q1Origins.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Q1Origins
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/src/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$array$2f$src$2f$max$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__max$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-array/src/max.js [app-client] (ecmascript) <export default as max>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2f$src$2f$pow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__sqrt__as__scaleSqrt$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-scale/src/pow.js [app-client] (ecmascript) <export sqrt as scaleSqrt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$selection$2f$src$2f$pointer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__pointer$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-selection/src/pointer.js [app-client] (ecmascript) <export default as pointer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-selection/src/select.js [app-client] (ecmascript) <export default as select>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$zoom$2f$src$2f$transform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__zoomTransform$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-zoom/src/transform.js [app-client] (ecmascript) <export default as zoomTransform>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$papaparse$2f$papaparse$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/papaparse/papaparse.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$project$2f$components$2f$MapBase$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/project/components/MapBase.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$project$2f$components$2f$Regions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/project/components/Regions.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
// centroids for all 26 origin countries + every real destination country in the dataset.
// missing entries here cause arcs to be silently dropped - found this when Germany->Paraguay
// wasn't showing up after clicking Germany, turned out ~half of all destinations had no entry.
const CENTROIDS = {
    // origin countries
    Germany: [
        10.45,
        51.17
    ],
    Spain: [
        -3.75,
        40.46
    ],
    "United States": [
        -95.71,
        37.09
    ],
    Austria: [
        14.55,
        47.52
    ],
    "Hong Kong S.A.R., China": [
        114.17,
        22.32
    ],
    Switzerland: [
        8.23,
        46.82
    ],
    Italy: [
        12.57,
        41.87
    ],
    France: [
        2.35,
        46.23
    ],
    "United Kingdom": [
        -3.44,
        55.38
    ],
    Netherlands: [
        5.29,
        52.13
    ],
    Belgium: [
        4.47,
        50.5
    ],
    "New Zealand": [
        174.88,
        -40.9
    ],
    Thailand: [
        100.99,
        15.87
    ],
    Sweden: [
        18.64,
        60.13
    ],
    Uganda: [
        32.29,
        1.37
    ],
    Ireland: [
        -8.24,
        53.41
    ],
    Luxembourg: [
        6.13,
        49.82
    ],
    "Czech Republic": [
        15.47,
        49.82
    ],
    India: [
        78.96,
        20.59
    ],
    Tanzania: [
        34.89,
        -6.37
    ],
    Colombia: [
        -74.3,
        4.57
    ],
    Madagascar: [
        46.87,
        -18.77
    ],
    Indonesia: [
        113.92,
        -0.79
    ],
    Poland: [
        19.15,
        51.92
    ],
    Afghanistan: [
        67.71,
        33.94
    ],
    Swaziland: [
        31.47,
        -26.52
    ],
    // destination countries
    Ghana: [
        -1.02,
        7.95
    ],
    Kenya: [
        37.91,
        -0.02
    ],
    "Congo (Kinshasa)": [
        23.65,
        -2.88
    ],
    "South Africa": [
        25.08,
        -29.0
    ],
    Cameroon: [
        12.35,
        3.85
    ],
    Nigeria: [
        8.68,
        9.08
    ],
    Togo: [
        0.82,
        8.62
    ],
    Namibia: [
        18.49,
        -22.96
    ],
    Senegal: [
        -14.45,
        14.5
    ],
    Zambia: [
        27.85,
        -13.13
    ],
    Nepal: [
        84.12,
        28.39
    ],
    Morocco: [
        -7.09,
        31.79
    ],
    Brazil: [
        -51.93,
        -14.24
    ],
    Ukraine: [
        31.17,
        48.38
    ],
    "Bosnia and Herzegovina": [
        17.68,
        44.17
    ],
    Rwanda: [
        29.87,
        -1.94
    ],
    Ethiopia: [
        40.49,
        9.15
    ],
    Mozambique: [
        35.53,
        -18.67
    ],
    Malawi: [
        34.3,
        -13.25
    ],
    Bangladesh: [
        90.36,
        23.68
    ],
    Philippines: [
        121.77,
        12.88
    ],
    Pakistan: [
        69.35,
        30.38
    ],
    Zimbabwe: [
        29.15,
        -20.0
    ],
    "Ivory Coast": [
        -5.55,
        7.54
    ],
    Benin: [
        2.32,
        9.31
    ],
    Egypt: [
        30.8,
        26.82
    ],
    Bolivia: [
        -64.67,
        -16.29
    ],
    Peru: [
        -75.02,
        -9.19
    ],
    Ecuador: [
        -78.18,
        -1.83
    ],
    Guatemala: [
        -90.23,
        15.78
    ],
    Haiti: [
        -72.29,
        18.97
    ],
    Romania: [
        24.97,
        45.94
    ],
    Bulgaria: [
        25.49,
        42.73
    ],
    Albania: [
        20.17,
        41.15
    ],
    Algeria: [
        1.66,
        28.03
    ],
    Angola: [
        17.87,
        -11.2
    ],
    Armenia: [
        45.04,
        40.07
    ],
    Australia: [
        133.78,
        -25.27
    ],
    Belarus: [
        27.95,
        53.71
    ],
    "Burkina Faso": [
        -1.56,
        12.24
    ],
    Burundi: [
        29.92,
        -3.37
    ],
    Cambodia: [
        104.99,
        12.57
    ],
    "Cape Verde": [
        -23.61,
        16.0
    ],
    Chile: [
        -71.54,
        -35.68
    ],
    China: [
        104.2,
        35.86
    ],
    "Congo (Brazzaville)": [
        15.83,
        -0.23
    ],
    "Costa Rica": [
        -83.75,
        9.75
    ],
    Croatia: [
        15.2,
        45.1
    ],
    Cuba: [
        -77.78,
        21.52
    ],
    "Dominican Republic": [
        -70.16,
        18.74
    ],
    Gabon: [
        11.61,
        -0.8
    ],
    Gambia: [
        -15.31,
        13.44
    ],
    Georgia: [
        43.36,
        42.32
    ],
    Greece: [
        21.82,
        39.07
    ],
    Guinea: [
        -9.7,
        9.95
    ],
    Honduras: [
        -86.24,
        15.2
    ],
    Hungary: [
        19.5,
        47.16
    ],
    Iran: [
        53.69,
        32.43
    ],
    Iraq: [
        43.68,
        33.22
    ],
    Israel: [
        34.85,
        31.05
    ],
    Jordan: [
        36.24,
        31.96
    ],
    Kazakhstan: [
        66.92,
        48.02
    ],
    Laos: [
        102.5,
        19.86
    ],
    Lebanon: [
        35.86,
        33.85
    ],
    Liberia: [
        -9.43,
        6.43
    ],
    Macedonia: [
        21.75,
        41.61
    ],
    Mali: [
        -3.99,
        17.57
    ],
    Mauritania: [
        -10.94,
        21.01
    ],
    Mexico: [
        -102.55,
        23.63
    ],
    Mongolia: [
        103.85,
        46.86
    ],
    Myanmar: [
        95.96,
        21.91
    ],
    Nicaragua: [
        -85.21,
        12.87
    ],
    Panama: [
        -80.78,
        8.54
    ],
    Paraguay: [
        -58.44,
        -23.44
    ],
    Russia: [
        105.32,
        61.52
    ],
    "Sierra Leone": [
        -11.78,
        8.46
    ],
    Somalia: [
        46.2,
        5.15
    ],
    "Sri Lanka": [
        80.77,
        7.87
    ],
    Sudan: [
        30.22,
        12.86
    ],
    Syria: [
        38.3,
        34.8
    ],
    Turkey: [
        35.24,
        38.96
    ],
    Vanuatu: [
        166.96,
        -15.38
    ],
    Vietnam: [
        108.28,
        14.06
    ],
    "Western Sahara": [
        -12.89,
        24.21
    ]
};
function Q1Origins({ width, height, selectedRegion, arcLayer }) {
    _s();
    const [flows, setFlows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [arcPairs, setArcPairs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [hubs, setHubs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [hubDetail, setHubDetail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedYearBar, setSelectedYearBar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedOrigin, setSelectedOrigin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [zoomLevel, setZoomLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const svgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const projectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const drawOverlayRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        "Q1Origins.useRef[drawOverlayRef]": ()=>{}
    }["Q1Origins.useRef[drawOverlayRef]"]);
    const mapHeight = Math.floor(height * 0.70);
    const timelineHeight = height - mapHeight;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Q1Origins.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$papaparse$2f$papaparse$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].parse("/data/origin-flows.csv", {
                download: true,
                header: true,
                complete: {
                    "Q1Origins.useEffect": (result)=>setFlows(result.data)
                }["Q1Origins.useEffect"]
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$papaparse$2f$papaparse$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].parse("/data/arc-pairs.csv", {
                download: true,
                header: true,
                complete: {
                    "Q1Origins.useEffect": (result)=>setArcPairs(result.data)
                }["Q1Origins.useEffect"]
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$papaparse$2f$papaparse$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].parse("/data/hubs.csv", {
                download: true,
                header: true,
                complete: {
                    "Q1Origins.useEffect": (result)=>setHubs(result.data)
                }["Q1Origins.useEffect"]
            });
        }
    }["Q1Origins.useEffect"], []);
    const drawOverlay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Q1Origins.useCallback[drawOverlay]": ()=>{
            const svg = svgRef.current;
            const projection = projectionRef.current;
            if (!svg || !projection) return;
            if (arcPairs.length === 0 && hubs.length === 0) return;
            svg.select(".overlay-layer").remove();
            const overlay = svg.append("g").attr("class", "overlay-layer");
            const outerSvg = svg.node().closest("svg");
            function showTooltip(mapX, mapY, text) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"](outerSvg).select(".hub-tooltip").remove();
                const t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$zoom$2f$src$2f$transform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__zoomTransform$3e$__["zoomTransform"](outerSvg);
                const screenX = t.applyX(mapX);
                const screenY = t.applyY(mapY);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"](outerSvg).append("text").attr("class", "hub-tooltip").attr("x", screenX).attr("y", screenY - 12).attr("text-anchor", "middle").attr("fill", "#e2e8f0").attr("font-size", "11px").attr("font-family", "Inter, system-ui, sans-serif").attr("pointer-events", "none").attr("paint-order", "stroke").attr("stroke", "#0d1421").attr("stroke-width", "3px").text(text);
            }
            function hideTooltip() {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"](outerSvg).select(".hub-tooltip").remove();
            }
            const activeYear = selectedYearBar;
            if (arcLayer === "country" && arcPairs.length > 0) {
                // filter by year and region (region checks origin side - Q1 is about where donations come from)
                const filteredPairs = arcPairs.filter({
                    "Q1Origins.useCallback[drawOverlay].filteredPairs": (p)=>{
                        if (p.origin === p.destination) return false;
                        if (activeYear && p.year !== activeYear) return false;
                        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$project$2f$components$2f$Regions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInRegion"])(p.origin, selectedRegion)) return false;
                        return true;
                    }
                }["Q1Origins.useCallback[drawOverlay].filteredPairs"]);
                const pairMap = new Map();
                filteredPairs.forEach({
                    "Q1Origins.useCallback[drawOverlay]": (p)=>{
                        const key = `${p.origin}||${p.destination}`;
                        pairMap.set(key, (pairMap.get(key) || 0) + parseInt(p.trip_count));
                    }
                }["Q1Origins.useCallback[drawOverlay]"]);
                let aggregatedPairs = [
                    ...pairMap.entries()
                ].map({
                    "Q1Origins.useCallback[drawOverlay].aggregatedPairs": ([key, count])=>{
                        const [origin, destination] = key.split("||");
                        return {
                            origin,
                            destination,
                            count
                        };
                    }
                }["Q1Origins.useCallback[drawOverlay].aggregatedPairs"]);
                // full unfiltered list used for dots so every origin country gets a dot
                // even if its arc didn't make the top-25 cut
                const allPairsForDots = aggregatedPairs;
                if (selectedOrigin) {
                    aggregatedPairs = aggregatedPairs.filter({
                        "Q1Origins.useCallback[drawOverlay]": (p)=>p.origin === selectedOrigin
                    }["Q1Origins.useCallback[drawOverlay]"]);
                } else {
                    aggregatedPairs = aggregatedPairs.sort({
                        "Q1Origins.useCallback[drawOverlay]": (a, b)=>b.count - a.count
                    }["Q1Origins.useCallback[drawOverlay]"]).slice(0, 25);
                }
                const maxCount = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$array$2f$src$2f$max$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__max$3e$__["max"](allPairsForDots, {
                    "Q1Origins.useCallback[drawOverlay]": (p)=>p.count
                }["Q1Origins.useCallback[drawOverlay]"]) ?? 1;
                const arcWidth = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2f$src$2f$pow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__sqrt__as__scaleSqrt$3e$__["scaleSqrt"]().domain([
                    1,
                    maxCount
                ]).range([
                    0.6,
                    7
                ]);
                const arcOpacity2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2f$src$2f$pow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__sqrt__as__scaleSqrt$3e$__["scaleSqrt"]().domain([
                    1,
                    maxCount
                ]).range([
                    0.3,
                    0.9
                ]);
                const arcGeometry = [];
                aggregatedPairs.forEach({
                    "Q1Origins.useCallback[drawOverlay]": (pair)=>{
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
                        overlay.append("path").attr("d", d).attr("fill", "none").attr("stroke", "#0F6E56").attr("stroke-width", arcWidth(count)).attr("opacity", arcOpacity2(count)).attr("stroke-linecap", "round").attr("pointer-events", "none");
                        arcGeometry.push({
                            pair,
                            d,
                            midX,
                            midY
                        });
                    }
                }["Q1Origins.useCallback[drawOverlay]"]);
                arcGeometry.forEach({
                    "Q1Origins.useCallback[drawOverlay]": ({ pair, d })=>{
                        overlay.append("path").attr("d", d).attr("fill", "none").attr("stroke", "transparent").attr("stroke-width", 18).style("cursor", "pointer").on("mousemove", {
                            "Q1Origins.useCallback[drawOverlay]": function(event) {
                                const [mx, my] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$selection$2f$src$2f$pointer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__pointer$3e$__["pointer"](event, overlay.node());
                                showTooltip(mx, my, `${pair.origin} → ${pair.destination}: ${pair.count.toLocaleString()} trips`);
                            }
                        }["Q1Origins.useCallback[drawOverlay]"]).on("mouseout", hideTooltip);
                    }
                }["Q1Origins.useCallback[drawOverlay]"]);
                // a country stays green if it appears as an origin anywhere in the data,
                // even if it also appears as a destination ; prevents the dot colour
                // flip-flopping based on whichever pair happened to be processed last
                const allOriginCountries = new Set(allPairsForDots.map({
                    "Q1Origins.useCallback[drawOverlay]": (p)=>p.origin
                }["Q1Origins.useCallback[drawOverlay]"]));
                const drawnOrigins = new Set();
                const drawnDests = new Set();
                allPairsForDots.forEach({
                    "Q1Origins.useCallback[drawOverlay]": (pair)=>{
                        const originCoords = CENTROIDS[pair.origin];
                        const destCoords = CENTROIDS[pair.destination];
                        if (originCoords && !drawnOrigins.has(pair.origin)) {
                            const px = projection(originCoords);
                            if (px) {
                                const isSelected = selectedOrigin === pair.origin;
                                overlay.append("circle").attr("cx", px[0]).attr("cy", px[1]).attr("r", isSelected ? 7 : 5).attr("fill", "#0F6E56").attr("opacity", isSelected ? 1 : 0.85).attr("stroke", isSelected ? "#7FE8C0" : "white").attr("stroke-width", isSelected ? 2 : 0.8).style("cursor", "pointer").on("click", {
                                    "Q1Origins.useCallback[drawOverlay]": function() {
                                        setSelectedOrigin(selectedOrigin === pair.origin ? null : pair.origin);
                                    }
                                }["Q1Origins.useCallback[drawOverlay]"]).on("mouseover", {
                                    "Q1Origins.useCallback[drawOverlay]": function() {
                                        showTooltip(px[0], px[1] - 10, selectedOrigin === pair.origin ? `${pair.origin} — click to reset` : `${pair.origin} — click to filter`);
                                    }
                                }["Q1Origins.useCallback[drawOverlay]"]).on("mouseout", hideTooltip);
                                drawnOrigins.add(pair.origin);
                            }
                        }
                        // orange dot only if this country never appears as an origin
                        if (destCoords && !drawnDests.has(pair.destination) && !allOriginCountries.has(pair.destination)) {
                            const px = projection(destCoords);
                            if (px) {
                                overlay.append("circle").attr("cx", px[0]).attr("cy", px[1]).attr("r", 3.5).attr("fill", "#BA7517").attr("opacity", 0.85).attr("stroke", "white").attr("stroke-width", 0.6);
                                drawnDests.add(pair.destination);
                            }
                        }
                    }
                }["Q1Origins.useCallback[drawOverlay]"]);
            }
            if (arcLayer === "hub" && hubs.length > 0) {
                if (zoomLevel < 1.8) {
                    // world view: one dot per country, sized by hub count
                    const hubsByCountry = new Map();
                    hubs.forEach({
                        "Q1Origins.useCallback[drawOverlay]": (hub)=>{
                            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$project$2f$components$2f$Regions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInRegion"])(hub.country, selectedRegion)) return;
                            const lat = parseFloat(hub.lat);
                            const lon = parseFloat(hub.lon);
                            if (isNaN(lat) || isNaN(lon)) return;
                            const existing = hubsByCountry.get(hub.country);
                            if (existing) {
                                existing.count++;
                                existing.delivered += parseInt(hub.delivered) || 0;
                            } else {
                                hubsByCountry.set(hub.country, {
                                    count: 1,
                                    delivered: parseInt(hub.delivered) || 0,
                                    lat,
                                    lon
                                });
                            }
                        }
                    }["Q1Origins.useCallback[drawOverlay]"]);
                    const maxHubs = Math.max(...[
                        ...hubsByCountry.values()
                    ].map({
                        "Q1Origins.useCallback[drawOverlay].maxHubs": (v)=>v.count
                    }["Q1Origins.useCallback[drawOverlay].maxHubs"]));
                    hubsByCountry.forEach({
                        "Q1Origins.useCallback[drawOverlay]": (data, country)=>{
                            const coords = CENTROIDS[country] ?? [
                                data.lon,
                                data.lat
                            ];
                            const px = projection(coords);
                            if (!px) return;
                            // counter-scale by zoom so dots don't balloon as the user zooms toward the switch threshold
                            const baseDotSize = Math.max(3, Math.min(13, data.count / maxHubs * 13));
                            const dotSize = baseDotSize / Math.max(zoomLevel, 1);
                            overlay.append("circle").attr("cx", px[0]).attr("cy", px[1]).attr("r", dotSize).attr("fill", "#0F6E56").attr("opacity", 0.7).attr("stroke", "white").attr("stroke-width", 0.8 / Math.max(zoomLevel, 1)).style("cursor", "pointer").on("mouseover", {
                                "Q1Origins.useCallback[drawOverlay]": function() {
                                    showTooltip(px[0], px[1] - dotSize - 5, `${country}: ${data.count} hubs · ${data.delivered.toLocaleString()} delivered`);
                                }
                            }["Q1Origins.useCallback[drawOverlay]"]).on("mouseout", hideTooltip);
                        }
                    }["Q1Origins.useCallback[drawOverlay]"]);
                } else {
                    // zoomed in: individual hub dots
                    hubs.forEach({
                        "Q1Origins.useCallback[drawOverlay]": (hub)=>{
                            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$project$2f$components$2f$Regions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInRegion"])(hub.country, selectedRegion)) return;
                            const lat = parseFloat(hub.lat);
                            const lon = parseFloat(hub.lon);
                            if (isNaN(lat) || isNaN(lon)) return;
                            const px = projection([
                                lon,
                                lat
                            ]);
                            if (!px) return;
                            const delivered = parseInt(hub.delivered) || 0;
                            // dots are counter-scaled by zoom level so they stay a fixed visual size
                            // rather than ballooning as the map scales up
                            const baseDotSize = Math.max(1, Math.min(3.5, delivered / 600));
                            const dotSize = baseDotSize / Math.max(zoomLevel, 1);
                            const strokeW = 0.4 / Math.max(zoomLevel, 1);
                            overlay.append("circle").attr("cx", px[0]).attr("cy", px[1]).attr("r", dotSize).attr("fill", "#0F6E56").attr("opacity", 0.85).attr("stroke", "white").attr("stroke-width", strokeW).style("cursor", "pointer").on("mouseover", {
                                "Q1Origins.useCallback[drawOverlay]": function() {
                                    showTooltip(px[0], px[1] - dotSize - 4, hub.hub_name);
                                }
                            }["Q1Origins.useCallback[drawOverlay]"]).on("mouseout", hideTooltip).on("click", {
                                "Q1Origins.useCallback[drawOverlay]": function(event) {
                                    setHubDetail({
                                        name: hub.hub_name,
                                        country: hub.country,
                                        delivered: parseInt(hub.delivered) || 0,
                                        remaining: parseInt(hub.remaining_active) || 0,
                                        x: event.offsetX,
                                        y: event.offsetY
                                    });
                                }
                            }["Q1Origins.useCallback[drawOverlay]"]);
                        }
                    }["Q1Origins.useCallback[drawOverlay]"]);
                }
            }
        }
    }["Q1Origins.useCallback[drawOverlay]"], [
        flows,
        arcPairs,
        hubs,
        selectedYearBar,
        selectedRegion,
        arcLayer,
        selectedOrigin,
        zoomLevel
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Q1Origins.useEffect": ()=>{
            drawOverlayRef.current = drawOverlay;
        }
    }["Q1Origins.useEffect"], [
        drawOverlay
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Q1Origins.useEffect": ()=>{
            drawOverlay();
        }
    }["Q1Origins.useEffect"], [
        drawOverlay
    ]);
    // stable identity across renders so MapBase doesn't tear down and rebuild d3.zoom() on every re-render
    const handleMapReady = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Q1Origins.useCallback[handleMapReady]": (svg, projection)=>{
            svgRef.current = svg;
            projectionRef.current = projection;
            setTimeout({
                "Q1Origins.useCallback[handleMapReady]": ()=>drawOverlayRef.current()
            }["Q1Origins.useCallback[handleMapReady]"], 0);
        }
    }["Q1Origins.useCallback[handleMapReady]"], []);
    const handleZoom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Q1Origins.useCallback[handleZoom]": (scale)=>{
            setZoomLevel({
                "Q1Origins.useCallback[handleZoom]": (prev)=>{
                    const wasZoomedIn = prev >= 1.8;
                    const isZoomedIn = wasZoomedIn ? scale >= 1.7 : scale >= 1.9;
                    if (isZoomedIn !== wasZoomedIn) return scale;
                    return prev;
                }
            }["Q1Origins.useCallback[handleZoom]"]);
        }
    }["Q1Origins.useCallback[handleZoom]"], []);
    const yearTotals = flows.reduce((acc, f)=>{
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
    const noArcsForRegion = arcLayer === "country" && selectedRegion !== "all" && arcPairs.length > 0 && arcPairs.every((p)=>!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$project$2f$components$2f$Regions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInRegion"])(p.origin, selectedRegion));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "relative",
                    width: "100%",
                    height: mapHeight,
                    flexShrink: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$project$2f$components$2f$MapBase$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        width: width,
                        height: mapHeight,
                        onReady: handleMapReady,
                        onZoom: handleZoom
                    }, void 0, false, {
                        fileName: "[project]/src/app/project/components/Q1Origins.tsx",
                        lineNumber: 504,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            top: "10px",
                            left: "10px",
                            background: "rgba(15,17,23,0.55)",
                            borderRadius: "8px",
                            padding: "8px 12px",
                            backdropFilter: "blur(4px)",
                            pointerEvents: "none",
                            fontSize: "10px",
                            color: "#94a3b8",
                            lineHeight: 1.8
                        },
                        children: arcLayer === "country" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "6px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                width: 8,
                                                height: 8,
                                                borderRadius: "50%",
                                                background: "#0F6E56",
                                                display: "inline-block"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/project/components/Q1Origins.tsx",
                                            lineNumber: 517,
                                            columnNumber: 17
                                        }, this),
                                        "origin country"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/project/components/Q1Origins.tsx",
                                    lineNumber: 516,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "6px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                width: 7,
                                                height: 7,
                                                borderRadius: "50%",
                                                background: "#BA7517",
                                                display: "inline-block"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/project/components/Q1Origins.tsx",
                                            lineNumber: 521,
                                            columnNumber: 17
                                        }, this),
                                        "destination country"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/project/components/Q1Origins.tsx",
                                    lineNumber: 520,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "6px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                width: 12,
                                                height: 2,
                                                background: "#0F6E56",
                                                display: "inline-block"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/project/components/Q1Origins.tsx",
                                            lineNumber: 525,
                                            columnNumber: 17
                                        }, this),
                                        "thickness = trip count"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/project/components/Q1Origins.tsx",
                                    lineNumber: 524,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: "zoom in to see individual hubs"
                        }, void 0, false, {
                            fileName: "[project]/src/app/project/components/Q1Origins.tsx",
                            lineNumber: 530,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/project/components/Q1Origins.tsx",
                        lineNumber: 507,
                        columnNumber: 9
                    }, this),
                    selectedOrigin && arcLayer === "country" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            background: "rgba(15,110,86,0.15)",
                            border: "1px solid #0F6E56",
                            borderRadius: "20px",
                            padding: "4px 14px",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            fontSize: "12px",
                            color: "#7FE8C0",
                            zIndex: 10,
                            backdropFilter: "blur(4px)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Showing arcs from ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: selectedOrigin
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/project/components/Q1Origins.tsx",
                                        lineNumber: 545,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/project/components/Q1Origins.tsx",
                                lineNumber: 545,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedOrigin(null),
                                style: {
                                    background: "none",
                                    border: "none",
                                    color: "#0F6E56",
                                    cursor: "pointer",
                                    fontSize: "13px",
                                    padding: 0,
                                    lineHeight: 1
                                },
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/src/app/project/components/Q1Origins.tsx",
                                lineNumber: 546,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/project/components/Q1Origins.tsx",
                        lineNumber: 536,
                        columnNumber: 11
                    }, this),
                    noArcsForRegion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            background: "rgba(15,17,23,0.85)",
                            border: "1px solid #2a2d3a",
                            borderRadius: "12px",
                            padding: "20px 28px",
                            textAlign: "center",
                            maxWidth: "340px",
                            backdropFilter: "blur(6px)",
                            zIndex: 10
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: "13px",
                                    fontWeight: 600,
                                    color: "#e2e8f0",
                                    marginBottom: "8px"
                                },
                                children: "No origin trips from this region"
                            }, void 0, false, {
                                fileName: "[project]/src/app/project/components/Q1Origins.tsx",
                                lineNumber: 569,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: "11px",
                                    color: "#64748b",
                                    lineHeight: 1.7
                                },
                                children: [
                                    "Countries in this region appear as ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: "#BA7517"
                                        },
                                        children: "destinations"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/project/components/Q1Origins.tsx",
                                        lineNumber: 573,
                                        columnNumber: 50
                                    }, this),
                                    " in the dataset, not as sources. Switch to",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: "#94a3b8",
                                            fontStyle: "italic"
                                        },
                                        children: "Demand & Delivery"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/project/components/Q1Origins.tsx",
                                        lineNumber: 575,
                                        columnNumber: 15
                                    }, this),
                                    " to see what they receive."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/project/components/Q1Origins.tsx",
                                lineNumber: 572,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/project/components/Q1Origins.tsx",
                        lineNumber: 559,
                        columnNumber: 11
                    }, this),
                    hubDetail && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            top: Math.min(hubDetail.y, mapHeight - 160),
                            left: Math.min(hubDetail.x + 10, width - 175),
                            background: "#1a1d27",
                            border: "1px solid #2a2d3a",
                            borderRadius: "8px",
                            padding: "10px 14px",
                            fontSize: "12px",
                            color: "#e2e8f0",
                            width: "165px",
                            zIndex: 10
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setHubDetail(null),
                                style: {
                                    float: "right",
                                    background: "none",
                                    border: "none",
                                    color: "#64748b",
                                    cursor: "pointer",
                                    fontSize: "14px",
                                    padding: 0
                                },
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/src/app/project/components/Q1Origins.tsx",
                                lineNumber: 591,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontWeight: 600,
                                    color: "#0F6E56",
                                    marginBottom: "6px"
                                },
                                children: hubDetail.name
                            }, void 0, false, {
                                fileName: "[project]/src/app/project/components/Q1Origins.tsx",
                                lineNumber: 595,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    color: "#64748b",
                                    marginBottom: "6px",
                                    fontSize: "11px"
                                },
                                children: hubDetail.country
                            }, void 0, false, {
                                fileName: "[project]/src/app/project/components/Q1Origins.tsx",
                                lineNumber: 596,
                                columnNumber: 13
                            }, this),
                            [
                                {
                                    label: "Delivered",
                                    val: hubDetail.delivered.toLocaleString(),
                                    color: "#0F6E56"
                                },
                                {
                                    label: "Remaining",
                                    val: hubDetail.remaining.toLocaleString(),
                                    color: "#BA7517"
                                }
                            ].map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        justifyContent: "space-between",
                                        marginBottom: "3px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: "#94a3b8",
                                                fontSize: "11px"
                                            },
                                            children: r.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/project/components/Q1Origins.tsx",
                                            lineNumber: 602,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: r.color,
                                                fontWeight: 500,
                                                fontSize: "11px"
                                            },
                                            children: r.val
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/project/components/Q1Origins.tsx",
                                            lineNumber: 603,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, r.label, true, {
                                    fileName: "[project]/src/app/project/components/Q1Origins.tsx",
                                    lineNumber: 601,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/project/components/Q1Origins.tsx",
                        lineNumber: 583,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/project/components/Q1Origins.tsx",
                lineNumber: 503,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    height: timelineHeight,
                    flexShrink: 0,
                    background: "#1a1d27",
                    borderTop: "1px solid #2a2d3a",
                    display: "flex",
                    overflow: "hidden",
                    width: "100%"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            minWidth: 0,
                            padding: "8px 14px 0",
                            display: "flex",
                            flexDirection: "column",
                            borderRight: "1px solid #2a2d3a",
                            overflow: "hidden"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    marginBottom: "6px",
                                    gap: "8px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: "10px",
                                            color: "#64748b",
                                            textTransform: "uppercase",
                                            letterSpacing: "0.06em"
                                        },
                                        children: "Trips per year — click to filter map"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/project/components/Q1Origins.tsx",
                                        lineNumber: 625,
                                        columnNumber: 13
                                    }, this),
                                    selectedYearBar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSelectedYearBar(null),
                                        style: {
                                            fontSize: "10px",
                                            padding: "2px 8px",
                                            borderRadius: "4px",
                                            border: "1px solid #2a2d3a",
                                            background: "transparent",
                                            color: "#64748b",
                                            cursor: "pointer",
                                            fontFamily: "inherit"
                                        },
                                        children: "clear ✕"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/project/components/Q1Origins.tsx",
                                        lineNumber: 629,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/project/components/Q1Origins.tsx",
                                lineNumber: 624,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "flex-end",
                                    gap: "2px",
                                    flex: 1,
                                    paddingBottom: "4px",
                                    minWidth: 0
                                },
                                children: years.map((year)=>{
                                    const count = yearTotals[year] || 0;
                                    const barH = maxYearCount > 0 ? Math.max(4, count / maxYearCount * barAreaHeight) : 4;
                                    const isSelected = selectedYearBar === year;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            flex: 1,
                                            minWidth: 0,
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            cursor: "pointer"
                                        },
                                        onClick: ()=>setSelectedYearBar(isSelected ? null : year),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: "100%",
                                                    height: `${barH}px`,
                                                    background: isSelected ? "#0F6E56" : "#185FA5",
                                                    borderRadius: "2px 2px 0 0",
                                                    opacity: isSelected ? 1 : 0.6,
                                                    transition: "all 0.15s"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/project/components/Q1Origins.tsx",
                                                lineNumber: 652,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: "8px",
                                                    marginTop: "3px",
                                                    color: isSelected ? "#0F6E56" : "#475569",
                                                    fontWeight: isSelected ? 600 : 400,
                                                    whiteSpace: "nowrap",
                                                    overflow: "hidden",
                                                    textOverflow: "clip",
                                                    width: "100%",
                                                    textAlign: "center"
                                                },
                                                children: year
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/project/components/Q1Origins.tsx",
                                                lineNumber: 659,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, year, true, {
                                        fileName: "[project]/src/app/project/components/Q1Origins.tsx",
                                        lineNumber: 647,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/app/project/components/Q1Origins.tsx",
                                lineNumber: 641,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/project/components/Q1Origins.tsx",
                        lineNumber: 619,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: "260px",
                            flexShrink: 0,
                            padding: "8px 14px 6px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: "10px",
                                    color: "#64748b",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.06em",
                                    marginBottom: "6px"
                                },
                                children: "Top origin countries"
                            }, void 0, false, {
                                fileName: "[project]/src/app/project/components/Q1Origins.tsx",
                                lineNumber: 679,
                                columnNumber: 11
                            }, this),
                            (()=>{
                                const byCountry = flows.reduce((acc, f)=>{
                                    if (selectedYearBar && f.year !== selectedYearBar) return acc;
                                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$project$2f$components$2f$Regions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInRegion"])(f.country, selectedRegion)) return acc;
                                    acc[f.country] = (acc[f.country] || 0) + parseInt(f.trip_count);
                                    return acc;
                                }, {});
                                const top = Object.entries(byCountry).sort((a, b)=>b[1] - a[1]).slice(0, 6);
                                const maxVal = top[0]?.[1] || 1;
                                return top.map(([country, count], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginBottom: "5px",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "6px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: "72px",
                                                    fontSize: "10px",
                                                    color: "#94a3b8",
                                                    textAlign: "right",
                                                    flexShrink: 0,
                                                    overflow: "hidden",
                                                    textOverflow: "ellipsis",
                                                    whiteSpace: "nowrap"
                                                },
                                                children: country
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/project/components/Q1Origins.tsx",
                                                lineNumber: 695,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    flex: 1,
                                                    height: "10px",
                                                    background: "#0f1117",
                                                    borderRadius: "2px",
                                                    overflow: "hidden"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        height: "100%",
                                                        width: `${count / maxVal * 100}%`,
                                                        background: i === 0 ? "#0F6E56" : "#185FA5",
                                                        borderRadius: "2px",
                                                        opacity: 0.8
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/project/components/Q1Origins.tsx",
                                                    lineNumber: 703,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/project/components/Q1Origins.tsx",
                                                lineNumber: 702,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: "10px",
                                                    color: "#94a3b8",
                                                    width: "36px",
                                                    flexShrink: 0,
                                                    textAlign: "right"
                                                },
                                                children: count.toLocaleString()
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/project/components/Q1Origins.tsx",
                                                lineNumber: 711,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, country, true, {
                                        fileName: "[project]/src/app/project/components/Q1Origins.tsx",
                                        lineNumber: 694,
                                        columnNumber: 15
                                    }, this));
                            })()
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/project/components/Q1Origins.tsx",
                        lineNumber: 678,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/project/components/Q1Origins.tsx",
                lineNumber: 611,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/project/components/Q1Origins.tsx",
        lineNumber: 500,
        columnNumber: 5
    }, this);
}
_s(Q1Origins, "I+NCS+g8TCfeCGdk03nkBc6nbdE=");
_c = Q1Origins;
var _c;
__turbopack_context__.k.register(_c, "Q1Origins");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/project/components/Q2Demand.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Q2Demand
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/src/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$array$2f$src$2f$max$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__max$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-array/src/max.js [app-client] (ecmascript) <export default as max>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2f$src$2f$sequential$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__scaleSequential$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-scale/src/sequential.js [app-client] (ecmascript) <export default as scaleSequential>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolate$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-interpolate/src/value.js [app-client] (ecmascript) <export default as interpolate>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2f$src$2f$pow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__sqrt__as__scaleSqrt$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-scale/src/pow.js [app-client] (ecmascript) <export sqrt as scaleSqrt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$papaparse$2f$papaparse$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/papaparse/papaparse.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$project$2f$components$2f$MapBase$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/project/components/MapBase.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$project$2f$components$2f$Regions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/project/components/Regions.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const CENTROIDS = {
    // Africa
    Uganda: [
        32.29,
        1.37
    ],
    Ghana: [
        -1.02,
        7.95
    ],
    Tanzania: [
        34.89,
        -6.37
    ],
    Kenya: [
        37.91,
        -0.02
    ],
    Cameroon: [
        12.35,
        3.85
    ],
    Ethiopia: [
        40.49,
        9.15
    ],
    Rwanda: [
        29.87,
        -1.94
    ],
    "DR Congo": [
        23.65,
        -2.88
    ],
    "Congo (Kinshasa)": [
        23.65,
        -2.88
    ],
    "Congo (Brazzaville)": [
        15.83,
        -0.23
    ],
    Senegal: [
        -14.45,
        14.5
    ],
    Morocco: [
        -7.09,
        31.79
    ],
    Nigeria: [
        8.68,
        9.08
    ],
    "Ivory Coast": [
        -5.55,
        7.54
    ],
    Mozambique: [
        35.53,
        -18.67
    ],
    Zambia: [
        27.85,
        -13.13
    ],
    Zimbabwe: [
        29.15,
        -20.0
    ],
    Malawi: [
        34.3,
        -13.25
    ],
    "South Africa": [
        25.08,
        -29.0
    ],
    Madagascar: [
        46.87,
        -18.77
    ],
    Sudan: [
        30.22,
        12.86
    ],
    Togo: [
        0.82,
        8.62
    ],
    Benin: [
        2.32,
        9.31
    ],
    "Burkina Faso": [
        -1.56,
        12.36
    ],
    Mali: [
        -1.98,
        17.57
    ],
    Guinea: [
        -11.81,
        11.0
    ],
    Niger: [
        8.08,
        17.61
    ],
    Chad: [
        18.73,
        15.45
    ],
    Angola: [
        17.87,
        -11.2
    ],
    Egypt: [
        30.8,
        26.82
    ],
    Tunisia: [
        9.56,
        33.89
    ],
    Algeria: [
        2.63,
        28.03
    ],
    Libya: [
        17.23,
        26.34
    ],
    Somalia: [
        45.34,
        5.15
    ],
    Burundi: [
        29.92,
        -3.37
    ],
    "Cape Verde": [
        -24.01,
        14.93
    ],
    Gabon: [
        11.61,
        -0.8
    ],
    Gambia: [
        -15.31,
        13.44
    ],
    Liberia: [
        -9.43,
        6.43
    ],
    Mauritania: [
        -10.94,
        20.25
    ],
    Namibia: [
        18.49,
        -22.96
    ],
    "Sierra Leone": [
        -11.78,
        8.46
    ],
    Swaziland: [
        31.47,
        -26.52
    ],
    "Western Sahara": [
        -13.0,
        24.5
    ],
    // Asia
    India: [
        78.96,
        20.59
    ],
    Nepal: [
        84.12,
        28.39
    ],
    Bangladesh: [
        90.36,
        23.68
    ],
    Philippines: [
        121.77,
        12.88
    ],
    Pakistan: [
        69.35,
        30.38
    ],
    Myanmar: [
        95.96,
        16.87
    ],
    Cambodia: [
        104.99,
        12.57
    ],
    Laos: [
        102.5,
        17.97
    ],
    Vietnam: [
        108.28,
        14.06
    ],
    Indonesia: [
        113.92,
        -0.79
    ],
    Thailand: [
        100.99,
        15.87
    ],
    "Sri Lanka": [
        80.77,
        7.87
    ],
    Afghanistan: [
        67.71,
        33.94
    ],
    Syria: [
        38.3,
        34.8
    ],
    Iraq: [
        43.68,
        33.22
    ],
    Iran: [
        53.69,
        32.43
    ],
    Jordan: [
        36.24,
        31.96
    ],
    Palestine: [
        35.23,
        31.95
    ],
    Lebanon: [
        35.86,
        33.87
    ],
    Yemen: [
        47.59,
        15.55
    ],
    China: [
        104.19,
        35.86
    ],
    Mongolia: [
        103.85,
        46.86
    ],
    Kazakhstan: [
        66.92,
        48.02
    ],
    Georgia: [
        43.36,
        42.32
    ],
    Armenia: [
        44.56,
        40.07
    ],
    Turkey: [
        35.24,
        38.96
    ],
    Israel: [
        34.85,
        31.05
    ],
    // Europe
    Germany: [
        10.45,
        51.17
    ],
    Spain: [
        -3.75,
        40.46
    ],
    France: [
        2.35,
        46.23
    ],
    Ukraine: [
        31.17,
        48.38
    ],
    Romania: [
        24.97,
        45.94
    ],
    Bulgaria: [
        25.49,
        42.73
    ],
    Albania: [
        20.17,
        41.15
    ],
    "Bosnia and Herzegovina": [
        17.68,
        44.17
    ],
    Croatia: [
        15.2,
        45.1
    ],
    Greece: [
        21.82,
        39.07
    ],
    Hungary: [
        19.5,
        47.16
    ],
    Italy: [
        12.57,
        41.87
    ],
    Macedonia: [
        21.75,
        41.61
    ],
    Belarus: [
        27.95,
        53.71
    ],
    Belgium: [
        4.47,
        50.5
    ],
    Austria: [
        14.55,
        47.52
    ],
    Russia: [
        105.32,
        61.52
    ],
    "United Kingdom": [
        -3.44,
        55.38
    ],
    // Latin America
    Colombia: [
        -74.3,
        4.57
    ],
    Bolivia: [
        -64.67,
        -16.29
    ],
    Peru: [
        -75.02,
        -9.19
    ],
    Ecuador: [
        -78.18,
        -1.83
    ],
    Guatemala: [
        -90.23,
        15.78
    ],
    Honduras: [
        -86.24,
        15.2
    ],
    Nicaragua: [
        -85.21,
        12.87
    ],
    "El Salvador": [
        -88.9,
        13.79
    ],
    Haiti: [
        -72.29,
        18.97
    ],
    Cuba: [
        -79.52,
        21.52
    ],
    Venezuela: [
        -66.59,
        6.42
    ],
    Paraguay: [
        -58.44,
        -23.44
    ],
    Mexico: [
        -102.55,
        23.63
    ],
    Brazil: [
        -51.93,
        -14.24
    ],
    Argentina: [
        -63.62,
        -38.42
    ],
    Chile: [
        -71.54,
        -35.68
    ],
    "Dominican Republic": [
        -70.16,
        18.74
    ],
    "Costa Rica": [
        -83.75,
        9.75
    ],
    Panama: [
        -80.78,
        8.54
    ],
    // North America + Oceania
    "United States": [
        -95.71,
        37.09
    ],
    Australia: [
        133.78,
        -25.27
    ],
    "Papua New Guinea": [
        143.96,
        -6.31
    ],
    Vanuatu: [
        166.96,
        -15.38
    ],
    // countries with real demand-gap data (Edoovillages) but few/no Dootrips records
    Switzerland: [
        8.23,
        46.82
    ],
    Denmark: [
        9.5,
        56.26
    ],
    Ireland: [
        -8.24,
        53.41
    ],
    Portugal: [
        -8.22,
        39.4
    ],
    "New Zealand": [
        174.88,
        -40.9
    ],
    Serbia: [
        21.01,
        44.02
    ],
    "South Korea": [
        127.77,
        35.91
    ],
    "South Sudan": [
        31.31,
        6.88
    ],
    Uruguay: [
        -55.77,
        -32.52
    ],
    Belize: [
        -88.5,
        17.19
    ],
    "Guinea-Bissau": [
        -15.18,
        11.8
    ],
    Kyrgyzstan: [
        74.77,
        41.2
    ],
    "Marshall Islands": [
        171.18,
        7.13
    ],
    Tonga: [
        -175.2,
        -21.18
    ]
};
function Q2Demand({ width, height, selectedRegion }) {
    _s();
    const [demandData, setDemandData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [destFlows, setDestFlows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [countryDetail, setCountryDetail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sortMode, setSortMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("absolute");
    const svgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const projectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mapHeight = Math.floor(height * 0.68);
    const chartHeight = height - mapHeight;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Q2Demand.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$papaparse$2f$papaparse$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].parse("/data/demand-gap.csv", {
                download: true,
                header: true,
                complete: {
                    "Q2Demand.useEffect": (result)=>setDemandData(result.data)
                }["Q2Demand.useEffect"]
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$papaparse$2f$papaparse$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].parse("/data/destination-flows.csv", {
                download: true,
                header: true,
                complete: {
                    "Q2Demand.useEffect": (result)=>setDestFlows(result.data)
                }["Q2Demand.useEffect"]
            });
        }
    }["Q2Demand.useEffect"], []);
    const drawOverlay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Q2Demand.useCallback[drawOverlay]": ()=>{
            const svg = svgRef.current;
            const projection = projectionRef.current;
            if (!svg || !projection || demandData.length === 0) return;
            svg.select(".overlay-layer").remove();
            const overlay = svg.append("g").attr("class", "overlay-layer");
            const demandByCountry = new Map();
            demandData.forEach({
                "Q2Demand.useCallback[drawOverlay]": (d)=>demandByCountry.set(d.country, d)
            }["Q2Demand.useCallback[drawOverlay]"]);
            const tripsByCountry = new Map();
            destFlows.forEach({
                "Q2Demand.useCallback[drawOverlay]": (d)=>tripsByCountry.set(d.country, parseInt(d.trips_received) || 0)
            }["Q2Demand.useCallback[drawOverlay]"]);
            const maxUnmetPct = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$array$2f$src$2f$max$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__max$3e$__["max"](demandData, {
                "Q2Demand.useCallback[drawOverlay]": (d)=>parseFloat(d.unmet_pct)
            }["Q2Demand.useCallback[drawOverlay]"]) ?? 100;
            const colourScale = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2f$src$2f$sequential$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__scaleSequential$3e$__["scaleSequential"]().domain([
                0,
                maxUnmetPct
            ]).interpolator(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolate$3e$__["interpolate"]("#1e4d3a", "#BA7517"));
            // size by devices needed, not trips received - trips can be 0 for countries
            // like Germany or Tonga where devices arrived without a logged Dootrips record
            const maxNeeded = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$array$2f$src$2f$max$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__max$3e$__["max"](demandData, {
                "Q2Demand.useCallback[drawOverlay]": (d)=>parseInt(d.needed)
            }["Q2Demand.useCallback[drawOverlay]"]) ?? 1;
            const circleSize = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2f$src$2f$pow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__sqrt__as__scaleSqrt$3e$__["scaleSqrt"]().domain([
                0,
                maxNeeded
            ]).range([
                3,
                20
            ]);
            // union of both datasets so countries with real demand but zero trip records
            // (Germany, Tonga, etc.) still get a bubble on the map
            const allCountries = new Set([
                ...destFlows.map({
                    "Q2Demand.useCallback[drawOverlay]": (d)=>d.country
                }["Q2Demand.useCallback[drawOverlay]"]),
                ...demandData.map({
                    "Q2Demand.useCallback[drawOverlay]": (d)=>d.country
                }["Q2Demand.useCallback[drawOverlay]"])
            ]);
            allCountries.forEach({
                "Q2Demand.useCallback[drawOverlay]": (country)=>{
                    // Q2 filters by destination region, unlike Q1 which filters by origin
                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$project$2f$components$2f$Regions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInRegion"])(country, selectedRegion)) return;
                    const coords = CENTROIDS[country];
                    if (!coords) return;
                    const px = projection(coords);
                    if (!px) return;
                    const demand = demandByCountry.get(country);
                    const unmetPct = demand ? parseFloat(demand.unmet_pct) : 0;
                    const needed = demand ? parseInt(demand.needed) || 0 : 0;
                    const trips = tripsByCountry.get(country) || 0;
                    overlay.append("circle").attr("cx", px[0]).attr("cy", px[1]).attr("r", circleSize(needed)).attr("fill", colourScale(unmetPct)).attr("stroke", "#e2e8f0").attr("stroke-width", 0.5).attr("opacity", 0.85).style("cursor", "pointer").on("click", {
                        "Q2Demand.useCallback[drawOverlay]": function() {
                            const dem = demandByCountry.get(country);
                            setCountryDetail({
                                country,
                                needed: dem ? parseInt(dem.needed) : 0,
                                delivered: dem ? parseInt(dem.delivered) : 0,
                                remaining: dem ? parseInt(dem.remaining) : 0,
                                inTransit: dem ? parseInt(dem.in_transit) : 0,
                                unmetPct: dem ? parseFloat(dem.unmet_pct) : 0,
                                trips
                            });
                        }
                    }["Q2Demand.useCallback[drawOverlay]"]);
                }
            }["Q2Demand.useCallback[drawOverlay]"]);
        }
    }["Q2Demand.useCallback[drawOverlay]"], [
        demandData,
        destFlows,
        selectedRegion
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Q2Demand.useEffect": ()=>{
            drawOverlay();
        }
    }["Q2Demand.useEffect"], [
        drawOverlay
    ]);
    function handleMapReady(svg, projection) {
        svgRef.current = svg;
        projectionRef.current = projection;
        setTimeout(()=>drawOverlay(), 0);
    }
    // bar chart filtered by region so it always matches what's visible on the map
    const barData = demandData.filter((d)=>parseInt(d.remaining) > 0 && parseInt(d.needed) > 0).filter((d)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$project$2f$components$2f$Regions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInRegion"])(d.country, selectedRegion)).sort((a, b)=>sortMode === "absolute" ? parseInt(b.remaining) - parseInt(a.remaining) : parseFloat(b.unmet_pct) - parseFloat(a.unmet_pct)).slice(0, 30);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "relative",
                    width: "100%",
                    height: mapHeight,
                    flexShrink: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$project$2f$components$2f$MapBase$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        width: width,
                        height: mapHeight,
                        onReady: handleMapReady
                    }, void 0, false, {
                        fileName: "[project]/src/app/project/components/Q2Demand.tsx",
                        lineNumber: 301,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            top: "10px",
                            left: "10px",
                            background: "rgba(15,17,23,0.55)",
                            borderRadius: "8px",
                            padding: "8px 12px",
                            backdropFilter: "blur(4px)",
                            pointerEvents: "none",
                            fontSize: "10px",
                            color: "#94a3b8",
                            maxWidth: "190px",
                            lineHeight: 1.7
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "6px",
                                    marginBottom: "2px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            width: 14,
                                            height: 14,
                                            borderRadius: "50%",
                                            border: "1.5px solid #94a3b8",
                                            display: "inline-block",
                                            flexShrink: 0
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/project/components/Q2Demand.tsx",
                                        lineNumber: 312,
                                        columnNumber: 13
                                    }, this),
                                    "bigger circle = more devices needed"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/project/components/Q2Demand.tsx",
                                lineNumber: 311,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "6px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            width: 10,
                                            height: 10,
                                            borderRadius: "50%",
                                            background: "linear-gradient(90deg, #1e4d3a, #BA7517)",
                                            display: "inline-block",
                                            flexShrink: 0
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/project/components/Q2Demand.tsx",
                                        lineNumber: 319,
                                        columnNumber: 13
                                    }, this),
                                    "colour: green = mostly fulfilled, orange = mostly unmet"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/project/components/Q2Demand.tsx",
                                lineNumber: 318,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/project/components/Q2Demand.tsx",
                        lineNumber: 304,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/project/components/Q2Demand.tsx",
                lineNumber: 300,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    height: chartHeight,
                    background: "#1a1d27",
                    borderTop: "1px solid #2a2d3a",
                    display: "flex",
                    flexShrink: 0,
                    overflow: "hidden"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            padding: "10px 14px",
                            overflowY: "scroll",
                            borderRight: "1px solid #2a2d3a",
                            maxHeight: "100%"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    marginBottom: "5px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: "10px",
                                            color: "#64748b",
                                            textTransform: "uppercase",
                                            letterSpacing: "0.06em"
                                        },
                                        children: sortMode === "absolute" ? "Top destinations — most devices unmet (absolute)" : "Top destinations — highest unmet % (proportional)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/project/components/Q2Demand.tsx",
                                        lineNumber: 339,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSortMode(sortMode === "absolute" ? "percent" : "absolute"),
                                        style: {
                                            marginLeft: "auto",
                                            fontSize: "10px",
                                            padding: "3px 8px",
                                            borderRadius: "5px",
                                            border: "1px solid #2a2d3a",
                                            background: "#0f1117",
                                            color: "#e2e8f0",
                                            cursor: "pointer",
                                            fontFamily: "inherit",
                                            whiteSpace: "nowrap"
                                        },
                                        children: sortMode === "absolute" ? "Sort by % unmet" : "Sort by raw count"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/project/components/Q2Demand.tsx",
                                        lineNumber: 344,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/project/components/Q2Demand.tsx",
                                lineNumber: 338,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: "12px",
                                    marginBottom: "8px"
                                },
                                children: [
                                    {
                                        color: "#0F6E56",
                                        label: "delivered"
                                    },
                                    {
                                        color: "#185FA5",
                                        label: "in transit"
                                    },
                                    {
                                        color: "#BA7517",
                                        label: "unmet"
                                    }
                                ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "4px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: "8px",
                                                    height: "8px",
                                                    background: item.color,
                                                    borderRadius: "2px"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/project/components/Q2Demand.tsx",
                                                lineNumber: 365,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: "10px",
                                                    color: "#64748b"
                                                },
                                                children: item.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/project/components/Q2Demand.tsx",
                                                lineNumber: 366,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, item.label, true, {
                                        fileName: "[project]/src/app/project/components/Q2Demand.tsx",
                                        lineNumber: 364,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/project/components/Q2Demand.tsx",
                                lineNumber: 358,
                                columnNumber: 11
                            }, this),
                            barData.map((row, index)=>{
                                const needed = parseInt(row.needed) || 1;
                                const delivered = parseInt(row.delivered) || 0;
                                const inTransit = parseInt(row.in_transit) || 0;
                                const remaining = parseInt(row.remaining) || 0;
                                // each segment as % of needed so they always add up to 100%
                                const deliveredPct = Math.min(delivered / needed * 100, 100);
                                const inTransitPct = Math.min(inTransit / needed * 100, 100 - deliveredPct);
                                const remainingPct = Math.min(remaining / needed * 100, 100 - deliveredPct - inTransitPct);
                                const isSelected = countryDetail?.country === row.country;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: "4px",
                                        cursor: "pointer",
                                        background: index % 2 === 0 ? "transparent" : "rgba(255,255,255,0.025)",
                                        borderRadius: "3px",
                                        padding: "2px 0"
                                    },
                                    onClick: ()=>{
                                        setCountryDetail({
                                            country: row.country,
                                            needed,
                                            delivered,
                                            remaining,
                                            inTransit,
                                            unmetPct: parseFloat(row.unmet_pct),
                                            trips: destFlows.find((d)=>d.country === row.country) ? parseInt(destFlows.find((d)=>d.country === row.country).trips_received) : 0
                                        });
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "6px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: "80px",
                                                    fontSize: "10px",
                                                    textAlign: "right",
                                                    flexShrink: 0,
                                                    color: isSelected ? "#e2e8f0" : "#94a3b8",
                                                    fontWeight: isSelected ? 600 : 400
                                                },
                                                children: row.country
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/project/components/Q2Demand.tsx",
                                                lineNumber: 407,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    flex: 1,
                                                    height: "12px",
                                                    background: "#0f1117",
                                                    borderRadius: "2px",
                                                    overflow: "hidden",
                                                    position: "relative",
                                                    outline: isSelected ? "1px solid #0F6E56" : "none"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            position: "absolute",
                                                            left: 0,
                                                            top: 0,
                                                            height: "100%",
                                                            width: `${deliveredPct}%`,
                                                            background: "#0F6E56"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/project/components/Q2Demand.tsx",
                                                        lineNumber: 419,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            position: "absolute",
                                                            left: `${deliveredPct}%`,
                                                            top: 0,
                                                            height: "100%",
                                                            width: `${inTransitPct}%`,
                                                            background: "#185FA5"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/project/components/Q2Demand.tsx",
                                                        lineNumber: 420,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            position: "absolute",
                                                            left: `${deliveredPct + inTransitPct}%`,
                                                            top: 0,
                                                            height: "100%",
                                                            width: `${remainingPct}%`,
                                                            background: "#BA7517"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/project/components/Q2Demand.tsx",
                                                        lineNumber: 421,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/project/components/Q2Demand.tsx",
                                                lineNumber: 414,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: "10px",
                                                    color: "#BA7517",
                                                    width: "30px",
                                                    flexShrink: 0
                                                },
                                                children: [
                                                    parseFloat(row.unmet_pct).toFixed(0),
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/project/components/Q2Demand.tsx",
                                                lineNumber: 423,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/project/components/Q2Demand.tsx",
                                        lineNumber: 406,
                                        columnNumber: 17
                                    }, this)
                                }, row.country, false, {
                                    fileName: "[project]/src/app/project/components/Q2Demand.tsx",
                                    lineNumber: 385,
                                    columnNumber: 15
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/project/components/Q2Demand.tsx",
                        lineNumber: 336,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: "200px",
                            flexShrink: 0,
                            padding: "10px 14px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: "10px",
                                    color: "#64748b",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.06em",
                                    marginBottom: "10px"
                                },
                                children: "Country detail"
                            }, void 0, false, {
                                fileName: "[project]/src/app/project/components/Q2Demand.tsx",
                                lineNumber: 434,
                                columnNumber: 11
                            }, this),
                            countryDetail ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: "14px",
                                            fontWeight: 600,
                                            color: "#BA7517",
                                            marginBottom: "10px"
                                        },
                                        children: countryDetail.country
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/project/components/Q2Demand.tsx",
                                        lineNumber: 440,
                                        columnNumber: 15
                                    }, this),
                                    [
                                        {
                                            label: "Devices needed",
                                            val: countryDetail.needed.toLocaleString(),
                                            color: "#e2e8f0"
                                        },
                                        {
                                            label: "Delivered",
                                            val: countryDetail.delivered.toLocaleString(),
                                            color: "#0F6E56"
                                        },
                                        {
                                            label: "In transit",
                                            val: countryDetail.inTransit.toLocaleString(),
                                            color: "#378ADD"
                                        },
                                        {
                                            label: "Still unmet",
                                            val: countryDetail.remaining.toLocaleString(),
                                            color: "#BA7517"
                                        },
                                        {
                                            label: "Unmet %",
                                            val: `${countryDetail.unmetPct.toFixed(1)}%`,
                                            color: "#BA7517"
                                        },
                                        // label is explicit about cross-border so a 0 here doesn't look
                                        // contradictory next to a non-zero delivered count (e.g. Germany)
                                        {
                                            label: "Cross-border trips received",
                                            val: countryDetail.trips.toLocaleString(),
                                            color: "#94a3b8"
                                        }
                                    ].map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginBottom: "6px"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    borderBottom: "1px solid #1a2332",
                                                    paddingBottom: "6px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: "11px",
                                                            color: "#64748b"
                                                        },
                                                        children: row.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/project/components/Q2Demand.tsx",
                                                        lineNumber: 455,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: "11px",
                                                            color: row.color,
                                                            fontWeight: 500
                                                        },
                                                        children: row.val
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/project/components/Q2Demand.tsx",
                                                        lineNumber: 456,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/project/components/Q2Demand.tsx",
                                                lineNumber: 454,
                                                columnNumber: 19
                                            }, this)
                                        }, row.label, false, {
                                            fileName: "[project]/src/app/project/components/Q2Demand.tsx",
                                            lineNumber: 453,
                                            columnNumber: 17
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginTop: "8px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: "10px",
                                                    color: "#64748b",
                                                    marginBottom: "4px"
                                                },
                                                children: "Breakdown"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/project/components/Q2Demand.tsx",
                                                lineNumber: 462,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    height: "10px",
                                                    background: "#0f1117",
                                                    borderRadius: "3px",
                                                    overflow: "hidden",
                                                    display: "flex"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: `${countryDetail.delivered / countryDetail.needed * 100}%`,
                                                            background: "#0F6E56"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/project/components/Q2Demand.tsx",
                                                        lineNumber: 464,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: `${countryDetail.inTransit / countryDetail.needed * 100}%`,
                                                            background: "#185FA5"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/project/components/Q2Demand.tsx",
                                                        lineNumber: 465,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: `${countryDetail.remaining / countryDetail.needed * 100}%`,
                                                            background: "#BA7517"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/project/components/Q2Demand.tsx",
                                                        lineNumber: 466,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/project/components/Q2Demand.tsx",
                                                lineNumber: 463,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/project/components/Q2Demand.tsx",
                                        lineNumber: 461,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: "12px",
                                    color: "#475569",
                                    lineHeight: 1.6
                                },
                                children: "Click any bubble on the map or a bar in the chart to see country details here."
                            }, void 0, false, {
                                fileName: "[project]/src/app/project/components/Q2Demand.tsx",
                                lineNumber: 471,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/project/components/Q2Demand.tsx",
                        lineNumber: 433,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/project/components/Q2Demand.tsx",
                lineNumber: 330,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/project/components/Q2Demand.tsx",
        lineNumber: 297,
        columnNumber: 5
    }, this);
}
_s(Q2Demand, "4OawShTB1+7q+nLv1o0mdQsdHIg=");
_c = Q2Demand;
var _c;
__turbopack_context__.k.register(_c, "Q2Demand");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/project/components/Q3Pipeline.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Q3Pipeline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$papaparse$2f$papaparse$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/papaparse/papaparse.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$project$2f$components$2f$Regions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/project/components/Regions.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const STAGE_CONFIG = {
    "S0": {
        color: "#185FA5",
        shortLabel: "Tagged",
        description: "Device has been registered on the Labdoo platform but no hub has collected it yet. It is still with the donor."
    },
    "S1": {
        color: "#378ADD",
        shortLabel: "At hub, awaiting QA",
        description: "Device has arrived at a Labdoo hub. Volunteers are checking it works, cleaning it, and installing the required software."
    },
    "S2": {
        color: "#BA7517",
        shortLabel: "Passed QA — awaiting school assignment",
        description: "Device passed all quality checks and is ready to ship. It is sitting in a hub warehouse waiting to be matched with a school in need. This is the biggest bottleneck in the network."
    },
    "S3": {
        color: "#854F0B",
        shortLabel: "Assigned — awaiting shipment",
        description: "Device has been assigned to a specific school but no Dootrip has been scheduled yet to carry it there."
    },
    "T1": {
        color: "#EF9F27",
        shortLabel: "In transit",
        description: "Device is currently on a Dootrip — a volunteer is physically carrying it to the destination country."
    },
    "S4": {
        color: "#0F6E56",
        shortLabel: "Delivered ✓",
        description: "Device has been successfully delivered to a school and is being used by students."
    },
    "S5": {
        color: "#475569",
        shortLabel: "Broken / retired",
        description: "Device was found to be broken beyond repair during or after the journey and has been retired from service."
    },
    "S6": {
        color: "#334155",
        shortLabel: "Recycled",
        description: "Device has been responsibly recycled or repurposed at end of life."
    },
    "Other": {
        color: "#2a2d3a",
        shortLabel: "Other / Edge cases",
        description: "Undocumented status codes (L1, T2, S7-S9). Less than 0.7% of all devices. Grouped here to avoid misleading labels."
    }
};
const STAGE_ORDER = [
    "S4",
    "S2",
    "S0",
    "S1",
    "T1",
    "S3",
    "S5",
    "S6",
    "Other"
];
function Q3Pipeline({ selectedRegion }) {
    _s();
    const [stages, setStages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [backlog, setBacklog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [stageCountry, setStageCountry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedStage, setSelectedStage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Q3Pipeline.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$papaparse$2f$papaparse$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].parse("/data/pipeline-stages.csv", {
                download: true,
                header: true,
                complete: {
                    "Q3Pipeline.useEffect": (result)=>setStages(result.data)
                }["Q3Pipeline.useEffect"]
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$papaparse$2f$papaparse$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].parse("/data/pipeline-by-country.csv", {
                download: true,
                header: true,
                complete: {
                    "Q3Pipeline.useEffect": (result)=>setBacklog(result.data)
                }["Q3Pipeline.useEffect"]
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$papaparse$2f$papaparse$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].parse("/data/pipeline-by-country-stage.csv", {
                download: true,
                header: true,
                complete: {
                    "Q3Pipeline.useEffect": (result)=>setStageCountry(result.data)
                }["Q3Pipeline.useEffect"]
            });
        }
    }["Q3Pipeline.useEffect"], []);
    const sortedStages = [
        ...stages
    ].sort((a, b)=>{
        const ai = STAGE_ORDER.indexOf(a.status);
        const bi = STAGE_ORDER.indexOf(b.status);
        return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
    });
    const maxCount = Math.max(...stages.map((s)=>parseInt(s.device_count) || 0));
    const topBacklog = [
        ...backlog
    ].filter((b)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$project$2f$components$2f$Regions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInRegion"])(b.country, selectedRegion)).sort((a, b)=>parseInt(b.devices_stuck) - parseInt(a.devices_stuck)).slice(0, 15);
    const maxStuck = parseInt(topBacklog[0]?.devices_stuck || "1");
    // per-stage breakdown filtered by both stage and region
    const stageCountryData = selectedStage ? [
        ...stageCountry
    ].filter((r)=>r.status === selectedStage.status).filter((r)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$project$2f$components$2f$Regions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInRegion"])(r.country, selectedRegion)).sort((a, b)=>parseInt(b.device_count) - parseInt(a.device_count)).slice(0, 10) : [];
    const maxStageCount = parseInt(stageCountryData[0]?.device_count || "1");
    const preDeliveryStatuses = [
        "S0",
        "S1",
        "S2",
        "S3",
        "T1"
    ];
    const totalPreDelivery = stages.filter((s)=>preDeliveryStatuses.includes(s.status)).reduce((sum, s)=>sum + (parseInt(s.device_count) || 0), 0);
    const deliveredCount = parseInt(stages.find((s)=>s.status === "S4")?.device_count || "0");
    const deliveryRate = deliveredCount ? Math.round(deliveredCount / (deliveredCount + totalPreDelivery) * 100) : 0;
    const s2Count = parseInt(stages.find((s)=>s.status === "S2")?.device_count || "0");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            overflow: "hidden"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "8px 16px",
                    background: "#0f1117",
                    borderBottom: "1px solid #2a2d3a",
                    fontSize: "11px",
                    color: "#64748b",
                    flexShrink: 0
                },
                children: [
                    "💡 ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: "#94a3b8"
                        },
                        children: [
                            "Countries like Switzerland and Germany appear at the top of the backlog not because they need devices but they are major ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                style: {
                                    color: "#0F6E56"
                                },
                                children: "sender"
                            }, void 0, false, {
                                fileName: "[project]/src/app/project/components/Q3Pipeline.tsx",
                                lineNumber: 154,
                                columnNumber: 26
                            }, this),
                            " countries whose hubs collect laptops before shipping them abroad. The backlog represents devices queued up in European warehouses waiting to be assigned to schools in Africa and Asia."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/project/components/Q3Pipeline.tsx",
                        lineNumber: 152,
                        columnNumber: 12
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/project/components/Q3Pipeline.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flex: 1,
                    overflow: "hidden"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            padding: "14px 16px",
                            overflowY: "auto",
                            borderRight: "1px solid #2a2d3a",
                            display: "flex",
                            flexDirection: "column"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: "10px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: "10px",
                                            color: "#64748b",
                                            textTransform: "uppercase",
                                            letterSpacing: "0.06em",
                                            marginBottom: "3px"
                                        },
                                        children: "Device pipeline — all stages"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/project/components/Q3Pipeline.tsx",
                                        lineNumber: 167,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: "11px",
                                            color: "#475569"
                                        },
                                        children: "Each bar shows how many devices are currently at that stage. Click a stage to see the country breakdown on the right."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/project/components/Q3Pipeline.tsx",
                                        lineNumber: 170,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/project/components/Q3Pipeline.tsx",
                                lineNumber: 166,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1
                                },
                                children: sortedStages.map((stage)=>{
                                    const count = parseInt(stage.device_count) || 0;
                                    const config = STAGE_CONFIG[stage.status] ?? {
                                        color: "#334155",
                                        shortLabel: stage.status,
                                        description: ""
                                    };
                                    const widthPct = maxCount > 0 ? count / maxCount * 100 : 0;
                                    const isSelected = selectedStage?.status === stage.status;
                                    const isBottleneck = stage.status === "S2";
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginBottom: "10px",
                                            cursor: "pointer"
                                        },
                                        onClick: ()=>setSelectedStage(isSelected ? null : {
                                                status: stage.status,
                                                label: config.shortLabel,
                                                count,
                                                color: config.color
                                            }),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "8px",
                                                    marginBottom: "3px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: "10px",
                                                            fontWeight: 700,
                                                            color: config.color,
                                                            fontFamily: "monospace",
                                                            width: "32px",
                                                            flexShrink: 0
                                                        },
                                                        children: stage.status
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/project/components/Q3Pipeline.tsx",
                                                        lineNumber: 197,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: "11px",
                                                            color: isSelected ? "#e2e8f0" : "#94a3b8"
                                                        },
                                                        children: config.shortLabel
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/project/components/Q3Pipeline.tsx",
                                                        lineNumber: 200,
                                                        columnNumber: 21
                                                    }, this),
                                                    isBottleneck && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: "9px",
                                                            padding: "1px 6px",
                                                            borderRadius: "10px",
                                                            background: "#BA751730",
                                                            color: "#BA7517",
                                                            border: "1px solid #BA751760",
                                                            flexShrink: 0
                                                        },
                                                        children: "⚠ biggest backlog"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/project/components/Q3Pipeline.tsx",
                                                        lineNumber: 204,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/project/components/Q3Pipeline.tsx",
                                                lineNumber: 196,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "10px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: "32px",
                                                            flexShrink: 0
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/project/components/Q3Pipeline.tsx",
                                                        lineNumber: 215,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            flex: 1,
                                                            height: "18px",
                                                            background: "#0f1117",
                                                            borderRadius: "3px",
                                                            overflow: "hidden",
                                                            outline: isSelected ? `1.5px solid ${config.color}` : "none",
                                                            boxShadow: isBottleneck && !isSelected ? `0 0 0 1px #BA751740` : "none"
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                height: "100%",
                                                                width: `${widthPct}%`,
                                                                background: config.color,
                                                                borderRadius: "3px",
                                                                boxShadow: isBottleneck ? `0 0 8px ${config.color}60` : "none",
                                                                transition: "width 0.3s ease"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/project/components/Q3Pipeline.tsx",
                                                            lineNumber: 221,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/project/components/Q3Pipeline.tsx",
                                                        lineNumber: 216,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: "55px",
                                                            flexShrink: 0,
                                                            fontSize: "11px",
                                                            fontWeight: 500,
                                                            color: isSelected ? "#e2e8f0" : config.color,
                                                            textAlign: "right"
                                                        },
                                                        children: count.toLocaleString()
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/project/components/Q3Pipeline.tsx",
                                                        lineNumber: 228,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/project/components/Q3Pipeline.tsx",
                                                lineNumber: 214,
                                                columnNumber: 19
                                            }, this),
                                            isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    marginTop: "5px",
                                                    marginLeft: "40px",
                                                    fontSize: "11px",
                                                    color: "#64748b",
                                                    lineHeight: 1.6,
                                                    padding: "6px 10px",
                                                    background: "#0f1117",
                                                    borderRadius: "4px",
                                                    borderLeft: `2px solid ${config.color}`
                                                },
                                                children: config.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/project/components/Q3Pipeline.tsx",
                                                lineNumber: 235,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, stage.status, true, {
                                        fileName: "[project]/src/app/project/components/Q3Pipeline.tsx",
                                        lineNumber: 184,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/app/project/components/Q3Pipeline.tsx",
                                lineNumber: 175,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: "12px",
                                    padding: "12px 14px",
                                    background: "#0f1117",
                                    borderRadius: "6px",
                                    border: "1px solid #2a2d3a"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: "10px",
                                            color: "#64748b",
                                            textTransform: "uppercase",
                                            letterSpacing: "0.06em",
                                            marginBottom: "10px"
                                        },
                                        children: "Pipeline summary"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/project/components/Q3Pipeline.tsx",
                                        lineNumber: 254,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "grid",
                                            gridTemplateColumns: "1fr 1fr 1fr",
                                            gap: "12px"
                                        },
                                        children: [
                                            {
                                                label: "Delivery rate",
                                                value: `${deliveryRate}%`,
                                                color: "#0F6E56",
                                                explanation: "of all devices ever processed have been successfully delivered to a school"
                                            },
                                            {
                                                label: "Pre-delivery total",
                                                value: totalPreDelivery.toLocaleString(),
                                                color: "#BA7517",
                                                explanation: "devices are currently somewhere in the pipeline — collected but not yet at a school"
                                            },
                                            {
                                                label: "S2 bottleneck",
                                                value: s2Count.toLocaleString(),
                                                color: "#BA7517",
                                                explanation: "devices passed quality checks and are ready to ship, but have not been matched with a school yet"
                                            }
                                        ].map((stat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: "20px",
                                                            fontWeight: 600,
                                                            color: stat.color
                                                        },
                                                        children: stat.value
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/project/components/Q3Pipeline.tsx",
                                                        lineNumber: 279,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: "10px",
                                                            color: "#94a3b8",
                                                            marginTop: "2px",
                                                            marginBottom: "4px",
                                                            fontWeight: 500
                                                        },
                                                        children: stat.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/project/components/Q3Pipeline.tsx",
                                                        lineNumber: 280,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: "10px",
                                                            color: "#475569",
                                                            lineHeight: 1.5
                                                        },
                                                        children: stat.explanation
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/project/components/Q3Pipeline.tsx",
                                                        lineNumber: 281,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, stat.label, true, {
                                                fileName: "[project]/src/app/project/components/Q3Pipeline.tsx",
                                                lineNumber: 278,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/project/components/Q3Pipeline.tsx",
                                        lineNumber: 257,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/project/components/Q3Pipeline.tsx",
                                lineNumber: 250,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/project/components/Q3Pipeline.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: "320px",
                            flexShrink: 0,
                            padding: "14px 16px",
                            overflowY: "auto",
                            display: "flex",
                            flexDirection: "column"
                        },
                        children: selectedStage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: "12px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: "10px",
                                                color: "#64748b",
                                                textTransform: "uppercase",
                                                letterSpacing: "0.06em",
                                                marginBottom: "6px"
                                            },
                                            children: "Stage detail"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/project/components/Q3Pipeline.tsx",
                                            lineNumber: 294,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "8px",
                                                marginBottom: "6px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: "13px",
                                                        fontWeight: 700,
                                                        color: selectedStage.color,
                                                        fontFamily: "monospace"
                                                    },
                                                    children: selectedStage.status
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/project/components/Q3Pipeline.tsx",
                                                    lineNumber: 298,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: "12px",
                                                        color: "#94a3b8"
                                                    },
                                                    children: selectedStage.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/project/components/Q3Pipeline.tsx",
                                                    lineNumber: 301,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/project/components/Q3Pipeline.tsx",
                                            lineNumber: 297,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: "11px",
                                                color: "#64748b",
                                                lineHeight: 1.6,
                                                padding: "8px 10px",
                                                background: "#0f1117",
                                                borderRadius: "4px",
                                                borderLeft: `2px solid ${selectedStage.color}`,
                                                marginBottom: "8px"
                                            },
                                            children: STAGE_CONFIG[selectedStage.status]?.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/project/components/Q3Pipeline.tsx",
                                            lineNumber: 303,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: "18px",
                                                fontWeight: 600,
                                                color: selectedStage.color
                                            },
                                            children: [
                                                selectedStage.count.toLocaleString(),
                                                " devices"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/project/components/Q3Pipeline.tsx",
                                            lineNumber: 310,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/project/components/Q3Pipeline.tsx",
                                    lineNumber: 293,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: "10px",
                                        color: "#64748b",
                                        textTransform: "uppercase",
                                        letterSpacing: "0.06em",
                                        marginBottom: "8px"
                                    },
                                    children: [
                                        "Countries with most devices at ",
                                        selectedStage.status
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/project/components/Q3Pipeline.tsx",
                                    lineNumber: 315,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        flex: 1
                                    },
                                    children: stageCountryData.length > 0 ? stageCountryData.map((row, index)=>{
                                        const count = parseInt(row.device_count) || 0;
                                        const pct = maxStageCount > 0 ? count / maxStageCount * 100 : 0;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginBottom: "6px",
                                                background: index % 2 === 0 ? "transparent" : "rgba(255,255,255,0.02)",
                                                borderRadius: "3px",
                                                padding: "2px 0"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "6px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: "90px",
                                                            fontSize: "10px",
                                                            color: "#94a3b8",
                                                            textAlign: "right",
                                                            flexShrink: 0
                                                        },
                                                        children: row.country
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/project/components/Q3Pipeline.tsx",
                                                        lineNumber: 331,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            flex: 1,
                                                            height: "10px",
                                                            background: "#0f1117",
                                                            borderRadius: "2px",
                                                            overflow: "hidden"
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                height: "100%",
                                                                width: `${pct}%`,
                                                                background: selectedStage.color,
                                                                borderRadius: "2px"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/project/components/Q3Pipeline.tsx",
                                                            lineNumber: 333,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/project/components/Q3Pipeline.tsx",
                                                        lineNumber: 332,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: "10px",
                                                            color: "#94a3b8",
                                                            width: "40px",
                                                            flexShrink: 0,
                                                            textAlign: "right"
                                                        },
                                                        children: count.toLocaleString()
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/project/components/Q3Pipeline.tsx",
                                                        lineNumber: 335,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/project/components/Q3Pipeline.tsx",
                                                lineNumber: 330,
                                                columnNumber: 25
                                            }, this)
                                        }, row.country, false, {
                                            fileName: "[project]/src/app/project/components/Q3Pipeline.tsx",
                                            lineNumber: 325,
                                            columnNumber: 23
                                        }, this);
                                    }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: "11px",
                                            color: "#475569"
                                        },
                                        children: selectedRegion === "all" ? "No country data available for this stage" : "No countries in this region have devices at this stage. Try \u201cAll regions\u201d."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/project/components/Q3Pipeline.tsx",
                                        lineNumber: 343,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/project/components/Q3Pipeline.tsx",
                                    lineNumber: 319,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSelectedStage(null),
                                    style: {
                                        marginTop: "12px",
                                        width: "100%",
                                        fontSize: "11px",
                                        padding: "6px 0",
                                        borderRadius: "5px",
                                        border: "1px solid #2a2d3a",
                                        background: "transparent",
                                        color: "#64748b",
                                        cursor: "pointer",
                                        fontFamily: "inherit"
                                    },
                                    children: "← back to backlog overview"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/project/components/Q3Pipeline.tsx",
                                    lineNumber: 351,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: "10px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: "10px",
                                                color: "#64748b",
                                                textTransform: "uppercase",
                                                letterSpacing: "0.06em",
                                                marginBottom: "3px"
                                            },
                                            children: "Pre-delivery backlog by country"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/project/components/Q3Pipeline.tsx",
                                            lineNumber: 366,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: "11px",
                                                color: "#475569",
                                                lineHeight: 1.6
                                            },
                                            children: "Total devices stuck in S0–S3 + T1 combined. These are devices that have been collected but not yet delivered to a school. European countries dominate because that is where most Labdoo hubs are located."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/project/components/Q3Pipeline.tsx",
                                            lineNumber: 369,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/project/components/Q3Pipeline.tsx",
                                    lineNumber: 365,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        flex: 1
                                    },
                                    children: topBacklog.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: "11px",
                                            color: "#475569",
                                            lineHeight: 1.6,
                                            paddingTop: "10px"
                                        },
                                        children: 'No countries in this region currently have devices stuck pre-delivery. Try "All regions".'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/project/components/Q3Pipeline.tsx",
                                        lineNumber: 377,
                                        columnNumber: 19
                                    }, this) : topBacklog.map((row, index)=>{
                                        const count = parseInt(row.devices_stuck) || 0;
                                        const pct = maxStuck > 0 ? count / maxStuck * 100 : 0;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginBottom: "6px",
                                                background: index % 2 === 0 ? "transparent" : "rgba(255,255,255,0.02)",
                                                borderRadius: "3px",
                                                padding: "2px 0"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "6px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: "90px",
                                                            fontSize: "10px",
                                                            color: "#94a3b8",
                                                            textAlign: "right",
                                                            flexShrink: 0
                                                        },
                                                        children: row.country
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/project/components/Q3Pipeline.tsx",
                                                        lineNumber: 391,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            flex: 1,
                                                            height: "10px",
                                                            background: "#0f1117",
                                                            borderRadius: "2px",
                                                            overflow: "hidden"
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                height: "100%",
                                                                width: `${pct}%`,
                                                                background: "#BA7517",
                                                                borderRadius: "2px"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/project/components/Q3Pipeline.tsx",
                                                            lineNumber: 393,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/project/components/Q3Pipeline.tsx",
                                                        lineNumber: 392,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: "10px",
                                                            color: "#BA7517",
                                                            width: "40px",
                                                            flexShrink: 0,
                                                            textAlign: "right"
                                                        },
                                                        children: count.toLocaleString()
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/project/components/Q3Pipeline.tsx",
                                                        lineNumber: 395,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/project/components/Q3Pipeline.tsx",
                                                lineNumber: 390,
                                                columnNumber: 25
                                            }, this)
                                        }, row.country, false, {
                                            fileName: "[project]/src/app/project/components/Q3Pipeline.tsx",
                                            lineNumber: 385,
                                            columnNumber: 23
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/app/project/components/Q3Pipeline.tsx",
                                    lineNumber: 375,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/src/app/project/components/Q3Pipeline.tsx",
                        lineNumber: 289,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/project/components/Q3Pipeline.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/project/components/Q3Pipeline.tsx",
        lineNumber: 144,
        columnNumber: 5
    }, this);
}
_s(Q3Pipeline, "3QBi/8UEwjb3U6VhFrg+m7LGHN4=");
_c = Q3Pipeline;
var _c;
__turbopack_context__.k.register(_c, "Q3Pipeline");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/project/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$papaparse$2f$papaparse$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/papaparse/papaparse.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$project$2f$components$2f$Q1Origins$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/project/components/Q1Origins.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$project$2f$components$2f$Q2Demand$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/project/components/Q2Demand.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$project$2f$components$2f$Q3Pipeline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/project/components/Q3Pipeline.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$project$2f$components$2f$Regions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/project/components/Regions.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function ProjectPage() {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("q1");
    const [selectedRegion, setSelectedRegion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [arcLayer, setArcLayer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("country");
    // ResizeObserver on the content area so map components always know their actual dimensions and stays accurate even when switching between tabs
    const contentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [mapSize, setMapSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        width: 0,
        height: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectPage.useEffect": ()=>{
            if (!contentRef.current) return;
            const observer = new ResizeObserver({
                "ProjectPage.useEffect": (entries)=>{
                    const { width, height } = entries[0].contentRect;
                    setMapSize({
                        width,
                        height
                    });
                }
            }["ProjectPage.useEffect"]);
            observer.observe(contentRef.current);
            return ({
                "ProjectPage.useEffect": ()=>observer.disconnect()
            })["ProjectPage.useEffect"];
        }
    }["ProjectPage.useEffect"], []);
    // stats strip data loaded at page level so all four numbers react to
    // selectedRegion regardless of which tab is currently active
    const [originFlows, setOriginFlows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [demandData, setDemandData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectPage.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$papaparse$2f$papaparse$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].parse("/data/origin-flows.csv", {
                download: true,
                header: true,
                complete: {
                    "ProjectPage.useEffect": (result)=>setOriginFlows(result.data)
                }["ProjectPage.useEffect"]
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$papaparse$2f$papaparse$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].parse("/data/demand-gap.csv", {
                download: true,
                header: true,
                complete: {
                    "ProjectPage.useEffect": (result)=>setDemandData(result.data)
                }["ProjectPage.useEffect"]
            });
        }
    }["ProjectPage.useEffect"], []);
    /*
   * "trips sent" is filtered by ORIGIN country (Q1 framing: where do donations come from).
   * delivered/unmet/students are filtered by DESTINATION country (Q2 framing: where do they go).
   * This is why Latin America shows 0 trips sent but real delivered numbers, it's purely
   * a receiving region in this dataset, never an origin. The label says "from region"
   * so the 0 doesn't look like a bug next to a non-zero delivered count.
   */ const completedTrips = originFlows.filter((f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$project$2f$components$2f$Regions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInRegion"])(f.country, selectedRegion)).reduce((sum, f)=>sum + (parseInt(f.trip_count) || 0), 0);
    const filteredDemand = demandData.filter((d)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$project$2f$components$2f$Regions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInRegion"])(d.country, selectedRegion));
    const devicesDelivered = filteredDemand.reduce((sum, d)=>sum + (parseInt(d.delivered) || 0), 0);
    const stillUnmet = filteredDemand.reduce((sum, d)=>sum + (parseInt(d.remaining) || 0), 0);
    const studentsReached = filteredDemand.reduce((sum, d)=>sum + (parseInt(d.total_students) || 0), 0);
    function formatCompact(n) {
        if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(2)}M`;
        if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
        return n.toLocaleString();
    }
    const STATS = [
        {
            label: "trips sent (from region)",
            value: completedTrips.toLocaleString(),
            color: "var(--text-primary)"
        },
        {
            label: "devices delivered",
            value: devicesDelivered.toLocaleString(),
            color: "#0F6E56"
        },
        {
            label: "still unmet",
            value: stillUnmet.toLocaleString(),
            color: "#BA7517"
        },
        {
            label: "students reached",
            value: formatCompact(studentsReached),
            color: "var(--text-primary)"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: styles.wrapper,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                style: styles.topbar,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            ...styles.logo,
                            cursor: "pointer"
                        },
                        onClick: ()=>window.location.reload(),
                        title: "Reload",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: styles.logoAccent,
                                children: "Labdoo"
                            }, void 0, false, {
                                fileName: "[project]/src/app/project/page.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this),
                            " Flow Explorer"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/project/page.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        style: styles.tabs,
                        children: [
                            {
                                id: "q1",
                                label: "Origins"
                            },
                            {
                                id: "q2",
                                label: "Demand & Delivery"
                            },
                            {
                                id: "q3",
                                label: "Pipeline Status"
                            }
                        ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                style: {
                                    ...styles.tab,
                                    ...activeTab === tab.id ? styles.tabActive : {}
                                },
                                onClick: ()=>setActiveTab(tab.id),
                                children: tab.label
                            }, tab.id, false, {
                                fileName: "[project]/src/app/project/page.tsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/project/page.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/project/page.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.statsStrip,
                children: STATS.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: styles.statBox,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    ...styles.statNumber,
                                    color: s.color
                                },
                                children: s.value
                            }, void 0, false, {
                                fileName: "[project]/src/app/project/page.tsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: styles.statLabel,
                                children: s.label
                            }, void 0, false, {
                                fileName: "[project]/src/app/project/page.tsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, this)
                        ]
                    }, s.label, true, {
                        fileName: "[project]/src/app/project/page.tsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/project/page.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.body,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        style: styles.sidebar,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: styles.sidebarLabel,
                                children: "Region"
                            }, void 0, false, {
                                fileName: "[project]/src/app/project/page.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this),
                            Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$project$2f$components$2f$Regions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REGION_LABELS"]).map(([id, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    style: {
                                        ...styles.chip,
                                        ...selectedRegion === id ? styles.chipActive : {}
                                    },
                                    onClick: ()=>setSelectedRegion(id),
                                    children: label
                                }, id, false, {
                                    fileName: "[project]/src/app/project/page.tsx",
                                    lineNumber: 128,
                                    columnNumber: 13
                                }, this)),
                            activeTab === "q1" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: styles.sidebarLabel,
                                        children: "Arc layer"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/project/page.tsx",
                                        lineNumber: 140,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        style: styles.toggleBtn,
                                        onClick: ()=>setArcLayer(arcLayer === "country" ? "hub" : "country"),
                                        children: arcLayer === "country" ? "Country arcs" : "Hub-level dots"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/project/page.tsx",
                                        lineNumber: 141,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/project/page.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        ref: contentRef,
                        style: styles.content,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: "100%",
                                    height: "100%",
                                    display: activeTab === "q1" ? "block" : "none"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$project$2f$components$2f$Q1Origins$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    width: mapSize.width,
                                    height: mapSize.height,
                                    selectedRegion: selectedRegion,
                                    arcLayer: arcLayer
                                }, void 0, false, {
                                    fileName: "[project]/src/app/project/page.tsx",
                                    lineNumber: 155,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/project/page.tsx",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: "100%",
                                    height: "100%",
                                    display: activeTab === "q2" ? "block" : "none"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$project$2f$components$2f$Q2Demand$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    width: mapSize.width,
                                    height: mapSize.height,
                                    selectedRegion: selectedRegion
                                }, void 0, false, {
                                    fileName: "[project]/src/app/project/page.tsx",
                                    lineNumber: 158,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/project/page.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: "100%",
                                    height: "100%",
                                    display: activeTab === "q3" ? "block" : "none"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$project$2f$components$2f$Q3Pipeline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    selectedRegion: selectedRegion
                                }, void 0, false, {
                                    fileName: "[project]/src/app/project/page.tsx",
                                    lineNumber: 161,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/project/page.tsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/project/page.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/project/page.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/project/page.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_s(ProjectPage, "4HgoTO80V/64boljKazBPY4B2eQ=");
_c = ProjectPage;
const styles = {
    wrapper: {
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#0f1117",
        color: "#e2e8f0",
        fontFamily: "'Inter', 'DM Sans', system-ui, sans-serif",
        fontSize: "14px"
    },
    topbar: {
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "8px 16px",
        backgroundColor: "#1a1d27",
        borderBottom: "1px solid #2a2d3a",
        flexShrink: 0
    },
    logo: {
        fontSize: "15px",
        fontWeight: 600,
        color: "#e2e8f0",
        letterSpacing: "0.02em",
        whiteSpace: "nowrap"
    },
    logoAccent: {
        color: "#0F6E56"
    },
    tabs: {
        display: "flex",
        gap: "4px",
        flex: 1
    },
    tab: {
        fontSize: "12px",
        padding: "5px 12px",
        borderRadius: "6px",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "transparent",
        background: "transparent",
        color: "#94a3b8",
        cursor: "pointer",
        transition: "all 0.15s",
        fontFamily: "inherit"
    },
    tabActive: {
        background: "#0f1117",
        borderColor: "#2a2d3a",
        color: "#e2e8f0",
        fontWeight: 500
    },
    statsStrip: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "1px",
        backgroundColor: "#2a2d3a",
        borderBottom: "1px solid #2a2d3a",
        flexShrink: 0
    },
    statBox: {
        backgroundColor: "#1a1d27",
        padding: "10px 14px"
    },
    statNumber: {
        fontSize: "18px",
        fontWeight: 500,
        lineHeight: 1.2
    },
    statLabel: {
        fontSize: "11px",
        color: "#64748b",
        marginTop: "2px"
    },
    body: {
        display: "flex",
        flex: 1,
        overflow: "hidden",
        minHeight: 0
    },
    sidebar: {
        width: "160px",
        backgroundColor: "#1a1d27",
        borderRight: "1px solid #2a2d3a",
        padding: "12px",
        flexShrink: 0,
        overflowY: "auto"
    },
    sidebarLabel: {
        fontSize: "10px",
        color: "#64748b",
        textTransform: "uppercase",
        letterSpacing: "0.07em",
        marginBottom: "5px",
        marginTop: "12px"
    },
    chip: {
        display: "block",
        width: "100%",
        textAlign: "left",
        fontSize: "11px",
        padding: "5px 8px",
        borderRadius: "5px",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "transparent",
        background: "transparent",
        color: "#94a3b8",
        cursor: "pointer",
        marginBottom: "2px",
        fontFamily: "inherit"
    },
    chipActive: {
        background: "rgba(15, 110, 86, 0.15)",
        color: "#0F6E56",
        fontWeight: 500
    },
    toggleBtn: {
        width: "100%",
        textAlign: "left",
        fontSize: "11px",
        padding: "5px 8px",
        borderRadius: "5px",
        border: "1px solid #2a2d3a",
        background: "#0f1117",
        color: "#e2e8f0",
        cursor: "pointer",
        marginTop: "3px",
        fontFamily: "inherit"
    },
    content: {
        flex: 1,
        overflow: "hidden",
        position: "relative",
        minHeight: 0
    }
};
var _c;
__turbopack_context__.k.register(_c, "ProjectPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_project_0326lp8._.js.map