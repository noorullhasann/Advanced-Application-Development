package com.example.job.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "Job_post")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class AdminJob {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String department;
    private String location;
    private String qualification;
    private String responsibility;
    private int experiance;
    private int fee;

}
