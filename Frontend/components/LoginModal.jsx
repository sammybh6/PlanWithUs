import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import RegisterModal from './RegisterModal';
import gs from './style/LoginModal.module.css'
import AuthContext from './context/AuthContext';
import { useContext } from 'react';
import { postData } from './utils/Rest'

export default function LoginModal() {
  const auth = useContext(AuthContext)
  async function reg() {
    const res = await postData('auth/register', true, {
      "name": "abc",
      "email": "abc@gmail.com",
      "password": "abc123"
    })
    console.log(res);
  }



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
        <DialogTitle>PlanWithUs</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Login to PlanWithUs
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
          <Button onClick={reg}>Check</Button>

          <Button onClick={handleClose}>Login</Button>
          <Button onClick={handleReg}>Register</Button><br />

          {/* <ReactGoogleButton
            type='dark'
            onClick={() => {
              window.location.assign(getGoogleOAuthURL())
            }
            }
          /> */}

          <button onClick={() => {
            window.location.assign(getGoogleOAuthURL())
          }} className={gs.logbtn} >
            Sign in with Google
          </button>
        </DialogActions>

      </Dialog>
      <RegisterModal isOpen={regOpen} regClose={() => { setRegOpen(false) }} />
    </div>
  );
}

