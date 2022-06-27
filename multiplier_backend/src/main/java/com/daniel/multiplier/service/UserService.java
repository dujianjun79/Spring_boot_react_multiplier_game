package com.daniel.multiplier.service;

import com.daniel.multiplier.model.User;
import com.daniel.multiplier.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public User createUser(User user){
        return userRepository.save(user);
    }

    public boolean isUsernameExist(String name){
        List<User> users = userRepository.findUserByName(name);
        if (users.size()==0)
            return false;
        else
            return true;
    }

    public boolean isEmailExist(String email){
        List<User> users = userRepository.findUserByEmail(email);
        if (users.size()==0)
            return false;
        else
            return true;
    }
}
