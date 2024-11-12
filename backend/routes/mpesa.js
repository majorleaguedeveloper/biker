// routes/mpesa.js
const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/stkpush', async (req, res) => {
  try {
    const response = await axios.post('https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest', {
      BusinessShortCode: 174379,
      Password: 'MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMjQwODE4MTUyNzM4',
      Timestamp: '20240812003549',
      TransactionType: 'CustomerPayBillOnline',
      Amount: 1,
      PartyA: 254702440401,
      PartyB: 174379,
      PhoneNumber: 254702440401,
      CallBackURL: 'https://mydomain.com/path',
      AccountReference: 'CompanyXLTD',
      TransactionDesc: 'Payment of X'
    }, {
      headers: {
        'Authorization': 'Bearer xcL2cAH309Qq6qqGGKua5c2zKbRC',
        'Content-Type': 'application/json'
      }
    });

    res.status(response.status).json(response.data);
  } catch (error) {
    console.error('Error making the request:', error);
    res.status(error.response?.status || 500).json({ message: 'An error occurred', error: error.message });
  }
});

module.exports = router;
