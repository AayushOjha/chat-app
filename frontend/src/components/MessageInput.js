// src/components/MessageInput.js

import React, { useState } from "react";
import { Paper, InputBase, IconButton } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

const MessageInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    onSendMessage(message);
    setMessage("");
  };

  return (
    <Paper
    className="input-box-paper"
      style={{ padding: "2px 4px", display: "flex", alignItems: "center" }}
    >
      <InputBase
        style={{ marginLeft: "8px", flex: 1 }}
        className="input-box"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleSend()}
      />
      <IconButton onClick={handleSend}>
        <SendIcon />
      </IconButton>
    </Paper>
  );
};

export default MessageInput;
