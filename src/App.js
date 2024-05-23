import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Footer from "./components/Footer";

function App() {
  return (
      <div className="App">
          <header className="App-header">
              <Navbar/>
          </header>
          <Login/>
          <footer>
              <Footer/>
          </footer>
      </div>
  );
}

export default App;
