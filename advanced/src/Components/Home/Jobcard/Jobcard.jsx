// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Jobcard.css'; // Import CSS for styling

// const Jobcard = () => {
//   // Sample data for candidate applications
//   const [applications, setApplications] = useState([
//     { 
//       id: 1, 
//       Title: 'Software Engineer', 
//       Department: 'IT', 
//       Location: 'Mumbai' ,
//       Responsibility : "To work in Application Development",
//       Qualification: '3 years of experiance', 
//       Category: 'Premium',
//       Deadline: '02-03-2023'
//     },
//     { 
//       id: 2, 
//       Title: 'Software Engineer', 
//       Department: 'IT', 
//       Location: 'Mumbai' ,
//       Responsibility : "To work in Application Development",
//       Qualification: '3 years of experiance', 
//       Category: 'Premium',
//       Deadline: '02-03-2023'
//     },
//     // Add more applications as needed
//   ]);

//   const nav=useNavigate()

//   // Function to handle application selection
//   const handleApply = (id) => {
//     // Implement your logic to handle application selection
//     nav("/applycard")
//     console.log(`Application with ID ${id} selected`);
//   };

//   // Function to handle application deletion
//   const handleDelete = (id) => {
//     // Implement your logic to handle application deletion
//     setApplications(applications.filter(application => application.id !== id));
//   };

//   return (
//     <div className="recruiter-page">
//       <header>
//         <h1>Candidate Applications</h1>
//         <Link to="/">Back to Home</Link>
//       </header>
//       <section className="applications">
//         {applications.map(application => (
//           <div key={application.id} className="application-card">
//             <p><strong>Title:</strong> {application.Title}</p>
//             <p><strong>Department:</strong> {application.Department}</p>
//             <p><strong>Location:</strong> {application.Location}</p>
//             <p><strong>Responsibility:</strong> {application.Responsibility}</p>
//             <p><strong>Qualification:</strong> {application.Qualification}</p>
//             <p><strong>Category:</strong> {application.Category}</p>
//             <p><strong>Deadline:</strong> {application.Deadline}</p>
//             <div className="action-buttons">
//               <button onClick={() => handleApply(application.id)}>Apply</button>
//             </div>
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// }

// export default Jobcard;




import React, { useState } from 'react';
import './Jobcard.css'; // Import CSS for styling
import Applycard from '../Applycard/Applycard';

const Jobcard = () => {
  // Sample data for candidate applications
  const [applications, setApplications] = useState([
    { 
      id: 1, 
      Title: 'Software Engineer', 
      Department: 'IT', 
      Location: 'Mumbai' ,
      Responsibility : "To work in Application Development",
      Qualification: '5 years of experiance', 
      Category: 'Premium',
      Deadline: '02-03-2023'
    },
    { 
      id: 2, 
      Title: 'Marketing', 
      Department: 'Business', 
      Location: 'Delhi' ,
      Responsibility : "To sale the things in the market.",
      Qualification: '2 years of experiance', 
      Category: 'free',
      Deadline: '05-08-2020'
    },
    // Add more applications as needed
  ]);

  const [showApplyPopup, setShowApplyPopup] = useState(false);

  // Function to handle application selection
  const handleApply = () => {
    setShowApplyPopup(true);
  };

  // Function to close the popup
  const handleClosePopup = () => {
    setShowApplyPopup(false);
  };

  return (
    <div className="jobcard-page">
      <header>
        <h1 className='joncan'>Candidate Applications</h1>
      </header>
      <section className="applications">
        {applications.map(application => (
          <div key={application.id} className="application-card">
            <p><strong>Title:</strong> {application.Title}</p>
            <p><strong>Department:</strong> {application.Department}</p>
            <p><strong>Location:</strong> {application.Location}</p>
            <p><strong>Responsibility:</strong> {application.Responsibility}</p>
            <p><strong>Qualification:</strong> {application.Qualification}</p>
            <p><strong>Category:</strong> {application.Category}</p>
            <p><strong>Deadline:</strong> {application.Deadline}</p>
            <div className="action-buttons">
              <button onClick={handleApply}>Apply</button>
            </div>
          </div>
        ))}
      </section>
      {showApplyPopup && (
        <div className="popup-background">
          <div className="popup-content">
            <Applycard onClose={handleClosePopup} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Jobcard;
