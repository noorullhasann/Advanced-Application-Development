// import React, { useState } from 'react';
// import './Applycard.css'

// const Applycard = () => {
//   const [name, setName] = useState('');
//   const [contactNumber, setContactNumber] = useState('');
//   const [email, setEmail] = useState('');
//   const [amount, setAmount] = useState('');
//   const [jobTitle, setJobTitle] = useState('');

//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleContactNumberChange = (event) => {
//     setContactNumber(event.target.value);
//   };

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handleAmountChange = (event) => {
//     setAmount(event.target.value);
//   };

//   const handleJobTitleChange = (event) => {
//     setJobTitle(event.target.value);
//   };

//   const handleSubmit = () => {
//     // Add logic to submit the application
//     console.log("Application submitted!");
//   };

//   const handleCancel = () => {
//     // Add logic to cancel the application
//     console.log("Application canceled!");
//   };

//   return (
//     <div className="card">
//       <div className="card-body">
//         <h5 className="card-title">Apply for job posting</h5>
//         <div className="form-group">
//           <label htmlFor="name">Applicant Name:</label>
//           <input
//             type="text"
//             className="form-control"
//             id="name"
//             value={name}
//             onChange={handleNameChange}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="contactNumber">Contact Number:</label>
//           <input
//             type="text"
//             className="form-control"
//             id="contactNumber"
//             value={contactNumber}
//             onChange={handleContactNumberChange}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             value={email}
//             onChange={handleEmailChange}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="amount">Amount:</label>
//           <input
//             type="number"
//             className="form-control"
//             id="amount"
//             value={amount}
//             onChange={handleAmountChange}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="jobTitle">Job Title:</label>
//           <select
//             className="form-control"
//             id="jobTitle"
//             value={jobTitle}
//             onChange={handleJobTitleChange}
//           >
//             <option value="">Select Job Title</option>
//             <option value="Software Engineer">Software Engineer</option>
//             <option value="Data Scientist">Data Scientist</option>
//             <option value="UX/UI Designer">UX/UI Designer</option>
//             {/* Add more job titles as needed */}
//           </select>
//         </div>
//         <div className="text-right">
//           <button className="btn btn-primary mr-2" onClick={handleSubmit}>
//             Submit Application
//           </button>
//           <button className="btn btn-secondary" onClick={handleCancel}>
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Applycard;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import navigate function
import './Applycard.css';

const Applycard = ({ onClose }) => {
  const navigate = useNavigate(); 
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [jobTitle, setJobTitle] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleContactNumberChange = (event) => {
    setContactNumber(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleJobTitleChange = (event) => {
    setJobTitle(event.target.value);
  };

  const handleSubmit = () => {
    // Add logic to submit the application
    console.log("Application submitted!");
    navigate('/paymentcard'); // Navigate to the payment page
  };

  const handleCancel = () => {
    // Close the popup
    onClose();
  };

  return (
    <div className="apply-card">
      <div className="apply-card-body">
        <h5 className="apply-card-title">Apply for job posting</h5>
        <div className="apply-form-group">
          <label htmlFor="name">Applicant Name:</label>
          <input
            type="text"
            className="apply-form-control"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="apply-form-group">
          <label htmlFor="contactNumber">Contact Number:</label>
          <input
            type="text"
            className="apply-form-control"
            id="contactNumber"
            value={contactNumber}
            onChange={handleContactNumberChange}
          />
        </div>
        <div className="apply-form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="apply-form-control"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="apply-form-group">
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            className="apply-form-control"
            id="amount"
            value={amount}
            onChange={handleAmountChange}
          />
        </div>
        <div className="apply-form-group">
          <label htmlFor="jobTitle">Job Title:</label>
          <select
            className="apply-form-control"
            id="jobTitle"
            value={jobTitle}
            onChange={handleJobTitleChange}
          >
            <option value="">Select Job Title</option>
            <option value="Software Engineer">Software Engineer</option>
            <option value="Data Scientist">Data Scientist</option>
            <option value="UX/UI Designer">UX/UI Designer</option>
            {/* Add more job titles as needed */}
          </select>
        </div>
        <div className="apply-text-right">
          <button className="apply-btn apply-btn-primary mr-2" onClick={handleSubmit}>
            Submit Application
          </button>
          <button className="apply-btn apply-btn-secondary" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Applycard;
