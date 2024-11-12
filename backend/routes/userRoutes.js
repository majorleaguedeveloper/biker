
const express = require ('express');
const bcrypt = require ('bcryptjs');
const expressAsyncHandler = require ('express-async-handler');
const User = require ('../models/userModel.js');
const { generateToken } = require ('../utils.js');


const router = express.Router();

router.post( 
  '/signin',
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ phone: req.body.phone });
    if (user && bcrypt.compareSync(req.body.password, user.password)) {
      res.send({
        _id: user._id,
        name: user.name,
        phone: user.phone,
        token: generateToken(user) 
      });
    } else {
      res.status(401).send({ message: 'Invalid phone or password' }); 
    }
  })
);

router.post(
  '/signup',
  expressAsyncHandler(async (req, res) => {
    const newUser = new User({
      name: req.body.name,
      phone: req.body.phone,
      password: bcrypt.hashSync(req.body.password),
    });
    const user = await newUser.save();
    res.send({
      _id: user._id,
      name: user.name,
      phone: user.phone,
      token: generateToken(user),
    });
  })
);

module.exports = router;  
