import React from 'react';
import { Link } from 'react-router-dom';
import './Company.css'; // Import CSS for styling

const Company = () => {
  // Sample data for job opportunities
  const jobOpportunities = [
    {
      id: 1,
      companyName: 'TCS',
      salary: '$50,000 - $60,000 per year',
      location: 'New York, NY',
      description: 'TCS is a leading technology firm specializing in software development and IT solutions. We are dedicated to innovation and providing exceptional services to our clients.',
      image: 'https://th.bing.com/th/id/OIP.fZr_IDlArglcl5xvL5OIUAAAAA?w=134&h=159&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    },
    {
      id: 2,
      companyName: 'Amazon',
      salary: '$45,000 - $55,000 per year',
      location: 'Washington, U.S',
      description: 'Amazon is an American multinational corporation and technology company focusing on e-commerce, cloud computing, online advertising, digital streaming, and artificial intelligence.',
      image: 'https://th.bing.com/th/id/OIP.niCgTf5RUboGfQrMHkEHxQAAAA?pid=ImgDet&w=181&h=181&c=7&dpr=1.3'
    },
    // Add more job opportunities as needed
  ];

  return (
    <div className="candidates-page">
      <header>
        <h1 className='jobhead'>Job Opportunities</h1>
      </header>
      <section className="job-opportunities">
        {jobOpportunities.map(job => (
          <div key={job.id} className="job-card">
            <img src={job.image} alt={job.companyName} className="company-logo" />
            <div className="job-details">
              <h2>{job.companyName}</h2>
              <p><strong>Salary:</strong> {job.salary}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <p>{job.description}</p>
              <Link to={"/apply/${job.id}"} className="apply-button">Apply</Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Company;
