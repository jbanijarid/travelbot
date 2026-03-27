package com.travelbot.dto;


public record TravelRequest(
    String destination,
    int days,
    String budgetLevel, 
    String travelType){}