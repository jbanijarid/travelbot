package com.travelbot.dto;

import lombok.Getter;

@Getter
public class TravelRequest {

    private String destination; 
    private int duration;
    private String budget;
    private String type;
    
}
