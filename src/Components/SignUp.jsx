import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/users', formData)
      .then(response => alert('Signup successful!'))
      .catch(error => alert('Signup failed.'));
  };

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" name="username" onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" onChange={handleChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" onChange={handleChange} />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;