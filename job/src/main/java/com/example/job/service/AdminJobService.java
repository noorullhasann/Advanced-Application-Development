package com.example.job.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;

import com.example.job.dto.AdminJobDto;
import com.example.job.model.AdminJob;
import com.example.job.repository.AdminJobsRepo;

@Service
public class AdminJobService {
    @Autowired
    private AdminJobsRepo adminJobsRepo;

    // add Jobs
    public AdminJob addJobs(@NonNull AdminJob department) {
        return adminJobsRepo.save(department);
    }

    // getJobs_Byname
    public Optional<AdminJob> getJobsByDepartment(String department) {
        return adminJobsRepo.findByDepartment(department);
    }

    // get_AllJobs
    public List<AdminJob> getAll() {
        return adminJobsRepo.findAll();
    }

    // updateJobs
    public AdminJob updateJobs(@NonNull String department, AdminJobDto jobDto) {
        return adminJobsRepo.findByDepartment(department)
                .map(m -> {
                    m.setQualification(jobDto.getQualification());
                    m.setLocation(jobDto.getLocation());
                    m.setResponsibility(jobDto.getResponsibility());
                    m.setExperiance(jobDto.getExperiance());
                    m.setFee(jobDto.getFee());
                    return adminJobsRepo.save(m);
                })
                .orElseThrow(() -> new RuntimeException("Job not found: " + jobDto));
    }

    // delete_JobsByName
    public void deleteJobsByDepatment(@NonNull String department) {
        adminJobsRepo.deleteByDepartment(department);
    }

    // delete_JobsById
    public void deleteJobsById(int id) {
        adminJobsRepo.deleteById(id);
    }

}
