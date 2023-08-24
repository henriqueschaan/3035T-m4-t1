import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={increment}>
          Clique aqui
        </button>
        <p>
          Você clicou {count} vezes.
        </p>
      </header>
    </div>
  );
}

export default App;