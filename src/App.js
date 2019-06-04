import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './components/greeting'
import Hello from './components/hello'
import Counter from './components/counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
function App() {
  return (
    <div className="App">
     
      <Counter/>
      <FunctionClick></FunctionClick>
      <ClassClick></ClassClick>
    </div>
  );
}

export default App;
