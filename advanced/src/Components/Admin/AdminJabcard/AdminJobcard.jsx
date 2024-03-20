import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AdminJobcard.css'; // Import CSS for styling

const AdminJobcard = () => {
  // Sample data for candidate applications
  const [applications, setApplications] = useState([
    { 
      id: 1, 
      Title: 'Software Engineer', 
      Department: 'IT', 
      Location: 'Mumbai' ,
      Experience: '3 years', 
      Category: 'Premium',
      Deadline: '02-03-2023',
      Application_fee: '250' 
    },
    { 
        id: 2, 
        Title: 'Web Developer', 
        Department: 'IT', 
        Location: 'Delhi' ,
        Experience: '5 years', 
        Category: 'Premium',
        Deadline: '02-03-2023',
        Application_fee: '250'
    },
    // Add more applications as needed
  ]);

  // Function to handle application selection
  const handleSelect = (id) => {
    // Implement your logic to handle application selection
    console.log(`Application with ID ${id} selected`);
  };

  // Function to handle application deletion
  const handleDelete = (id) => {
    // Implement your logic to handle application deletion
    setApplications(applications.filter(application => application.id !== id));
  };

  return (
    <div className="recruiter-page">
      <header>
        <h1>Candidate Applications</h1>
      </header>
      <section className="applications">
        {applications.map(application => (
          <div key={application.id} className="application-card">
            <h2>{application.name}</h2>
            <p><strong>Department:</strong> {application.Department}</p>
            <p><strong>Location:</strong> {application.Category}</p>
            <p><strong>Qualification:</strong> {application.Location}</p>
            <p><strong>Responsibility:</strong> {application.Deadline}</p>
            <p><strong>Experience:</strong> {application.Experience}</p>
            <p><strong>Fees:</strong> {application.Application_fee}</p>
            <div className="action-buttons">
              <button onClick={() => handleSelect(application.id)}>Select</button>
              <button onClick={() => handleDelete(application.id)}>Delete</button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default AdminJobcard;
