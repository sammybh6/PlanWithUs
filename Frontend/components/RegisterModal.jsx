import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// import { ThemeProvider } from '@emotion/react';
import { createTheme, ThemeProvider } from "@mui/material/styles";
export default function RegisterModal({ isOpen, regClose }) {


  const theme = createTheme({
    palette: {
      primary: {
        main: "#562B08",
      },
    },
  });
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Register for an account
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"

          />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <ThemeProvider theme={theme}>
            <Button variant="contained"
              color="primary"
              onClick={regClose}>Cancel</Button>
            <Button
              variant="contained"
              color="primary"
              onClick={regClose}>Create</Button>
          </ThemeProvider>
        </DialogActions>
      </Dialog>
    </div>
  );
}

