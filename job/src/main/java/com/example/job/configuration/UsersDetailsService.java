package com.example.job.configuration;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import com.example.job.model.User;
import com.example.job.repository.UserRepo;


@Component
public class UsersDetailsService implements UserDetailsService {

    @Autowired
    private UserRepo repo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> userInfo = repo.findByUsername(username);
        return userInfo.map(UsersDetails::new)
                .orElseThrow(() -> new UsernameNotFoundException("user not found " + username));

    }
}
