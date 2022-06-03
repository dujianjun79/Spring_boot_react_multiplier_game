package com.daniel.multiplier.service;

import com.daniel.multiplier.model.Challenge;
import com.daniel.multiplier.repository.ChallengeRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChallengeService {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Autowired
    ChallengeRepository challengeRepository;


    public List<Challenge> findallbyId(String username){

        String sql = "SELECT * FROM CHALLENGE WHERE USERNAME = ?";

        return jdbcTemplate.query(
                sql,
                new Object[]{username},
                (rs, rowNum) ->
                        new Challenge(
                                rs.getLong("id"),
                                rs.getString("username"),
                                rs.getInt("leftCalculator"),
                                rs.getInt("rightCalculator"),
                                rs.getInt("result")
                        )
        );

    }

    public Challenge createChallenge(Challenge challenge) {
        return challengeRepository.save(challenge);
    }
}
