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

export default function TravelCard(props) {

  console.log(props.icon);
  if(props.icon === "flight"){

    return (
      <Card sx={{ maxWidth: 345 }} style={{
        backgroundColor: '#8F5A3A',
        width: '100%',
        height: '80%',
      }}>
      
        <IconButton className={t.ico}>
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
      }}>
      
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