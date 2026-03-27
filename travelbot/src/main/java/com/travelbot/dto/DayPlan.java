package com.travelbot.dto;

public record DayPlan(
    int dayNumber,
    String morning,
    String afternoon,
    String evening
) {}