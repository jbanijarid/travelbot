package com.travelbot.dto;

import java.util.List;

public record TravelPlan(String destination, 
            List<DayPlan> activities,
            int budgetEstimate, 
            List<String> tips) {}
