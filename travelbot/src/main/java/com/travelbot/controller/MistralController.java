package com.travelbot.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.travelbot.dto.TravelPlan;
import com.travelbot.dto.TravelRequest;
import com.travelbot.service.MistralService;

@RestController
@RequestMapping("/api/mistralai")
@CrossOrigin
public class MistralController {

    private final MistralService MistralService;

    public MistralController(MistralService chatClient) {
        this.MistralService = chatClient;
    }

    @PostMapping("/generate")
    public TravelPlan getTravelPlan(@RequestBody TravelRequest request) {
                System.out.println("Received request for travel plan to: " + request.destination());
                TravelPlan plan = MistralService.generateCustomItinerary(request);
                System.out.println("Generated travel plan: " + plan);
                return plan;
    }
}
