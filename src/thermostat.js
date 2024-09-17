import React, { useState } from 'react';


//This page is used to get current temperature and set temerature APIs


function Thermo() {
  const [ctemp, setcTemp] = useState(null);
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');

  const fetchTemp = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/get-temp');
      const data = await response.json();
      setcTemp(data.number);
    } catch (error) {
      console.error('Error fetching the number:', error);
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:5000/set-temp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ number }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(`Success! Set temperature to: ${data.submitted_number} celcius`);
      } else {
        setMessage(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error('Error submitting the number:', error);
      setMessage('An error occurred while submitting the number.');
    }
  };

  return (
    <div>
      <h1>Welcome to the Thermostat Page</h1>
      
      <button onClick={fetchTemp}>Get current temperature</button>
      {ctemp !== null ? (
        <p>The current temperature is: {ctemp} celcius</p>
      ) : (
        <p><br></br></p>
      )}

      <h4>Set temperature</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter a number"
          required
        />
        <button type="submit">Set temperature</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Thermo;