package com.example.job.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class JobsDto {
    private String applicantName;
    private Long contactNumber;
    private String email;
    private int amount;
    private String jobTitle;
}
