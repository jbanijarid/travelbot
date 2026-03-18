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
            "Generate a travel itinerary for a trip" + 
            "to %s lasting %s " +
            "with a budget of %s. " +
            "The trip type is %s.",
            request.getDestination(),
            request.getDuration(),
            request.getBudget(),
            request.getType()
        );
        return mistralService.getAIResponse(prompt);
    }
}
