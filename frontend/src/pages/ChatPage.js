
import { useState, useEffect } from 'react';
import ChatWindow from '../components/ChatWindow';
import MessageInput from '../components/MessageInput';
import { Container, Grid } from '@mui/material';
import socket from '../utils/socket';
import { useNavigate } from 'react-router-dom';


const ChatPage = () => {

  const navigate = useNavigate();

  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState('');
  const [groupName, setGroupName] = useState('');

  useEffect(() => {
    const usename = localStorage.getItem('username')
    const groupname = localStorage.getItem('groupname')
    if(usename && groupname){
      setUserName(userName)
      setGroupName(groupname)
    }else{
      navigate('/')
    }
  }, [])

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
      sender: userName, 
      group: groupName,
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
