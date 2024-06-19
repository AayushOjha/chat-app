import React from 'react';
import { List, ListItem, ListItemText, Paper } from "@mui/material";

const ChatWindow = ({ messages }) => {
  return (
    <Paper style={{ height: '500px', overflow: 'auto' }} className='chat-paper' >
      <List>
        {messages.map((message, index) => (
          <ListItem key={index}>
            <ListItemText primary={message.sender} secondary={message.content} className='message' />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default ChatWindow;