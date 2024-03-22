package com.example.job.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.job.dto.Userdto;
import com.example.job.model.User;
import com.example.job.service.UserService;

import io.micrometer.common.lang.NonNull;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;



@RestController
@RequestMapping("/api/user")
public class UserController {
    
    @Autowired
    public UserService userService;

    @PostMapping("/createUser")
    public ResponseEntity<User> createUser(@NonNull @RequestBody User user) {
       User createdUser=userService.createUser(user);
        return new ResponseEntity<>(createdUser, HttpStatus.CREATED);
    }
    

    @GetMapping("readUser/{email}")
    public ResponseEntity<?> getUserByEmail(@PathVariable String email) {
        Optional<User> user = userService.getUserByEmail(email);
        return user.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    
    @GetMapping("/readUsers")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.getAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @PutMapping("updateUser/{email}")
    public ResponseEntity<User> updateUser(@NonNull @PathVariable String email,
            @RequestBody Userdto userDto) {
        User updated = userService.updateUser(email, userDto);
        return new ResponseEntity<>(updated, HttpStatus.OK);
    }

    @DeleteMapping("deleteUser/{userId}")
    public ResponseEntity<Void> removeUser(@NonNull @PathVariable Integer userId) {
        userService.removeUser(userId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}