const express = require('express');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');
const userRoute = require('./src/routes/user')
const chatRoute = require('./src/routes/chat')
const Message = require('./models/Message')


require("./src/db")

const PORT = process.env.PORT || 5000;


const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('sendMessage', async (data) => {
    try {
      const newMessage = new Message(data);
      await newMessage.save();
      io.emit('message', newMessage);
    } catch (error) {
      console.error(`message failed`, data)
    }
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

app.use(express.json());

app.use(cors());


server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});