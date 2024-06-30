
import { useState, useEffect } from 'react';
import ChatWindow from '../components/ChatWindow';
import MessageInput from '../components/MessageInput';
import { Container, Grid } from '@mui/material';
import socket from '../utils/socket';


const ChatPage = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("message", (message) => {
      console.log(message);
    });

    return () => {
      socket.off("message");
    };
  }, []);

  const sendMessage = (content) => {
    const messageData = {
      senderId: "userId", // Replace with actual user ID
      content: content,
    };
    socket.emit("sendMessage", messageData);
  };

  return (
    <Container className="app-container">
      <h1 className="page-title">Chat Room</h1>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ChatWindow messages={messages} />
        </Grid>
        <Grid item xs={12}>
          <MessageInput onSendMessage={sendMessage} />
        </Grid>
      </Grid>
    </Container>
  );
};

export { ChatPage };
