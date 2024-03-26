package com.example.job.dto;

import com.example.job.model.enumerate.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Userdto {
    private int id;
    private String username;
    private String email;
    private String password;
    private Role roles;

}
