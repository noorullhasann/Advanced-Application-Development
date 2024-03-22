import React, { useState } from 'react';
import "./Account.css"

const Account = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEdit = () => {
    // Handle edit functionality here
    console.log("Edit button clicked");
  };

  const handleBack = () => {
    // Handle back functionality here
    console.log("Back button clicked");
  };

  return (
    <div className="account-page">
      <h1>Account Settings</h1>
      <form>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </form>
      <div className="buttons">
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleBack}>Back</button>
      </div>
    </div>
  );
};

export default Account;
