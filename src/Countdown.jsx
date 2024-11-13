import React, {useState,useEffect} from 'react'
import './App.css';

export default function Countdown() {
  // Set the target date for the countdown
  const [targetDate] = useState(new Date('2024-11-26T00:00:00'));

  // State to hold the time remaining
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  
  useEffect(() => {
    // Update the countdown every second
    const interval = setInterval(() => {
      const now = new Date();
      const timeDiff = targetDate - now;

      if (timeDiff <= 0) {
        clearInterval(interval); // Stop the countdown if the time is up
        return;
      }

      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / (1000));

      setTimeRemaining({days, hours, minutes, seconds})
      
    }, 1000);

    // Cleanup on component unmount
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className='countdown'>
        <div className='time'>
            <h1>{String(timeRemaining.days).padStart(2, '0')}</h1>
            <p>DAYS</p>
        </div>
        <div className='time'>
            <h1>{String(timeRemaining.hours).padStart(2, '0')}</h1>
            <p>HOURS</p>
        </div>
        <div className='time'>
            <h1>{String(timeRemaining.minutes).padStart(2, '0')}</h1>
            <p>MINUTES</p>
        </div>
        <div className='time'>
            <h1>{String(timeRemaining.seconds).padStart(2, '0')}</h1>
            <p>SECONDS</p>
        </div>
      
    </div>
  )
}
