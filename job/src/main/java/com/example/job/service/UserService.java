package com.example.job.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;

import com.example.job.dto.Userdto;
import com.example.job.model.User;
import com.example.job.repository.UserRepo;


@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;

    // newuser
    public User createUser(@NonNull User user) {
        user.setPassword(user.getPassword());
        return userRepo.save(user);
    }

    // getuser
    public Optional<User> getUserByEmail(String email) {
        return userRepo.findByEmail(email);
    }

    // getUsers
    public List<User> getAllUsers() {
        return userRepo.findAll();
    }

    // updateUser
    public User updateUser(@NonNull String email, Userdto userDto) {
        return userRepo.findByEmail(email)
                .map(existingUser -> {
                    existingUser.setUsername(userDto.getUsername());
                    existingUser.setEmail(userDto.getEmail());
                    existingUser.setPassword(userDto.getPassword());
                    return userRepo.save(existingUser);

                })
                .orElseThrow(() -> new RuntimeException("User not found with this email: " + email));
    }

    // deleteuser
    public void removeUser(@NonNull Integer id) {
        userRepo.deleteById(id);
    }
}