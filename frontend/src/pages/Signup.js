// Signup.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';

function Signup() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      const response = await axios.post('/api/users/signup', {
        name,
        phone,
        password,
      });
      console.log(response.data);
      localStorage.setItem('userInfo', JSON.stringify(response.data));
      navigate('/login'); // Redirect to sign-in page after signup
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div className="mt-3" style={{border: 'solid', borderColor: 'grey', borderWidth: '1px', backgroundColor: 'white', borderRadius: '1rem', minHeight: '100vh'}}>
      <h2 className="text-center pt-3">Sign Up</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit} className='p-3'>
        <Form.Group controlId="name" className="mb-3">
          <Form.Label>NickName</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder='Enter unique name of choice'
          />
        </Form.Group>
        <Form.Group controlId="phone" className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            placeholder='Enter phone number'
          />
        </Form.Group>
        <Form.Group controlId="password" className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder='Enter 4 digit password'
          />
        </Form.Group>
        <Form.Group controlId="confirmPassword" className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            placeholder='Confirm 4 digit password'
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100 mt-4 mb-3">
          Sign Up
        </Button>
        <p>Already have an account? <span style={{color: 'blue'}}>Login</span></p>
      </Form>
    </div>
  );
}

export default Signup;
