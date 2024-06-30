import { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
  
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [groupName, setGroupName] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleGroupNameChange = (event) => {
    setGroupName(event.target.value);
  };

  const handleSubmit = () => {
    if (name && groupName) {
      localStorage.setItem("username", name);
      localStorage.setItem("groupname", groupName);
    } else {
      alert("plese enter valid values");
    }
    navigate('/chat')
  };

  return (
    <div>
      <Card sx={{ maxWidth: 345, margin: "auto", marginTop: 5 }}>
        <CardContent>
          <Typography variant="h7" component="div">
            Join Group
          </Typography>
          <TextField
            label="Username"
            value={name}
            onChange={handleNameChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Group Name"
            value={groupName}
            onChange={handleGroupNameChange}
            fullWidth
            margin="normal"
          />
          <Button
            style={{ marginTop: "16px" }}
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            fullWidth
          >
            Start Chatting
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export { LoginPage };
