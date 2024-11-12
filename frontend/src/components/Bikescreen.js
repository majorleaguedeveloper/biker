import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const SOCKET_SERVER_URL = 'http://localhost:4000'; // Ensure this matches your backend URL

const Bikescreen = () => {
  const [timer, setTimer] = useState(1.0);
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [crashPoint, setCrashPoint] = useState(null);
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const socket = io(SOCKET_SERVER_URL, { transports: ['websocket'] }); // Ensure WebSocket transport is used

    socket.on('gameUpdate', (data) => {
      setTimer(data.timer);
      setIsGameRunning(data.isGameRunning);
      setCrashPoint(data.crashPoint);
      setCountdown(data.countdown);
    });

    socket.on('countdownUpdate', (countdown) => {
      setCountdown(countdown);
    });

    socket.on('timerUpdate', (timer) => {
      setTimer(timer);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className='mb-1 bg-black' style={{border: 'solid', borderColor: 'grey', borderWidth: '1px', height: '230px', display: 'flex', alignItems: 'center', position: 'relative'}}>
      {isGameRunning ? (
        <>
          <img src="../gif/biker.gif" alt="Bike" style={{height: '230px', width: '100%'}} />
          <p style={{position: 'absolute', top: '35%', left: '35%', color: 'white', fontSize:'50px'}}>{timer.toFixed(2)}X</p>
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

export default Bikescreen;
