package com.example.job.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.job.model.User;

public interface UserRepo extends JpaRepository<User, Integer>{
    Optional<User> findByEmail(String email);
    Optional<User> findByUsername(String username);
}
