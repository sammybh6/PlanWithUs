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
import AuthContext from './context/authContext';
import { useContext } from 'react';
import { postData } from './utils/Rest'
import { useForm } from "react-hook-form";

export default function LoginModal() {
  const { register, handleSubmit } = useForm();
  const auth = useContext(AuthContext)

  const [open, setOpen] = React.useState(false);
  const [regOpen, setRegOpen] = React.useState(false);

  const submitHandler = async (data) => {
    console.log(data);
    const res = await postData('auth/login', true, data);

  };
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

          <form onSubmit={handleSubmit(submitHandler)}>
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="outlined"
              {...register("email", { required: true })}
            />
            <TextField
              autoFocus
              margin="dense"
              id="password"
              label="Password"
              type="password"
              fullWidth
              variant="outlined"
              {...register("password", { required: true })}
            />
            <button type='submit'>Submit</button>
          </form>
        </DialogContent>
        <Button onClick={handleClose} type='submit'>Login</Button>
        <Button onClick={handleReg}>Register</Button><br />
        <button onClick={() => {
          window.location.assign(getGoogleOAuthURL())
        }} className={gs.logbtn} >
          Sign in with Google
        </button>

      </Dialog>
      <RegisterModal isOpen={regOpen} regClose={() => { setRegOpen(false) }} />
    </div>
  );
}

