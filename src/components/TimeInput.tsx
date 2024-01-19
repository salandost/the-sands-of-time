import React from 'react';

function TimerInput() {
  return (
    <div className='timeInputContainer'>
      <input type="time" step="1" placeholder='Time'/>
    </div>
  );
}

export default TimerInput;