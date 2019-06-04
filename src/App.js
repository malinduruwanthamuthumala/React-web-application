import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './components/greeting'
import Hello from './components/hello'
import Counter from './components/counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import Clickhandler from './components/clickhandler';
import ParentComponent from './components/parentComponent';
function App() {
  return (
    <div className="App">
{/*      
      <Counter/>
      <FunctionClick></FunctionClick>
      <ClassClick></ClassClick>
      <Clickhandler></Clickhandler> */}
      <ParentComponent></ParentComponent>
    </div>
  );
}

export default App;
