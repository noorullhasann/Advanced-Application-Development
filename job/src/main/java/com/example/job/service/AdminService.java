// package com.example.job.service;
// import java.util.List;
// import java.util.Optional;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.lang.NonNull;
// import org.springframework.security.crypto.password.PasswordEncoder;
// import org.springframework.stereotype.Service;

// import com.example.job.dto.AdminDto;
// import com.example.job.model.Admin;
// import com.example.job.repository.AdminRepo;

// @Service
// public class AdminService {

//     @Autowired 
//     public AdminRepo adminrepo;

//      @Autowired
//     private PasswordEncoder pass;

//     //signup_admin
//     public  Admin createadmin(@NonNull Admin admin)
//     {   
//         admin.setPassword(pass.encode(admin.getPassword()));
//           return adminrepo.save(admin);

//     }
//     //retrive_adminDetails
//     public List<Admin> getAlladmin()
//     {
//         return adminrepo.findAll();
//     }

//     //retive_adminById
//     @SuppressWarnings("null")
//     public Optional<Admin> findById(Integer id)
//     {
//         return adminrepo.findById(id);
//     }
//     //retrive_adminByEmail
//     public Optional<Admin> findByEmail(String email)
//     {
//         return adminrepo.findByEmail(email);
//     }
//     //Update_adminDetails(only the fields given in dto)
//     public Admin updateadminDetails(@NonNull String email, AdminDto updatedadmin)
//     {
//         return adminrepo.findByEmail(email)
//              .map(e->{
//                 e.setEmail(updatedadmin.getEmail());
//                 e.setPassword(updatedadmin.getPassword());
//                 return adminrepo.save(e);
//              })
//              .orElseThrow(()-> new RuntimeException("admin not found"));
//     }
//     //deleteadmin 
//     public void deleteadmin(int id){
//             adminrepo.deleteById(id);
//     }
    

    
// }

package com.example.job.service;

/**
 * AdminService
 */
public class AdminService {

    
}