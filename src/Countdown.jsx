import React from 'react'
import './App.css';

export default function Countdown() {
  return (
    <div className='countdown'>
        <div className='time'>
            <h1>08</h1>
            <p>DAYS</p>
        </div>
        <div className='time'>
            <h1>18</h1>
            <p>HOURS</p>
        </div>
        <div className='time'>
            <h1>46</h1>
            <p>MINUTES</p>
        </div>
        <div className='time'>
            <h1>41</h1>
            <p>SECONDS</p>
        </div>
      
    </div>
  )
}
