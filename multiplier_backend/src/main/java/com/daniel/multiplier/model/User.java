package com.daniel.multiplier.model;

import lombok.*;

import javax.persistence.*;

@Data
@Entity
@Table(name="user")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    private String username;

    private String sex;

    private int age;

    private String email;

    private String password;
}
