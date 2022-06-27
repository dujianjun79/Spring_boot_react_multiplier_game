package com.daniel.multiplier.controller;

import com.daniel.multiplier.model.Challenge;
import com.daniel.multiplier.service.RabbitMQService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class RabbitMQController {

    @Autowired
    private RabbitMQService rabbitMQService;

    @PostMapping("/saveRabbitMQ")
    public Challenge save(@RequestBody Challenge challenge){
        rabbitMQService.sendMessage(challenge);
        return challenge;
    }
}
