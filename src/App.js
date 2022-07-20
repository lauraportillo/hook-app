//React
import React from 'react';
//Components
import CounterApp from './01-useState/CounterApp';
import CounterWithCustomHook from './01-useState/CounterWithCustomHook';
//Style
import './stylesheets/App.css';

const App = () => {
  return (
    <>
      <h1>HooksApp</h1>
      <CounterApp />
      <CounterWithCustomHook />
    </>

  )

}

export default App;
