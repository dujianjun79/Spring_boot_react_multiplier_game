package com.daniel.multiplier.repository;

import com.daniel.multiplier.model.Challenge;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChallengeRepository extends JpaRepository<Challenge, Long> {
    @Query(value = "SELECT * FROM CHALLENGE WHERE USERNAME = ?1 ORDER BY CURRENTTIME DESC LIMIT 5",
            nativeQuery = true)
    List<Challenge> findUserByName(String name);




}
