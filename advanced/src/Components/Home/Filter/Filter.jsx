import React, { useState } from 'react';
import "./Filter.css"

const Filter = ({ onFilterChange }) => {
  const [location, setLocation] = useState('');
  const [industry, setIndustry] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [salaryRange, setSalaryRange] = useState('');

  const handleLocationChange = (e) => {
    const { value } = e.target;
    setLocation(value);
    onFilterChange({ location: value, industry, jobTitle, salaryRange });
  };

  const handleIndustryChange = (e) => {
    const { value } = e.target;
    setIndustry(value);
    onFilterChange({ location, industry: value, jobTitle, salaryRange });
  };

  const handleJobTitleChange = (e) => {
    const { value } = e.target;
    setJobTitle(value);
    onFilterChange({ location, industry, jobTitle: value, salaryRange });
  };

  const handleSalaryRangeChange = (e) => {
    const { value } = e.target;
    setSalaryRange(value);
    onFilterChange({ location, industry, jobTitle, salaryRange: value });
  };

  const handleSubmit = () => {
    // Add any logic you need for submitting the filters
  };

  return (
    <div className="com-filter">
      <h2>Filter</h2>
      <div>
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={handleLocationChange}
        />
      </div>
      <div>
        <label htmlFor="industry">Industry:</label>
        <input
          type="text"
          id="industry"
          value={industry}
          onChange={handleIndustryChange}
        />
      </div>
      <div>
        <label htmlFor="jobTitle">Job Title:</label>
        <input
          type="text"
          id="jobTitle"
          value={jobTitle}
          onChange={handleJobTitleChange}
        />
      </div>
      <label>Salary Range:</label>
      <div>
        <label>
          <input
            type="radio"
            value="0-50000"
            checked={salaryRange === '0-50000'}
            onChange={handleSalaryRangeChange}
          />
          0 - 50,000
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="50001-100000"
            checked={salaryRange === '50001-100000'}
            onChange={handleSalaryRangeChange}
          />
          50,001 - 100,000
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="100001-150000"
            checked={salaryRange === '100001-150000'}
            onChange={handleSalaryRangeChange}
          />
          100,001 - 150,000
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="150001-200000"
            checked={salaryRange === '150001-200000'}
            onChange={handleSalaryRangeChange}
          />
          150,001 - 200,000
        </label>
      </div>
      <button onClick={handleSubmit}>Apply Filters</button>
    </div>
  );
};

export default Filter;
