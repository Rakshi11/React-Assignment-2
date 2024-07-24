import React, { useState } from 'react';
import Login from './Login';
import Welcome from './Welcome';
import './App.css';


function App() {
  const [username, setUsername] = useState('');

  const handleLogin = (name) => {
    setUsername(name);
  };

  return (
    <div className="container">
      <Login onLogin={handleLogin} />
      <Welcome username={username} />
    </div>
  );
}

export default App;