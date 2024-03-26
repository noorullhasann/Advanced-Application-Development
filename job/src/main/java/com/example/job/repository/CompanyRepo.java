package com.example.job.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.job.model.Company;

public interface CompanyRepo extends JpaRepository<Company,Integer>{
    Optional<Company> findByCompanyName(String companyName);
}
