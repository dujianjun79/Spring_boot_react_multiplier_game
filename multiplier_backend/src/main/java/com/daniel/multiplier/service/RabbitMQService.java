package com.daniel.multiplier.service;

import com.daniel.multiplier.configure.RabbitMQConfig;
import com.daniel.multiplier.listener.ChallengeMessageListener;
import com.daniel.multiplier.model.Challenge;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.stereotype.Service;

@Service
public class RabbitMQService {
    private static final Logger log = LogManager.getLogger(RabbitMQService.class);

    private RabbitTemplate rabbitTemplate;

    private ObjectMapper objectMapper;

    public RabbitMQService(RabbitTemplate rabbitTemplate, ObjectMapper objectMapper) {
        this.rabbitTemplate = rabbitTemplate;
        this.objectMapper = objectMapper;
    }

    public void sendMessage(Challenge challenge) {
        log.info("Sending the message to queue");
        try {
            rabbitTemplate.convertAndSend(RabbitMQConfig.MESSAGE_QUEUE,objectMapper.writeValueAsString(challenge));
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        log.info("sending message completed successfully");
    }

}
