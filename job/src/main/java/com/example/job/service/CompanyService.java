package com.example.job.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;

import com.example.job.dto.CompanyDto;
import com.example.job.model.Company;
import com.example.job.repository.CompanyRepo;

@Service
public class CompanyService {
    @Autowired
    private CompanyRepo companyRepo;

    // add company
    public Company addCompany(@NonNull Company companyName) {
        return companyRepo.save(companyName);
    }

    // getCcompany_Byname
    public Optional<Company> getCompanyByDepartment(String companyName) {
        return companyRepo.findByCompanyName(companyName);
    }

    // get_AllCompany
    public List<Company> getAll() {
        return companyRepo.findAll();
    }

    // updateCompany
    public Company updateCompany(@NonNull String companyName, CompanyDto companyDto) {
        return companyRepo.findByCompanyName(companyName)
                .map(m -> {
                    m.setSalary(companyDto.getSalary());
                    m.setLocation(companyDto.getLocation());
                    m.setDescription(companyDto.getDescription());
                    return companyRepo.save(m);
                })
                .orElseThrow(() -> new RuntimeException("Company not found: " + companyDto));
    }

    // delete_CompanyById
    public void deleteCompanyById(int id) {
        companyRepo.deleteById(id);
    }
}
