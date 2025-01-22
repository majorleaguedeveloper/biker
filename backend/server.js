const express = require('express');
const http = require('http');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const userRouter = require('./routes/userRoutes.js');
const socketIo = require('socket.io');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const mpesaRoutes = require('./routes/mpesa');

dotenv.config();
//database vooke@gmail.com
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected...'))
  .catch((err) => console.error(err.message));

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/users', userRouter);
app.use('/api/mpesa', mpesaRoutes); 

let gameData = {
  timer: 1.00, // Ensure the timer starts with two decimal places
  isGameRunning: false,
  results: [2.34 ,2.04, 5.67, 3.25, 1.92, 2.47, 1.45, 5.66],
  crashPoint: null,
  countdown: 15
};

let countdownInterval; 
let timerInterval;

const startGame = () => {
  gameData.isGameRunning = true;
  gameData.timer = 1.00; // Start with two decimal places
  console.log(`Crash point is: ${gameData.crashPoint}`);
  gameData.countdown = 15;

  io.emit('gameUpdate', gameData);

  clearInterval(countdownInterval);
  countdownInterval = setInterval(() => {
    if (gameData.countdown > 0) {
      gameData.countdown -= 1;
      io.emit('countdownUpdate', gameData.countdown);
    } else {
      clearInterval(countdownInterval);
      setTimeout(crushGame, 1000); // Optional delay before crushing
    }
  }, 1000);

  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (gameData.isGameRunning) {
      gameData.timer = parseFloat((gameData.timer + 0.01).toFixed(2)); // Ensure timer has two decimal places
      io.emit('timerUpdate', gameData.timer); // Emit the number with two decimals

      if (parseFloat(gameData.timer) >= parseFloat(gameData.crashPoint)) {
        crushGame();
        if (gameData.results.length >= 8) {
          gameData.results.shift(); // Remove the oldest result if array exceeds 8 
        }
        gameData.results.push(parseFloat(gameData.timer));
        
    
        // Send the updated results array to connected clients
        io.emit('newResults', gameData.results);
      }
    }
  }, 100);
};

const crushGame = () => {
  gameData.isGameRunning = false;
  io.emit('gameUpdate', gameData);
  clearInterval(timerInterval);

  // Start countdown before restarting the game
  gameData.countdown = 10;
  gameData.crashPoint = (Math.random() * 9 + 1).toFixed(2); // Generate crash point at the start of countdown
  io.emit('crashPoint', gameData.crashPoint);
  console.log(gameData.crashPoint);
  io.emit('countdownUpdate', gameData.countdown);

  // Countdown before restarting the game
  clearInterval(countdownInterval);
  countdownInterval = setInterval(() => {
    if (gameData.countdown > 0) {
      gameData.countdown -= 1;
      io.emit('countdownUpdate', gameData.countdown);
    } else {
      clearInterval(countdownInterval);
      startGame(); // Restart game when countdown ends
    }
  }, 1000);
};

startGame();


io.on('connection', (socket) => {
  console.log('New client connected');
  socket.emit('gameUpdate', gameData);

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

const PORT = process.env.PORT || 4000

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
