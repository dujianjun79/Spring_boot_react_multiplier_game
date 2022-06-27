package com.daniel.multiplier.model;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.hibernate.type.LocalDateTimeType;
import org.hibernate.type.TimestampType;

import java.util.Date;

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

    @Basic(optional = false)
    @Column(name = "currenttime", insertable = false, updatable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date currentTime;

    public Challenge(String username, int leftCalculator, int rightCalculator, int result, Date currentTime) {
        this.username = username;
        this.leftCalculator = leftCalculator;
        this.rightCalculator = rightCalculator;
        this.result = result;
        this.currentTime = currentTime;
    }
}
