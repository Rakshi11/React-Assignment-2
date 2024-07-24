import React, { useState, useContext } from 'react';
import { UserContext } from './UserContext';

function Login() {
  const [name, setName] = useState('');
  const { setUsername } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(name);
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter username" />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;