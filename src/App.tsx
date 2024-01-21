import React, {useState} from 'react';
import './App.css';
import TimerInput from './components/TimeInput';
import SandClock from './components/SandClock';

function App() {
  const [time, setTime] = useState<string>('00:00:00');
  console.log(time);
  return (
    <div className="app">
      <header className="app-header">
        The Sands of Time
      </header>
      <div className='app-content'>
        <SandClock />
        <TimerInput onChange={setTime} time={time}/>
        <div className='buttonContainer'>
          <button>Start</button>
          <button>Stop</button>  
        </div>
      </div>
    </div>
  );
}

export default App;
