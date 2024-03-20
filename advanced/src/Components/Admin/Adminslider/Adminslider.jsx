import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Adminslider.css'; // Import CSS for styling
import { Button } from '@mui/material';

const Adminslider = () => {
  // Sample data for job opportunities
  const [job, setJob] =  useState([
    {
      id: 1,
      companyName: 'TCS',
      salary: '$50,000 - $60,000 per year',
      location: 'New York, NY',
      description: 'TCS is a leading technology firm specializing in software development and IT solutions. We are dedicated to innovation and providing exceptional services to our clients.',
      image: 'https://th.bing.com/th/id/OIP.fZr_IDlArglcl5xvL5OIUAAAAA?w=134&h=159&c=7&r=0&o=5&dpr=1.3&pid=1.7' // Add image URL
    },
    {
      id: 2,
      companyName: 'Amazon',
      salary: '$45,000 - $55,000 per year',
      location: 'Washington, U.S',
      description: 'Amazon is an American multinational corporation and technology company focusing on e-commerce, cloud computing, online advertising, digital streaming, and artificial intelligence.',
      image: 'https://th.bing.com/th/id/OIP.niCgTf5RUboGfQrMHkEHxQAAAA?pid=ImgDet&w=181&h=181&c=7&dpr=1.3' // Add image URL
    },
    {
      id: 3,
      companyName: 'Zoho',
      salary: '$25,000 - $35,000 per year',
      location: 'Chennai, Tamil Nadu',
      description: 'Zoho Corporation is an Indian multinational technology company that makes computer software and web-based business tools. It is best known for the online office suite offering Zoho Office Suite. ',
      image: 'https://th.bing.com/th/id/OIP.-F81Spz0MJz-UKl5lYaIywHaEQ?w=278&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' // Add image URL
    }
  ]);


  // Function to handle application selection
  const handleSelect = (id) => {
    // Implement your logic to handle application selection
    console.log(`Application with ID ${id} selected`);
  };

  // Function to handle application deletion
  const handleDelete = (id) => {
    // Implement your logic to handle application deletion
    setJob(job.filter(job => job.id !== id));
  };

  return (
    <div className="slidebar-container">
      <section className="job-list">
        {job.map(job => (
          <div key={job.id} className="job-card">
            <img src={job.image} alt={job.companyName} className="company-image" /> {/* Image at the top right */}
            <h2>{job.companyName}</h2>
            <p><strong>Salary:</strong> {job.salary}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p>{job.description}</p>
            <button onClick={() => handleSelect(job.id)} className="apply-button">Select</button>
            <button onClick={() => handleDelete(job.id)} className="apply-button">Delete</button>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Adminslider;
