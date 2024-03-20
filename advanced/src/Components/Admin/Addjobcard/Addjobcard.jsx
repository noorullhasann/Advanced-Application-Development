import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Addjobcard.css";

const Addjobcard = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [department, setDepartment] = useState('');
  const [location, setLocation] = useState('');
  const [responsibility, setResponsibility] = useState('');
  const [qualification, setQualification] = useState('');
  const [deadline, setDeadline] = useState('');
  const [applicationFee, setApplicationFee] = useState('');
  const [category, setCategory] = useState('premium');

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="create-job-posting-card">
      <h2>Create Job Posting</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="jobTitle">Job Title:</label>
          <input type="text" id="jobTitle" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
        </div>
        <div>
          <label htmlFor="department">Department:</label>
          <input type="text" id="department" value={department} onChange={(e) => setDepartment(e.target.value)} />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>
        <div>
          <label htmlFor="responsibility">Responsibility:</label>
          <input type="text" id="responsibility" value={responsibility} onChange={(e) => setResponsibility(e.target.value)} />
        </div>
        <div>
          <label htmlFor="qualification">Qualification:</label>
          <input type="text" id="qualification" value={qualification} onChange={(e) => setQualification(e.target.value)} />
        </div>
        <div>
          <label htmlFor="deadline">Deadline:</label>
          <input type="text" id="deadline" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
        </div>
        <div>
          <label htmlFor="applicationFee">Application Fee:</label>
          <input type="text" id="applicationFee" value={applicationFee} onChange={(e) => setApplicationFee(e.target.value)} />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <select id="category" value={category} onChange={handleCategoryChange}>
            <option value="premium">Premium</option>
            <option value="free">Free</option>
          </select>
        </div>
        <Link to="/adminhome">
        <button type="submit">Submit</button>
        <button type="button">Cancel</button>
      </Link>
      </form>
    </div>
  );
};

export default Addjobcard;
