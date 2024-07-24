import React, { useState } from 'react';

function Login({ onLogin }) {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(name);
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter username" />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;