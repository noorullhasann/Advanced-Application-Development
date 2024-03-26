package com.example.job.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.job.dto.CompanyDto;
import com.example.job.model.Company;
import com.example.job.service.CompanyService;

@RestController
@RequestMapping("/admin/company_add")
public class CompanyController {

    @Autowired
    private CompanyService companyService;

    @PostMapping("/createCompany")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Company> createCompany(@NonNull @RequestBody Company company) {
        Company createdCompany = companyService.addCompany(company);
        return new ResponseEntity<>(createdCompany, HttpStatus.CREATED);
    }

    @GetMapping("readCompany/{companyName}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<?> getCompany(@PathVariable String companyName) {
        Optional<Company> company = companyService.getCompanyByDepartment(companyName);
        return company.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/readCompany")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<List<Company>> getAllCompany() {
        List<Company> company = companyService.getAll();
        return new ResponseEntity<>(company, HttpStatus.OK);
    }

    @PutMapping("updateCompany/{companyName}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Company> updateCompany(@NonNull @PathVariable String companyName,
            @RequestBody CompanyDto companyDto) {
                Company updated = companyService.updateCompany(companyName, companyDto);
        return new ResponseEntity<>(updated, HttpStatus.OK);
    }

    @DeleteMapping("deleteCompany/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Void> deleteCompany(@PathVariable int id) {
        companyService.deleteCompanyById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


}
