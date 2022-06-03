package com.daniel.multiplier.controller;

import com.daniel.multiplier.model.Challenge;
import com.daniel.multiplier.service.ChallengeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class calculatorController {
    @Autowired
    ChallengeService challengeService;

    @GetMapping("{name}")
    public List<Challenge> saveResult(@PathVariable(name="name") String name){
        return challengeService.findallbyId(name);
    }

    @PostMapping("/save")
    public Challenge save(@RequestBody Challenge challenge){

        return challengeService.createChallenge(challenge);
    }
}
