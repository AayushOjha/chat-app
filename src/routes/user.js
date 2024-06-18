const express = require("express")
const User = require("../../models/User");

const app = express.Router();

app.post('/register', async (req, res) => {
  console.log("inn..........")
  try {
    const { username, password } = req.body;
    const newUser = new User({ username, password });
    await newUser.save();
    res.status(201).send({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Error registering user', error: error.message });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user && user.password === password) {
      res.status(200).send({ message: 'User logged in successfully' });
    } else {
      res.status(401).send({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).send({ message: 'Error logging in', error: error.message });
  }
});

module.exports = app;