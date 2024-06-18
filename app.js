const express = require('express');
const cors = require('cors');
const userRoute = require('./src/routes/user')
const chatRoute = require('./src/routes/chat')

const PORT = process.env.PORT || 5000;


const app = express();

app.use(express.json());

app.use(cors());

app.use('/users', userRoute);
app.use('/chat', chatRoute);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});