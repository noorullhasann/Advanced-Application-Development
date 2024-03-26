package com.example.job.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.example.job.dto.PaymentDto;
import com.example.job.model.JobsApply;
import com.example.job.model.Payment;
import com.example.job.model.User;
import com.example.job.service.PaymentService;

import java.util.List;

@RestController
@RequestMapping("/user/payment")
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @PostMapping("/makePayment")
    @PreAuthorize("hasAuthority('USER')")
    public ResponseEntity<Payment> makePayment(@RequestBody PaymentDto paymentDto) {
        if (paymentDto.getModeOfPayment() == null || paymentDto.getModeOfPayment().isEmpty()) {
            return ResponseEntity.badRequest().build();
        }

        User user = new User(); 
        JobsApply jobs = new JobsApply(); 

        if (user == null || jobs == null) {
            return ResponseEntity.badRequest().build();
        }

        Payment payment = paymentService.makePayment(user, jobs, paymentDto.getModeOfPayment());
        return ResponseEntity.ok(payment);
    }

    @GetMapping("/getAllPayments")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<List<Payment>> getAllPayments() {
        List<Payment> payments = paymentService.getAllPayments();
        return ResponseEntity.ok(payments);
    }

    // Other controller methods as per your requirements
}