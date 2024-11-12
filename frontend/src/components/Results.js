import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const SOCKET_SERVER_URL = 'http://localhost:4000';

const Results = () => {

  const [results, setResults] = useState([]);

  useEffect(() => {
    const socket = io(SOCKET_SERVER_URL, { transports: ['websocket'] }); // Ensure WebSocket transport is used

    socket.on('newResults', (results) => {
      setResults(results);
    });

    return () => {
      socket.disconnect();
    };
  }, []); 



  return (
    <div className='bg-black my-1 d-flex align-items-center' style={{height:'40px', justifyContent:'space-between', border: 'solid', borderColor: 'grey', borderWidth: '1px'}}>
      <span className='mx-1' style={{color:'white'}}>{results[0]}</span>
      <span style={{color:'white'}}>{results[1]}</span>
      <span style={{color:'pink'}}>{results[2]}</span>
      <span style={{color:'purple'}}>{results[3]}</span>
      <span style={{color:'blue'}}>{results[4]}</span>
      <span style={{color:'red'}}>{results[5]}</span>
      <span style={{color:'white'}}>{results[6]}</span>
      <span className='mx-1' style={{color:'white'}}>{results[7]}</span>
    </div>
  )
}

export default Results
