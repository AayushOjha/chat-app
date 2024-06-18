require('dotenv').config()
const mongoose = require('mongoose');
const { DatabaseConnectionString } = require('./constant');

mongoose.connect(DatabaseConnectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err)); 