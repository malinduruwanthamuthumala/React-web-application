import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './components/greeting'
import Hello from './components/hello'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greeting></Greeting>
        <Hello></Hello>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reactdfdfdf
        </a>
      </header>
    </div>
  );
}

export default App;
