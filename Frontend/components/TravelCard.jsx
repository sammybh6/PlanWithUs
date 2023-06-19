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
// import TrainList from './TrainList';
import { Link, useNavigate } from 'react-router-dom';
import { get, set } from 'react-hook-form';



export default function TravelCard(props) {

  const [srcCode, setSrcCode] = React.useState("");
  const [destCode, setDestCode] = React.useState("");
  console.log(props.data); 
  const handleIconClicks = name => () => {
    console.log(name);
  }
  if (props.icon === "flight") {

    const srcAiprort = (props.data.data)?props.data.data.Source:"";
    const destAiprort = (props.data.data)?props.data.data.Destination:"";
    React.useEffect(() => {
      
    }, []);


  function getAirportCode(text, code) {
    axios.request({
      method: 'GET',
      url: 'https://aerodatabox.p.rapidapi.com/airports/search/term',
      params: {
        q: `${text}`,
        limit: '10'
      },
      headers: {
        'X-RapidAPI-Key': 'eae621fa64msh38da454e381a490p144e25jsnf56d14a1ff1e',
        'X-RapidAPI-Host': 'aerodatabox.p.rapidapi.com'
      }
  }).then( function (response) {
      // console.log(response.data.items[0].iata);
      if(code==="src"){
        setSrcCode(response.data.items[0].iata);
      }
      else{
        setDestCode(response.data.items[0].iata);
      }
    }).catch(function (error) {
      console.error(error);
    });
  }

    
    

    // getAirportCode(srcAiprort, "src");
    //   getAirportCode(destAiprort, "dest");
    console.log(srcCode);
    console.log(destCode);

    // props.data.data.Source=srcCode;
    // props.data.data.Destination=destCode;
    return (
      
      <Card sx={{ maxWidth: 345 }} style={{
        backgroundColor: '#8F5A3A',
        width: '100%',
        height: '80%',
      }}
        className={t.div}
      >
        <Link to="/flights" state={props.data}  style={{
        textDecoration: 'none',
          }}>
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
        </Link>
      </Card >
    );
  }
  else {


    return (
      <Card sx={{ maxWidth: 345 }} style={{
        backgroundColor: '#8F5A3A',
        width: '100%',
        height: '80%',
      }}
        className={t.div}>
      <Link to="/trains" state={props.data.data} style={
        {
          textDecoration: 'none',
        }
      }>

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
      </Link>
      </Card>
    );
  }

}
