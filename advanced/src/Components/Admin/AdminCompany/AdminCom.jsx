import React, { useState } from 'react';
import './AdminCompany.css'; // Import CSS for styling

const AdminCom = () => {
  // Sample data for job opportunities
  const [jobOpportunities, setJobOpportunities] = useState([
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
  ]);

  const [editMode, setEditMode] = useState(false);
  const [editedJob, setEditedJob] = useState({});
  const [editedIndex, setEditedIndex] = useState(null);

  const handleOpenEditPopup = (index) => {
    setEditedJob({ ...jobOpportunities[index] });
    setEditedIndex(index);
    setEditMode(true);
  };

  const handleCloseEditPopup = () => {
    setEditMode(false);
    setEditedJob({});
    setEditedIndex(null);
  };

  const handleEdit = (e) => {
    const { name, value } = e.target;
    setEditedJob(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSaveEdit = () => {
    const updatedJobOpportunities = [...jobOpportunities];
    updatedJobOpportunities[editedIndex] = editedJob;
    setJobOpportunities(updatedJobOpportunities);
    handleCloseEditPopup();
  };

  const handleDelete = (id) => {
    const updatedJobOpportunities = jobOpportunities.filter(job => job.id !== id);
    setJobOpportunities(updatedJobOpportunities);
  };

  return (
    <div className="candidates-page">
      <header>
        <h1 className='adcomhead'>Job Opportunities</h1>
      </header>
      <section className="job-opportunities">
        {jobOpportunities.map((job, index) => (
          <div key={job.id} className="job-card">
            <img src={job.image} alt={job.companyName} className="company-logo" />
            <div className="job-details">
              <h2>{job.companyName}</h2>
              <p><strong>Salary:</strong> {job.salary}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <p>{job.description}</p>
              <button onClick={() => handleOpenEditPopup(index)} className="apply-button">Edit</button>
              <button onClick={() => handleDelete(job.id)} className="apply-button">Delete</button>
            </div>
          </div>
        ))}
      </section>

      {editMode && (
        <div className="edit-popup">
          <h2>Edit Job</h2>
          <label>Company Name:</label>
          <input type="text" name="companyName" value={editedJob.companyName} onChange={handleEdit} />
          <label>Salary:</label>
          <input type="text" name="salary" value={editedJob.salary} onChange={handleEdit} />
          <label>Location:</label>
          <input type="text" name="location" value={editedJob.location} onChange={handleEdit} />
          <label>Description:</label>
          <textarea name="description" value={editedJob.description} onChange={handleEdit}></textarea>
          <button onClick={handleSaveEdit}>Save</button>
          <button onClick={handleCloseEditPopup}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default AdminCom;
