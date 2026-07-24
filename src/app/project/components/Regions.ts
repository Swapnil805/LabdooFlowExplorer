export type RegionId = "all" | "europe" | "africa" | "asia" | "latam";

/*
 * Countries not listed here (US, Australia, Aland Islands, etc.) don't belong
 * to any of the four filter chips, so they stay visible under "All regions"
 * and get hidden under any specific region - there's simply no chip for them.
 */
const REGION_COUNTRIES: Record<Exclude<RegionId, "all">, string[]> = {
  europe: [
    "Germany", "Spain", "France", "United Kingdom", "Netherlands", "Belgium",
    "Austria", "Italy", "Switzerland", "Sweden", "Ireland", "Luxembourg",
    "Czech Republic", "Poland", "Ukraine", "Romania", "Bulgaria", "Albania",
    "Bosnia and Herzegovina", "Croatia", "Greece", "Hungary", "Belarus",
    "Georgia", "Armenia", "Russia", "Denmark", "Norway", "Finland",
    "Portugal", "Macedonia",
  ],
  africa: [
    "Uganda", "Ghana", "Tanzania", "Kenya", "Cameroon", "Nigeria",
    "Congo (Kinshasa)", "Congo (Brazzaville)", "South Africa", "Togo",
    "Namibia", "Senegal", "Zambia", "Zimbabwe", "Malawi", "Rwanda",
    "Ethiopia", "Mozambique", "Madagascar", "Sudan", "Swaziland",
    "Ivory Coast", "Benin", "Egypt", "Morocco", "Tunisia", "Algeria",
    "Libya", "Somalia", "Burundi", "Cape Verde", "Gabon", "Gambia",
    "Liberia", "Mauritania", "Sierra Leone", "Burkina Faso", "Mali",
    "Guinea", "Niger", "Chad", "Angola", "Western Sahara",
  ],
  asia: [
    "India", "Nepal", "Bangladesh", "Philippines", "Pakistan", "Myanmar",
    "Cambodia", "Laos", "Vietnam", "Indonesia", "Thailand", "Sri Lanka",
    "Afghanistan", "Syria", "Iraq", "Iran", "Jordan", "Palestine",
    "Lebanon", "Yemen", "China", "Mongolia", "Kazakhstan", "Israel",
    "Hong Kong S.A.R., China", "Turkey",
  ],
  latam: [
    "Colombia", "Bolivia", "Peru", "Ecuador", "Guatemala", "Honduras",
    "Nicaragua", "El Salvador", "Haiti", "Cuba", "Venezuela", "Paraguay",
    "Brazil", "Argentina", "Chile", "Dominican Republic", "Costa Rica",
    "Panama", "Mexico",
  ],
};

// returns true if the country is in the selected region, or if "all" is selected.
// unmapped countries (no chip for them) return false under any specific region filter.
export function isInRegion(country: string, region: RegionId): boolean {
  if (region === "all") return true;
  return REGION_COUNTRIES[region].includes(country);
}

export const REGION_LABELS: Record<RegionId, string> = {
  all: "All regions",
  europe: "Europe",
  africa: "Sub-Saharan Africa",
  asia: "Asia Pacific",
  latam: "Latin America",
};