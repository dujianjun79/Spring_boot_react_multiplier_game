package com.daniel.multiplier.model;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@Entity
@Table(name="Challenge")
@NoArgsConstructor
@ToString
public class Challenge {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="id")
    private  Long id;

    @Column(name="username")
    private String username;

    @Column(name="leftcalculator")
    private int leftCalculator;
    
    @Column(name="rightcalculator")
    private int rightCalculator;

    @Column(name="result")
    private int result;


}
