// SigninScreen.js
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';
import { Store } from '../Store';  // Import the Store context

function Signin() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { dispatch } = useContext(Store);  // Get the dispatch function from the Store

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users/signin', {
        phone,
        password,
      });
      const userInfo = response.data;
      console.log(userInfo);
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
      dispatch({ type: 'USER_SIGNIN', payload: userInfo });  // Dispatch the user information to the global state
      navigate('/'); // Redirect to home page after signin
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div className="my-3" style={{border: 'solid', borderColor: 'grey', borderWidth: '1px',backgroundColor: 'white', borderRadius: '1rem', minHeight: '100vh'}}>
      <h2 className="text-center pt-3">Sign In</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit} className='p-3'>
        <Form.Group controlId="phone" className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            placeholder='Enter your phone number'
          />
        </Form.Group>
        <Form.Group controlId="password" className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder='Enter your Password'
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100 mt-4 mb-5">
          Sign In
        </Button>
        <p>Do not have an account? <span style={{color: 'blue'}}>Register</span></p>
      </Form>
    </div>
  );
}

export default Signin;
