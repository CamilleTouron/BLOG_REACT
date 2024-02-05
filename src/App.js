import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <Navbar />
          <Login />
        </header>
      </div>
  );
}

export default App;
