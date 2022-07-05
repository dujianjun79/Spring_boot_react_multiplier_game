package com.daniel.multiplier.repository;

import com.daniel.multiplier.model.Challenge;
import com.daniel.multiplier.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {

    @Query(value = "SELECT * FROM USER WHERE USERNAME = ?1",
            nativeQuery = true)
    List<User> findUserByName(String name);

    @Query(value = "SELECT * FROM USER WHERE EMAIL = ?1",
            nativeQuery = true)
    List<User> findUserByEmail(String email);

    Optional<User> findByUsername(String username);
}
