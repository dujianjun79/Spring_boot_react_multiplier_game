package com.daniel.multiplier.controller;

import com.daniel.multiplier.model.Challenge;
import com.daniel.multiplier.service.ChallengeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000", methods = {RequestMethod.GET, RequestMethod.POST} )
public class calculatorController {
    @Autowired
    ChallengeService challengeService;

    @GetMapping("{name}")
    public List<Challenge> saveResult(@PathVariable(name="name") String name){
        return challengeService.findallbyName(name);
    }

    @PostMapping("/save")
    public  Challenge save(@RequestBody Challenge challenge){

        return challengeService.createChallenge(challenge);
    }
}
