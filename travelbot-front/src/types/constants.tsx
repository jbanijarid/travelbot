export const DESTINATIONS: string[] = [
  "Bali",
  "Santorini",
  "Miami",
  "Barcelone",
  "Marrakech",
  "Maldives",
  "Nice",
  "Bordeaux",
];

export const BUDGET_OPTIONS = [
  { value: "low", label: "low"}, 
  { value: "balanced", label: "Balanced"},
  { value: "luxury", label: "Luxury"},
]

export const TRAVEL_TYPE = [
  { value: "adventure", label: "Adventure"},
  { value: "relaxation", label: "Relaxing"},
  { value: "cultural", label: "Culture"},
  { value: "foodie", label: "Food & Wine"},
  { value: "nature", label: "Nature"},
  { value: "romantic",   label: "Romantic" },
]

export const DEFAULT_FORM = {
  destination: "",
  days: 5,
  budgetLevel: "Balanced",
  travelType: "Relaxing",
} as const;