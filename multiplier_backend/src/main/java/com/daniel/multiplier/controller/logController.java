package com.daniel.multiplier.controller;

import com.daniel.multiplier.model.User;
import com.daniel.multiplier.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class logController {

    @Autowired
    UserService userService;

    @PostMapping("/checkUsername")
    public boolean checkUsername(@RequestBody User user){
        return userService.isUsernameExist(user.getUsername());
    }

    @PostMapping("/checkEmail")
    public boolean checkEmail(@RequestBody User user){
        return userService.isEmailExist(user.getEmail());
    }

    @PostMapping("/saveUser")
    public boolean saveUser(@RequestBody User user){
        System.out.println(user);
        userService.createUser(user);
        return true;
    }


}
