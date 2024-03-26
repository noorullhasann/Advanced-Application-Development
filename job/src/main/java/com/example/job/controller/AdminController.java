// package com.example.job.controller;
// import java.util.List;
// import java.util.Optional;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.security.access.prepost.PreAuthorize;
// import org.springframework.web.bind.annotation.RestController;

// import com.example.job.service.AdminService;
// import com.example.job.dto.AdminDto;
// import com.example.job.model.Admin;

// import io.micrometer.common.lang.NonNull;
// import lombok.RequiredArgsConstructor;

// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RequestParam;
// import org.springframework.web.bind.annotation.DeleteMapping;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.PutMapping;
// import org.springframework.web.bind.annotation.RequestBody;


// @RestController
// @RequestMapping("/admin")
// @RequiredArgsConstructor
// public class AdminController {

//     @Autowired
//     public AdminService AdminService;

//     @PostMapping("/addAdmin")
  
//     public Admin createAdminModel(@RequestBody Admin Admin) {
//         return AdminService.createadmin(Admin);
//         }
//         @GetMapping("/getAll")
//         @PreAuthorize("hasAuthority('ADMIN')")
//     public List<Admin> getAll() {
//         return AdminService.getAlladmin();
//     }
//     @GetMapping("/getAdminbyId/{id}")
//     @PreAuthorize("hasAuthority('ADMIN')")
//     public Optional<Admin> getAdminById(int id)
//     {
//         return AdminService.findById(id);
//     }
//     public String getMethodName(@RequestParam String param) {
//         return new String();
//     }
    
//     @GetMapping("/getAdminbyemail/{email}")
//     @PreAuthorize("hasAuthority('ADMIN')")
//     public ResponseEntity<Admin> getAdminByEmail(@PathVariable String email) {
//         Optional<Admin> AdminModel = AdminService.findByEmail(email);
//         return AdminModel.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
//     }
//     @PutMapping("updateAdmin/{email}")
//     @PreAuthorize("hasAuthority('ADMIN')")
//     public ResponseEntity<Admin> updateAdmin(@NonNull @PathVariable String email,
//             @RequestBody AdminDto AdminDto) {
//         Admin updated = AdminService.updateadminDetails(email, AdminDto);
//         return new ResponseEntity<>(updated, HttpStatus.OK);
//     }
//     @DeleteMapping("deleteAdmin/{AdminId}")
//     @PreAuthorize("hasAuthority('ADMIN')")
//     public ResponseEntity<Void> removeAdmin(@NonNull @PathVariable int AdminId) {
//         AdminService.deleteadmin(AdminId);
//         return new ResponseEntity<>(HttpStatus.NO_CONTENT);
// }


// }

package com.example.job.controller;

/**
 * AdminController
 */
public class AdminController {

    
}
