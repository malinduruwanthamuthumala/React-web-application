import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './components/greeting'
import Hello from './components/hello'
import Counter from './components/counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import Clickhandler from './components/clickhandler';
function App() {
  return (
    <div className="App">
     
      <Counter/>
      <FunctionClick></FunctionClick>
      <ClassClick></ClassClick>
      <Clickhandler></Clickhandler>
    </div>
  );
}

export default App;
