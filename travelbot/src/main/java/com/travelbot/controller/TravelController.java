package com.travelbot.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.travelbot.dto.TravelRequest;
import com.travelbot.service.MistralService;

import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api/travel")
public class TravelController {
    
    private final MistralService mistralService;

    public TravelController(MistralService mistralService) {
        this.mistralService = mistralService;
    }

    @PostMapping("/generate")
    public String generateTravel(@RequestBody TravelRequest request) {

        System.out.println("Received travel request: " + request.getDestination() + ", " + request.getDuration() + ", " + request.getBudget() + ", " + request.getType());
        String prompt = String.format(
            """
            You are a professional travel assistant.

            Create a detailed travel itinerary based on the following information:
            - Destination: %s
            - Duration: %d days
            - Budget: %s
            - Travel type: %s

            The itinerary should include a day-by-day plan.

            IMPORTANT:
            You must respond ONLY in valid JSON format.

            Use exactly this structure:
            {
              "destination": "...",
              "duration": ...,
              "itinerary": "...",
              "tips": "...",
              "budgetEstimate": "..."
            }

            Do not include any text outside the JSON.
            """,
            request.getDestination(),
            request.getDuration(),
            request.getBudget(),
            request.getType()
        );
        return mistralService.getAIResponse(prompt);
    }
}
