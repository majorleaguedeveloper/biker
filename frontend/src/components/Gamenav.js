import React, { useContext } from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { Button, Card, Col, Dropdown, Row } from 'react-bootstrap';
import { FaVolumeHigh } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { Store } from '../Store';

const Gamenav = () => {

  const { state, dispatch } = useContext(Store);  // Get the state and dispatch function from the Store
  const { userInfo } = state;

  const signoutHandler = () => {
    dispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
  };

  return (
    <Card  className='bg-black mt-2' style={{border: 'solid', borderColor: 'grey', borderWidth: '1px'}}>
      <Row className='d-flex align-items-center pt-1' style={{height: '46px'}}>
        <Col style={{color: 'white', display: 'flex', justifyContent:'space-between'}}>
          <Dropdown>
            <Dropdown.Toggle
              id="dropdown-custom-components"
              as="span"
              className="d-inline-flex align-items-center"

              style={{ cursor: 'pointer'}}
            >
              <CiMenuBurger className='mx-2' style={{height: '36px', width:'36px'}} color='white'/>
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu">
              <Dropdown.Item as={Link} to="/deposit">Deposit</Dropdown.Item>
              <Dropdown.Item as={Link} to="/withdraw">Withdraw</Dropdown.Item>
              <Dropdown.Item as={Link} to="/register">Register</Dropdown.Item>
              <Dropdown.Item onClick={signoutHandler}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {
            userInfo ? (<span style={{paddingTop:'7px'}}>{userInfo.phone}</span>) : (<span><Button as={Link} to="/login" className='bg-#34B7AA mx-2' style={{borderColor:'white'}}>Log In</Button></span>)
          }
          <span><Button className='bg-black mx-2' style={{width:'90px', borderColor:'white'}}>Bal: 0.00</Button></span>
          <span><FaVolumeHigh className='mx-2 pt-2'  style={{height: '30px', width:'30px'}} color='red'/></span> 
        </Col>
      </Row>
    </Card>
  )
}

export default Gamenav;
