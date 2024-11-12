import React from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Withdraw = () => {
    return (
        <div className="d-flex justify-content-center my-3" style={{ minHeight: '100vh' }}>
            <div className="bg-white p-4 rounded shadow" style={{ width: '100%' }}>
                <h2 className="text-center">M-Pesa Withdrawal</h2>
                {/* Optional Alert for Success/Error messages */}
                <Alert variant="success" className="d-none">
                    Your withdrawal request has been successfully processed.
                </Alert>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your phone number"
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter amount to withdraw"
                            required
                        />
                    </Form.Group>
                    <Button variant="success" type="submit" className="w-100 mt-5">
                        Withdraw
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Withdraw;
