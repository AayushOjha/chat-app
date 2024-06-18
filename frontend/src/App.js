// src/App.js

import React, { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import MessageInput from './components/MessageInput';
import { Container, Grid } from '@mui/material';

const App = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (content) => {
    const newMessage = { sender: 'User', content };
    setMessages([...messages, newMessage]);
  };

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ChatWindow messages={messages} />
        </Grid>
        <Grid item xs={12}>
          <MessageInput onSendMessage={handleSendMessage} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;