package com.example.job.controller;

import java.util.List;

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

import com.example.job.dto.JobsDto;
import com.example.job.model.JobsApply;
import com.example.job.service.JobsService;

@RestController
@RequestMapping("/user/jobs")
public class JobsController {
    
    @Autowired
    public JobsService jobsService;

    @GetMapping("/getAllJobs")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<List<JobsApply>> getAllJobs()
    {
        List<JobsApply> job=jobsService.getAllJobs();
        return new ResponseEntity<>(job,HttpStatus.OK);
    }

    @PutMapping("updateJobs/{email}")
    public ResponseEntity<JobsApply> updatejobs(@NonNull @PathVariable String email, @RequestBody JobsDto jobsDto)
    {
        JobsApply updated = jobsService.UpdateJobs(email, jobsDto);
        return new ResponseEntity<>(updated,HttpStatus.OK);
    }

    @PostMapping("/addDetails")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<JobsApply> addJobs(@NonNull @RequestBody JobsApply jobsApply)
    {
        JobsApply addedUser = jobsService.addDetails(jobsApply);
        return new ResponseEntity<>(addedUser,HttpStatus.CREATED);
    }

    @DeleteMapping("deleteById/{jobId}")
    public ResponseEntity<Void> cancelJob(@NonNull @PathVariable Integer jobId)
    {
        jobsService.cancelJobs(jobId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
