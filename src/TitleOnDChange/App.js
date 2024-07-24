import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [variable, setVariable] = useState('');
  const [D, setD] = useState('');

  useEffect(() => {
    if (D) {
      document.title = D;
    }
  }, [D]);

  return (
    <div className="container">
      <input
        type="text"
        value={variable}
        onChange={(e) => setVariable(e.target.value)}
        placeholder="Set variable"
      />
      <input
        type="text"
        value={D}
        onChange={(e) => setD(e.target.value)}
        placeholder="Set D"
      />
      <button onClick={() => setD(variable)}>Set D</button>
    </div>
  );
}

export default App;