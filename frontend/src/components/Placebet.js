import React, { useState } from 'react'
import { Alert, Button, Card, Col, Row } from 'react-bootstrap';

const Placebet = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    setShowAlert(true);
  };

  return (
    <Card className='my-2'>
      {showAlert && (
        <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
          You do not have enough money in your account.
        </Alert>
      )}
        <Row className='bg-black' style={{color: 'white'}}>
          <Col className='my-2'>
            <div style={{border: 'solid', borderColor: 'grey', borderWidth: '1px'}}>

                <div style={{border: 'solid', borderColor: 'grey', borderWidth: '1px',margin: '3px'}}>
                    <div style={{display: 'flex', justifyContent: 'center', margin: '5px'}}>Bet 3 Amount</div>
                    <div style={{display: 'flex', justifyContent: 'center',margin: '5px'}}>
                      <input placeholder='10' style={{width:'50px'}}></input>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center',margin: '5px'}}>
                      Auto Cash Out
                      <input type='checkbox' style={{marginLeft: '8px'}}></input>
                    </div>
                    
                    <div style={{display: 'flex', justifyContent: 'center',margin: '5px'}}>
                      <input placeholder='1.10' style={{width:'50px'}}></input>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center',margin: '5px'}}>
                      Auto Bet
                      <input type='checkbox' style={{marginLeft: '8px'}}></input>
                    </div>
                </div>

              <div>
                <div style={{display: 'flex', justifyContent: 'center',margin: '5px'}}><Button style={{backgroundColor:'orange', borderColor: 'white'}}  onClick={handleClick}>Place Bet 1</Button></div>
              </div>
              
            </div>
          </Col>

          <Col className='my-2'>
            <div style={{border: 'solid', borderColor: 'grey', borderWidth: '1px'}}>

                <div style={{border: 'solid', borderColor: 'grey', borderWidth: '1px',margin: '3px'}}>
                    <div style={{display: 'flex', justifyContent: 'center', margin: '5px'}}>Bet 2 Amount</div>
                    <div style={{display: 'flex', justifyContent: 'center',margin: '5px'}}>
                      <input placeholder='10' style={{width:'50px'}}></input>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center',margin: '5px'}}>
                      Auto Cash Out
                      <input type='checkbox' style={{marginLeft: '8px'}}></input>
                    </div>
                    
                    <div style={{display: 'flex', justifyContent: 'center',margin: '5px'}}>
                      <input placeholder='2.00' style={{width:'50px'}}></input>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center',margin: '5px'}}>
                      Auto Bet
                      <input type='checkbox' style={{marginLeft: '8px'}}></input>
                    </div>
                </div>

              <div>
                <div style={{display: 'flex', justifyContent: 'center',margin: '5px'}}><Button style={{backgroundColor:'green', borderColor: 'white'}}  onClick={handleClick}>Place Bet 2</Button></div>
              </div>
              
            </div>
          </Col>
        </Row>
    </Card>
  )
}

export default Placebet;
