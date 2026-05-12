import type { TravelRequest, TravelPlan } from "../types/types";

const API_BASE_URL = "http://localhost:8080/api/mistralai";

export const travelService = {
  async generateItinerary(formData: TravelRequest): Promise<TravelPlan> {
    const response = await fetch(`${API_BASE_URL}/generate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `Erreur serveur (${response.status})`);
    }

    return response.json();
  },
};