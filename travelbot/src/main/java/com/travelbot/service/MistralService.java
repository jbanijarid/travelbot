package com.travelbot.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.travelbot.dto.MistralResponse;

import org.springframework.http.*;

import java.util.*;

@Service
public class MistralService {

    @Value("${mistral.api.key}")
    private String apiKey;

    private final RestTemplate restTemplate = new RestTemplate();

    private static final String URL = "https://api.mistral.ai/v1/chat/completions";

    public String getAIResponse(String userMessage) {

        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(apiKey);
        headers.setContentType(MediaType.APPLICATION_JSON);

        List<Map<String, String>> messages = List.of(
                Map.of(
                        "role", "system",
                        "content", "You are a travel specialist assistant. Only answer travel-related questions."
                ),
                Map.of(
                        "role", "user",
                        "content", userMessage
                )
        );

        Map<String, Object> request = new HashMap<>();
        request.put("model", "mistral-small-latest");
        request.put("messages", messages);

        HttpEntity<Map<String, Object>> entity = new HttpEntity<>(request, headers);

        try {
            ResponseEntity<MistralResponse> response =
                    restTemplate.postForEntity(URL, entity, MistralResponse.class);

            return extractResponse(response);

        } catch (Exception e) {
            return handleError(e);
        }
    }

    // Extract the AI's response from the API
    private String extractResponse(ResponseEntity<MistralResponse> response) {

        MistralResponse body = response.getBody();
        if (body == null || body.getChoices().isEmpty()) {
            return "Error: AI gave an empty response";
        }
        return body.getChoices().get(0).getMessage().getContent();
    }

    private String handleError(Exception e) {

        if (e.getMessage().contains("429")) {
            return "Error: Too many requests, please wait a few seconds ⏳";
        }

        return "Error: " + e.getMessage();
    }
}