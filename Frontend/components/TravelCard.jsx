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
import FlightIcon from '@mui/icons-material/Flight';
import DirectionsSubwayFilledIcon from '@mui/icons-material/DirectionsSubwayFilled';
import t from '../components/style/TravelCard.module.css'
import axios from 'axios';
import TrainList from './TrainList';

export default function TravelCard(props) {
  const [trainData, setTrainData] = React.useState([]);
  const handleIconClicks = name => () => {
    console.log(name);
  }
  const clickMef = (event) => {
    props.data["Transport"] = "flight";
    // console.log(props.data);
  }
  const clickMet = (event) => {
    props.data["Transport"] = "train";
    // console.log(props.data);

    const trains = {
      method: 'GET',
      url: 'https://irctc1.p.rapidapi.com/api/v2/trainBetweenStations',
      params: {fromStationCode: `${props.data["Source"]}`, toStationCode: `${props.data["Destination"]}`},
      headers: {
        'X-RapidAPI-Key': 'eae621fa64msh38da454e381a490p144e25jsnf56d14a1ff1e',
        'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
      }
    };

    axios.request(trains).then(function (response) {
      // console.log(response.data);
      setTrainData(response.data);
    }).catch(function (error) {
      console.error(error);
    });
    <TrainList data={trainData} />

  }
  // console.log(props.icon);
  // console.log(props.data);
  if(props.icon === "flight"){
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
      
        <IconButton name="flight_takeoff"
        className={t.ico} onClick={handleIconClicks("flight_takeoff")}
        >
            <FlightIcon style={{
              color: '#ffffff',
              fontSize: '100px',
            }} />
          </IconButton>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <h1 className={t.h1}>Take a Flight!</h1>
            <p className={t.p}>Have a safe flight!</p>
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
            <DirectionsSubwayFilledIcon style={{
              color: '#ffffff',
              fontSize: '100px',
            }} />
          </IconButton>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <h1 className={t.h1}>Take a Train!</h1>
            <p className={t.p}>Have a safe journey!</p>
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
        </CardActions>
      </Card>
      );
      }

}