import React from 'react';
import { UserProvider } from './UserContext';
import Login from './Login';
import Welcome from './Welcome';
import './App.css';

function App() {
  return (
    <UserProvider>
      <div className="container">
        <Login />
        <Welcome />
      </div>
    </UserProvider>
  );
}

export default App;