package com.example.job.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.job.model.AdminJob;



public interface AdminJobsRepo extends JpaRepository<AdminJob,Integer>{

    Optional<AdminJob> findByDepartment(String department);

    void deleteByDepartment(String department);
}
