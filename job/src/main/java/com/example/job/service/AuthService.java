package com.example.job.service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.job.dto.AuthRequest;
import com.example.job.dto.AuthResponse;
import com.example.job.dto.Userdto;
import com.example.job.model.User;
import com.example.job.model.enumerate.Role;
import com.example.job.repository.UserRepo;

import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
public class AuthService {
	@Autowired
    private final UserRepo userRegisterRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

 
    public AuthResponse register(Userdto request) {
    
		Role role;
		if (request.getRoles() != null) {
			role = request.getRoles();
		} else {
			role = Role.USER;
		}
        User user = User.builder()
                .id(request.getId())
                .username(request.getUsername())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .roles(role)
                .build();

        userRegisterRepository.save(user);

        String jwtToken = jwtService.generateToken(request.getUsername());

        return AuthResponse.builder()
                .token(jwtToken)
                .build();
    }

    public AuthResponse authenticate(AuthRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getUsername(),
                        request.getPassword()
                )
        );

        String jwtToken = jwtService.generateToken(request.getUsername());

        return AuthResponse.builder()
                .token(jwtToken)
                .build();
    }
}
