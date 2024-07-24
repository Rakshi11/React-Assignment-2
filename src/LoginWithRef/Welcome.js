import React from 'react';

function Welcome({ userDetails }) {
  return (
    <div>
      <h1>Welcome, {userDetails.username}!</h1>
      <h2>Email: {userDetails.email}</h2>
    </div>
  );
}

export default Welcome;