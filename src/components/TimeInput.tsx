import React, { FC } from 'react';

type TimerInputProps = {
  time: string,
  onChange: ( val:string ) => void,
}

const TimerInput: FC<TimerInputProps> = ({time, onChange}) => {
  return (
    <div className='timeInputContainer'>
      <input type="time" step="1" placeholder='Time' value={time || '00:00:00'} onChange={(event) => { onChange(event.target.value) }}/>
    </div>
  );
}

export default TimerInput;