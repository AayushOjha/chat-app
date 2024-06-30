const express = require("express");
const Message = require("../../models/Message");

const app = express.Router();

app.post('/messages', async (req, res) => {
  try {
    const { sender, content, group } = req.body;
    const newMessage = new Message({ sender, content, group });
    await newMessage.save();
    res.status(201).send({ message: 'Message sent successfully', data: newMessage });
  } catch (error) {
    res.status(500).send({ message: 'Error sending message', error: error.message });
  }
});

app.get('/messages', async (req, res) => {
  try {
    const messages = await Message.find().populate('sender', 'username');
    res.status(200).send(messages);
  } catch (error) {
    res.status(500).send({ message: 'Error retrieving messages', error: error.message });
  }
});

module.exports = app;