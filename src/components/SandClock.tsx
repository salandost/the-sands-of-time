import React from 'react';
import Hourglass from '../assets/hourglass.png';
import SandStream from '../assets/sand_stream.png';

function SandClock() {
  return (
    <div className='hourglassContainer'>
      <img src={Hourglass} alt='hourglass'/>
      <div className='topSand'/>
      <div className='bottomSand'/>
      <div className='sandStream' style={{backgroundImage: `url(${SandStream})`}}/>
    </div>
  );
}

export default SandClock;