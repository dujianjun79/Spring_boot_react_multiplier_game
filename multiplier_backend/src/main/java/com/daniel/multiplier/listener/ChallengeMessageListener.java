package com.daniel.multiplier.listener;

import com.daniel.multiplier.model.Challenge;
import com.daniel.multiplier.repository.ChallengeRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Component;

@Component
public class ChallengeMessageListener {

    private ChallengeRepository challengeRepository;
    private ObjectMapper objectMapper;

    private static final Logger log = LogManager.getLogger(ChallengeMessageListener.class);

    public ChallengeMessageListener(ChallengeRepository challengeRepository, ObjectMapper objectMapper) {
        this.challengeRepository = challengeRepository;
        this.objectMapper = objectMapper;
    }

    public void receiveMessage(String challenge) {
        log.info("Received <" + challenge + ">");
        Challenge Obj = null;
        try {
            Obj = objectMapper.readValue(challenge, Challenge.class);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }

        challengeRepository.save(Obj);
        log.info("Message processed...");
    }
}
