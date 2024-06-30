import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { useState } from "react";

const LoginPage = () => {
  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = () => {
    alert(`Hello, ${name}!`);
  };

  return (
    <div>
      <Card sx={{ maxWidth: 345, margin: "auto", marginTop: 5 }}>
        <CardContent>
          <Typography variant="h6" component="div">
            Enter Your Name
          </Typography>
          <TextField
            label="Username"
            value={name}
            onChange={handleNameChange}
            fullWidth
            margin="normal"
          />
          <Button
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
