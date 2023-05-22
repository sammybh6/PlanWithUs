import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import RegisterModal from './RegisterModal';

export default function LoginModal() {
  const [open, setOpen] = React.useState(false);
  const [regOpen, setRegOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleReg = () => {
    setRegOpen(true);
    handleClose();
  }

  const getGoogleOAuthURL = () => {
    const rootUrl = 'https://accounts.google.com/o/oauth2/v2/auth'
    const options = {
      redirect_uri: 'http://localhost:3000/google',
      client_id: '445329694262-7q9hot08cm22ujqr8vlj1ipoudiodmlk.apps.googleusercontent.com',
      access_type: 'offline',
      response_type: 'code',
      prompt: 'consent',
      scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email',
      ].join(' '),
    }
    const qs = new URLSearchParams(options)
    return `${rootUrl}?${qs.toString()}`
  }


  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen} sx={{
        color: '#562B08',
        backgroundColor: 'white',
        borderRadius: '20px',
        border: '2px solid #562B08',
        padding: '10px 20px',
        '&:hover': {
          backgroundColor: '#562B08',
          color: 'white',
        },

      }}>
        Login
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Login</Button>
          <Button onClick={handleReg}>Register</Button>
          <Button onClick={() => {
            window.location.assign(getGoogleOAuthURL())
          }
          }>Signin with google</Button>
        </DialogActions>
      </Dialog>
      <RegisterModal isOpen={regOpen} regClose={() => { setRegOpen(false) }} />
    </div>
  );
}

