//Bike component for frontend only
import React, { useEffect, useState } from 'react';

const Bike = () => {

  const [timer, setTimer] = useState(1.0);
    const [isGameRunning, setIsGameRunning] = useState(true);
    const [crashPoint, setCrashPoint] = useState(null);
    const [countdown, setCountdown] = useState(10);
  
    // Handle the countdown when the game is not running
    useEffect(() => {
      let countdownInterval;
      if (!isGameRunning) {
        setCountdown(10); // Reset countdown to 10
        countdownInterval = setInterval(() => {
          setCountdown(prev => {
            if (prev > 0) return prev - 1;
            clearInterval(countdownInterval);
            handleBet(); // Call handleBet when countdown reaches 0
            return prev;
          });
        }, 1000);
      }
      return () => clearInterval(countdownInterval);
    }, [isGameRunning]);
  
    // Handle the bet logic and game start
    const handleBet = () => {
      if (isGameRunning) return;
      setIsGameRunning(true);
      setCrashPoint((3.45).toFixed(2)); // Random crash point between 1 and 10, can be dynamic
      setTimer(1.0);
    };
  
    // Handle the timer when the game is running
    useEffect(() => {
      let interval;
      if (isGameRunning) {
        interval = setInterval(() => {
          setTimer(prev => {
            const newTime = (prev + 0.03).toFixed(2);
            if (newTime >= crashPoint) {
              clearInterval(interval);
              setIsGameRunning(false);
            }
            return parseFloat(newTime);
          });
        }, 100);
      }
      return () => clearInterval(interval);
    }, [isGameRunning, crashPoint]);

  return (
    <div className='mb-1 bg-black' style={{border: 'solid', borderColor: 'grey', borderWidth: '1px', height: '230px', display: 'flex', alignItems: 'center', position: 'relative'}}>
      {isGameRunning ? (
        <>
          <img src="../gif/biker.gif" alt="Bike" style={{height: '230px', width: '100%'}} />
          <p style={{position: 'absolute', top: '35%', left: '35%', color: 'white', fontSize:'50px'}}>{timer}X</p>
        </>
      ) : (
        <>
          <img src="../gif/crashed.gif" alt="Bike" style={{height: '230px', width: '100%'}} />
          <h3 style={{position: 'absolute', top: '20%', left: '40%', color: 'red'}}>Crushed</h3>
          <p style={{position: 'absolute', top: '30%', left: '30%', color: 'red', fontSize: '70px'}}>{crashPoint}X</p>
          <h3 style={{position: 'absolute', bottom: '10%', left: '29%', color: 'white'}}>Ride starts in {countdown}</h3>
        </>
      )}
    </div>
  );
};

export default Bike;
