package com.daniel.multiplier.model;

import org.springframework.stereotype.Service;

@Service
public class Calculator {

    public Integer multiplier(int a, int b){
        return a*b;
    }

    public Integer divide(int a, int b){
        return a/b;
    }
}
