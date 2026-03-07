package com.travelbot.controller;

import com.travelbot.dto.ChatRequest;
import com.travelbot.dto.ChatResponse;
import com.travelbot.service.ChatService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/chat")
@CrossOrigin
public class ChatController {

    private final ChatService chatService;

    public ChatController(ChatService chatService) {
        this.chatService = chatService;
    }

    @PostMapping
    public ChatResponse chat(@RequestBody ChatRequest request) {
        String aiResponse = chatService.getAIResponse(request.getMessage());
        return new ChatResponse(aiResponse);
    }
    
}
