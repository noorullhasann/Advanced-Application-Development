// package com.example.job.configuration;

// import java.util.Arrays;
// import java.util.Collection;
// import java.util.List;
// import java.util.stream.Collectors;

// import org.springframework.security.core.GrantedAuthority;
// import org.springframework.security.core.authority.SimpleGrantedAuthority;
// import org.springframework.security.core.userdetails.UserDetails;

// import com.example.job.model.User;

// public class UsersDetails  implements UserDetails{
//     private String email;
//     private String password;
//     private List<GrantedAuthority> authorities;

//     public UsersDetails(User user) {
//         email = user.getEmail();
//         password = user.getPassword();
//         authorities = Arrays.stream(user.getRoles().split(","))
//                 .map(SimpleGrantedAuthority::new)
//                 .collect(Collectors.toList());
//     }

//     @Override
//     public Collection<? extends GrantedAuthority> getAuthorities() {
//         return authorities;
//     }

//     @Override
//     public String getPassword() {
//         return password;
//     }

//     @Override
//     public String getUsername() {
//         return email;
//     }

//     @Override
//     public boolean isAccountNonExpired() {
//         return true;
//     }

//     @Override
//     public boolean isAccountNonLocked() {
//         return true;
//     }

//     @Override
//     public boolean isCredentialsNonExpired() {
//         return true;
//     }

//     @Override
//     public boolean isEnabled() {
//         return true;
//     }
// }

package com.example.job.configuration;


import java.util.Collection;
import java.util.Collections;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.example.job.model.User;

public class UsersDetails implements UserDetails {
    private String username;
    private String password;
    private Collection<? extends GrantedAuthority> authorities;

    public UsersDetails(User userInfo) {
        username = userInfo.getUsername();
        password = userInfo.getPassword();
        authorities = Collections.singleton(new SimpleGrantedAuthority(userInfo.getRoles().name()));
        System.out.println(authorities);
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}