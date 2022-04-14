import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React, { useState } from 'react';

function App() {

  const [thing, setThing] = useState(0);

  const getter = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(1)
      }, 2000)
    })
  }

  const func = async () => {
    console.log("waiting")
    const a = await getter()
    setThing(a)
  }

  const Test = () => {
    return <div></div>
  }
  return (
    <div className="App">
        <button onClick={func}>asdf</button>
    </div>
  );
}

export default App;
