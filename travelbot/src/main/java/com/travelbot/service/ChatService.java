package com.travelbot.service;

import org.springframework.stereotype.Service;

@Service
public class ChatService {

    private final MistralService mistralService;

    public ChatService(MistralService mistralService) {
        this.mistralService = mistralService;
    }

    public String getAIResponse(String message) {

        return mistralService.getAIResponse(message);

    }
}
