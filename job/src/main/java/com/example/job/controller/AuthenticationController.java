package com.example.job.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.job.dto.Userdto;
import com.example.job.model.User;
import com.example.job.repository.UserRepo;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthenticationController {
    @Autowired
	private UserRepo userRegisterRepository;
    private final com.example.job.service.AuthService service;
	@PostMapping("/register")
	 public ResponseEntity<String> register(
		      @RequestBody Userdto request
		  ) {
		service.register(request);
		    return ResponseEntity.ok("Registered Successfully");
		  }
	@GetMapping("/getregister")
	public List<User> getregister()
	{
		return userRegisterRepository.findAll();
		
	}

		  @PostMapping("/authentication")
		  public ResponseEntity<com.example.job.dto.AuthResponse> authenticate(@RequestBody com.example.job.dto.AuthRequest request)
		  {
			return ResponseEntity.ok(service.authenticate(request));
			  
		  }
    
}