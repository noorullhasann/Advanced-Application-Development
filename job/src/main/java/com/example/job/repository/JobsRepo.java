package com.example.job.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.job.model.JobsApply;

public interface JobsRepo extends JpaRepository<JobsApply,Integer>{
    Optional<JobsApply> findByEmail(String email);
}
