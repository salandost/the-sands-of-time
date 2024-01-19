import React from 'react';
import './App.css';
import TimerInput from './components/TimeInput';
import SandClock from './components/SandClock';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        The Sands of Time
      </header>
      <div className='app-content'>
        <SandClock />
        <TimerInput />
      </div>
    </div>
  );
}

export default App;
