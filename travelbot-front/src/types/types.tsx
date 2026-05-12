export interface DayPlan{
    dayNumber: number;
    morning: string;
    afternoon: string;
    evening: string;
}

export interface TravelPlan {
    destination: string;
    activities: DayPlan[];
    budgetEstimate: number;
    tips: string[];
}

export interface TravelRequest {
    destination: string;
    days: number;
    budgetLevel: string;
    travelType: string;
}

export type Step = "form" | "loading" | "result";
