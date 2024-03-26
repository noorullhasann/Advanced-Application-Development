package com.example.job.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;

import com.example.job.dto.JobsDto;
import com.example.job.model.JobsApply;
import com.example.job.repository.JobsRepo;

@Service
public class JobsService {
    
    @Autowired
    private JobsRepo jobsRepo;

    //GetJob
    public List<JobsApply> getAllJobs()
    {
        return jobsRepo.findAll();
    }

    //Updatedetails
    public JobsApply UpdateJobs(@NonNull String email, JobsDto jobsDto)
    {
        return jobsRepo.findByEmail(email)
                .map(existingJob -> {
                    existingJob.setApplicantName(jobsDto.getApplicantName());
                    existingJob.setContactNumber(jobsDto.getContactNumber());
                    existingJob.setEmail(jobsDto.getEmail());
                    existingJob.setAmount(jobsDto.getAmount());
                    existingJob.setJobTitle(jobsDto.getJobTitle());
                    return jobsRepo.save(existingJob);
                })
                .orElseThrow(() -> new RuntimeException("User not found with this email: " + email));
    }

    //add the Jobs
    public JobsApply addDetails(@NonNull JobsApply jobsApply)
    {
        return jobsRepo.save(jobsApply);
    }

    //DeleteJobs
    public void cancelJobs(@NonNull Integer id)
    {
        jobsRepo.deleteById(id);
    }

}
