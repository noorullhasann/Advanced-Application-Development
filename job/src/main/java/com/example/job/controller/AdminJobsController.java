package com.example.job.controller;

import java.util.List;
import java.util.Optional;

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

import com.example.job.dto.AdminJobDto;
import com.example.job.model.AdminJob;
import com.example.job.service.AdminJobService;

@RestController
@RequestMapping("/admin/jobs_add")
public class AdminJobsController {

    @Autowired
    private AdminJobService adminJobService;

    @PostMapping("/createJobs")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<AdminJob> createJobs(@NonNull @RequestBody AdminJob adminJob) {
        AdminJob createdJobs = adminJobService.addJobs(adminJob);
        return new ResponseEntity<>(createdJobs, HttpStatus.CREATED);
    }

    @GetMapping("readJobs/{department}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<?> getJobByDepartment(@PathVariable String department) {
        Optional<AdminJob> jobs = adminJobService.getJobsByDepartment(department);
        return jobs.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/readJobs")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<List<AdminJob>> getAllJobs() {
        List<AdminJob> jobs = adminJobService.getAll();
        return new ResponseEntity<>(jobs, HttpStatus.OK);
    }

    @PutMapping("updateJobs/{department}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<AdminJob> updateJob(@NonNull @PathVariable String department,
            @RequestBody AdminJobDto adminJobDto) {
                AdminJob updated = adminJobService.updateJobs(department, adminJobDto);
        return new ResponseEntity<>(updated, HttpStatus.OK);
    }

    @DeleteMapping("deleteJobs/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Void> deleteJobs(@PathVariable int id) {
        adminJobService.deleteJobsById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @DeleteMapping("deleteJobs/{department}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Void> deleteJobByName(@NonNull @PathVariable String department) {
        adminJobService.deleteJobsByDepatment(department);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
