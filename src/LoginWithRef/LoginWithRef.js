import React, { useRef, useState } from 'react';
import Welcome from './Welcome';

function LoginWithRef() {
  const nameRef = useRef();
  const emailRef = useRef();
  const [userDetails, setUserDetails] = useState({ username: '', email: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserDetails({
      username: nameRef.current.value,
      email: emailRef.current.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="login-form">
        <input type="text" ref={nameRef} placeholder="Enter username" />
        <input type="email" ref={emailRef} placeholder="Enter email" />
        <button type="submit">Login</button>
      </form>
      <Welcome userDetails={userDetails} />
    </div>
  );
}

export default LoginWithRef;