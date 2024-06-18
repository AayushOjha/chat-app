const express = require("express")

const app = express.Router();

// Placeholder for message storage logic
const messages = []; // This will later be replaced with MongoDB integration

app.post('/messages', (req, res) => {
  // TODO: Implement message storage logic
  // For now, we'll just simulate message storage
  const { sender, content } = req.body;
  const newMessage = { sender, content };
  messages.push(newMessage);
  res.status(201).send({ message: 'Message sent successfully' });
});

app.get('/messages', (req, res) => {
  // TODO: Implement message retrieval logic
  // For now, we'll just simulate message retrieval
  res.status(200).send(messages);
});

module.exports = app;