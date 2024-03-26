package com.example.job.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.job.model.JobsApply;
import com.example.job.model.Payment;
import com.example.job.model.User;
import com.example.job.repository.PaymentRepo;


@Service
public class PaymentService {
    @Autowired
    private PaymentRepo paymentRepo;

    public Payment makePayment(User user, JobsApply job, String modeOfPayment) {
        Payment payment = new Payment();
        payment.setUser(user);
        payment.setPaid(false);
        payment.setModeOfPayment(modeOfPayment);
        return paymentRepo.save(payment);
    }

    public List<Payment> getAllPayments() {
        return paymentRepo.findAll();
    }

  
}