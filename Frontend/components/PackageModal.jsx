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
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function PackageModal(props) {
    const { register, handleSubmit } = useForm();
    const auth = useContext(AuthContext)

    const [open, setOpen] = React.useState(false);
    const [regOpen, setRegOpen] = React.useState(false);

    const [pId, setPId] = React.useState('');

    const submitHandler = async (data) => {
        console.log(data);
        const res = await postData('package', true, {
            name: data.text
        });
        console.log(res);
        setPId(res.data.data._id);
        console.log(res.data.data._id);
        // return res;
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        props.handleClose()
    };

    // const handleReg = () => {
    //     setRegOpen(true);
    //     handleClose();
    // }


    console.log(pId);
    const store = () => {
        sessionStorage.setItem('newPackage', `${pId}`);
        handleClose();
    }

    return (
        <div>
            {/* <Button variant="contained" onClick={handleClickOpen} sx={{
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
                Submit!
            </Button> */}
            <Dialog open={props.open} onClose={handleClose}>
                <DialogTitle>Submit</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        New Package
                    </DialogContentText>

                    <form onSubmit={handleSubmit(submitHandler)}>
                        {/* <form> */}
                        <TextField
                            autoFocus
                            margin="dense"
                            id="email"
                            label="Package Name"
                            type="text"
                            fullWidth
                            variant="outlined"
                            {...register("text", { required: true })}
                        />
                        {/* <TextField
              autoFocus
              margin="dense"
              id="password"
              label="Password"
              type="password"
              fullWidth
              variant="outlined"
              {...register("password", { required: true })}
            /> */}
                        <button type='submit' onClick={store}>Create</button>
                        <Link to='/packages'>
                            <button >Update old package</button>
                        </Link>
                    </form>
                </DialogContent>
            </Dialog>
            <RegisterModal isOpen={regOpen} regClose={() => { setRegOpen(false) }} />
        </div>
    );
}

