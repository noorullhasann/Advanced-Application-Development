package com.example.job.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AdminJobDto {

    private String department;
    private String location;
    private String qualification;
    private String responsibility;
    private int experiance;
    private int fee;

}
