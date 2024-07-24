import React, { useContext } from 'react';
import { UserContext } from './UserContext';

function Welcome() {
  const { username } = useContext(UserContext);

  return <h1>Welcome, {username}!</h1>;
}

export default Welcome;