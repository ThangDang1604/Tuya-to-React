import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Thermo from './thermostat';

function EmailVerification() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Call the backend to verify the email
    const response = await fetch('http://127.0.0.1:5000/verify-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (data.status === 'valid') {
      setMessage('The email is valid!');
      navigate('/thermo');
    } else {
      setMessage('The email is invalid.');
    }
  };

  return (
    <div className="App">
      <h1>Email Verification</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <button type="submit">Verify Email</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmailVerification />} />
        <Route path="/thermo" element={<Thermo />} />
      </Routes>
    </Router>
  );
}

export default App;