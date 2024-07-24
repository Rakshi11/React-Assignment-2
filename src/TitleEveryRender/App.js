import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [variable, setVariable] = useState('');

  useEffect(() => {
    if (variable) {
      document.title = variable;
    }
  }, [variable]);

  return (
    <div className="container">
      <input
        type="text"
        value={variable}
        onChange={(e) => setVariable(e.target.value)}
        placeholder="Set variable"
      />
      <button onClick={() => setVariable('New Title')}>Set Title</button>
    </div>
  );
}

export default App;