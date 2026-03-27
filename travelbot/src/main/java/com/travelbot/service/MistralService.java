package com.travelbot.service;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.stereotype.Service;

import com.travelbot.dto.TravelPlan;
import com.travelbot.dto.TravelRequest;

@Service
public class MistralService {
    private final ChatClient chatClient;
    public MistralService(ChatClient.Builder builder) {
        this.chatClient = builder.build();
    }

    public TravelPlan generateCustomItinerary(TravelRequest request) {
        return chatClient.prompt()
                .system("You are an expert travel agent. You only answer travel-related questions. " +
                        "If the user asks about anything else, politely decline.")
                .user(u -> u.text("""
                    Create a {days}-day itinerary for {destination}.
                    The budget is {budget} and the travel style is {type}.
                    Detail each day with morning, afternoon, and evening activities.
                    """)
                    .param("days", request.days())
                    .param("destination", request.destination())
                    .param("budget", request.budgetLevel())
                    .param("type", request.travelType()))
                .call()
                .entity(TravelPlan.class);
    }
}
