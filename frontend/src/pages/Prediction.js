import React, { useEffect, useState } from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import io from 'socket.io-client';

const SOCKET_SERVER_URL = 'https://bikerbackend.onrender.com';

const Prediction = () => {
  const codeLines = [
    'Initializing system...',
    'Connecting to server...',
    'Access granted.',
    'Downloading sensitive data...',
    'Processing...',
    'Encryption key found.',
    'Decrypting files...',
    'Transfer complete.',
  ];
  const [point, setPoint]  = useState('0');

  useEffect(() => {
    const socket = io(SOCKET_SERVER_URL, { transports: ['websocket'] }); // Ensure WebSocket transport is used 
    
    socket.on('crashPoint', (point) => {
    setPoint(point)
    })

    return () => {
      socket.disconnect();
    };
  }, [])

  return (
    <Container fluid style={{height: '100vh'}}>
      <Row className="justify-content-center mt-4">
        <Card
          style={{
            backgroundColor: '#000',
            color: '#00FF00',
            padding: '20px',
            width: '100%',
            fontFamily: 'monospace',
            border: '1px solid #00FF00',
          }}
        >
          <Card.Body>
            <pre style={{ whiteSpace: 'pre-wrap', fontSize: '1rem' }}>
              
              {codeLines.map((line, index) => (
                <div key={index}>{line}</div>
              ))}

            {point}
            </pre>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default Prediction;
