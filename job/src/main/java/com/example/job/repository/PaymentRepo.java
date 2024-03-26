package com.example.job.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.job.model.Payment;

public interface PaymentRepo extends JpaRepository<Payment,Long>{
    
}
