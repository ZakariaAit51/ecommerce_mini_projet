import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.get('http://localhost:5000/users')
      .then(response => {
        const user = response.data.find(
          u => u.username === credentials.username && u.password === credentials.password
        );
        if (user) {
          alert('Login successful!');
        } else {
          alert('Invalid credentials');
        }
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" name="username" onChange={handleChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" onChange={handleChange} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;