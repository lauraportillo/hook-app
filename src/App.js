//React
import React from 'react';
//Components
import CounterApp from './01-useState/CounterApp';
import CounterCustomHook from './01-useState/CounterCustomHook';
//Style
import './stylesheets/App.css';

const App = () => {
  return (
    <>
      <h1>HooksApp</h1>
      <CounterApp />
      <CounterCustomHook />
    </>

  )

}

export default App;
