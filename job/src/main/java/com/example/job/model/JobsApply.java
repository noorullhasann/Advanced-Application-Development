package com.example.job.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "Jobs")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class JobsApply {
    @Id
    private int jobId;
    private String applicantName;
    private Long contactNumber;
    private String email;
    private int amount;
    private String jobTitle;
}
