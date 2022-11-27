import React from 'react';
import './App.css';
import Links from './components/links';
import Self from './components/self';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Self />
        <Links />
      </header>
    </div>
  );
}

export default App;
