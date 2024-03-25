package com.example.job.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "users_table")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class User {

    @Id
    private int id;
    private String username;
    private String email;
    private String password;
    private String confirmpassword;
    private String roles;
}