import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Recruiter.css'; // Import CSS for styling

const RecruiterPage = () => {
  // Sample data for candidate applications
  const [applications, setApplications] = useState([
    { 
      id: 1, 
      name: 'John Doe', 
      department: 'Engineering', 
      qualification: 'Bachelor\'s Degree', 
      experience: '3 years', 
      skills: 'JavaScript, React, Node.js' 
    },
    { 
      id: 2, 
      name: 'Jane Smith', 
      department: 'Marketing', 
      qualification: 'Master\'s Degree', 
      experience: '5 years', 
      skills: 'Python, Django, SQL' 
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
        <Link to="/">Back to Home</Link>
      </header>
      <section className="applications">
        {applications.map(application => (
          <div key={application.id} className="application-card">
            <h2>{application.name}</h2>
            <p><strong>Department:</strong> {application.department}</p>
            <p><strong>Qualification:</strong> {application.qualification}</p>
            <p><strong>Experience:</strong> {application.experience}</p>
            <p><strong>Skills:</strong> {application.skills}</p>
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

export default RecruiterPage;
