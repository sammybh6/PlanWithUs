import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography'; 
import { red } from '@mui/material/colors';
// import FlightIcon from '@mui/icons-material/Flight';
import HotelIcon from '@mui/icons-material/Hotel';
// import DirectionsSubwayFilledIcon from '@mui/icons-material/DirectionsSubwayFilled';
import BungalowIcon from '@mui/icons-material/Bungalow';
import t from '../components/style/TravelCard.module.css'
import axios from 'axios';
// import TrainList from './TrainList';
import { useNavigate } from 'react-router-dom';


export default function StayCard(props) {
  const navigate = useNavigate();
  const [flightData, setFlightData] = React.useState([]);
  const [trainData, setTrainData] = React.useState([]);
  const handleIconClicks = name => () => {
    console.log(name);
  }
  const clickMef = (event) => {
    // props.data["Transport"] = "flight";
    navigate('/hotel');
    // console.log(props.data);
    
  }
  const clickMet = (event) => {
    // props.data["Transport"] = "train";
    navigate('/stay');
    // console.log(props.data);

  }
  // console.log(props.icon);
  // console.log(props.data);
  if(props.icon === "hotel"){
    return (
      <Card sx={{ maxWidth: 345 }} style={{
        backgroundColor: '#8F5A3A',
        width: '100%',
        height: '80%',
      }}
      onClick={(event) => 
          {clickMef(event)
          }}
      className={t.div}
      >
      
        <IconButton name="hotel"
        className={t.ico} >
            <HotelIcon style={{
              color: '#ffffff',
              fontSize: '100px',
            }} />
          </IconButton>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <h1 className={t.h1}>Hotels</h1>
            <p className={t.p}>Hotels with great deals</p>
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
        </CardActions>
      </Card>
    );
  }
  else{
      return (
      <Card sx={{ maxWidth: 345 }} style={{
        backgroundColor: '#8F5A3A',
        width: '100%',
        height: '80%',
      }}
      onClick={(event) => 
          {clickMet(event)
          }}
      className={t.div}>
      
      <IconButton className={t.ico}>
            <BungalowIcon style={{
              color: '#ffffff',
              fontSize: '100px',
            }} />
          </IconButton>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <h1 className={t.h1}>Stay</h1>
            <p className={t.p}>Where you feel like your home</p>
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
        </CardActions>
      </Card>
      );
      }

}