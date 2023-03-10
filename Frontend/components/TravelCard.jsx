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


function xmlToJson(xml) {
  // Create a new DOMParser object
  const parser = new DOMParser();

  // Parse the XML response into a DOM object
  const xmlDoc = parser.parseFromString(xml, 'text/xml');

  // Create an empty object to store the converted JSON data
  const json = {};

  // Recursively convert each child node of the root element to JSON
  function parseNode(node, obj) {
    // If the node has child nodes, recursively convert them to JSON
    if (node.hasChildNodes()) {
      for (let i = 0; i < node.childNodes.length; i++) {
        const childNode = node.childNodes[i];

        // If the child node is an element node, convert it to JSON
        if (childNode.nodeType === Node.ELEMENT_NODE) {
          const childObj = {};
          parseNode(childNode, childObj);
          obj[childNode.nodeName] = childObj;
        }
      }
    }
    // If the node has text content, add it to the object
    else if (node.nodeType === Node.TEXT_NODE) {
      obj['value'] = node.textContent.trim();
    }
    // If the node has attributes, add them to the object
    else if (node.nodeType === Node.ELEMENT_NODE && node.hasAttributes()) {
      for (let i = 0; i < node.attributes.length; i++) {
        const attr = node.attributes[i];
        obj[attr.name] = attr.value;
      }
    }
  }
  parseNode(xmlDoc.documentElement, json);
  return json;
}

export default function TravelCard(props) {
  const handleIconClicks = name => () => {
    console.log(name);
  }
  const clickMef = (event) => {
    props.data["Transport"] = "flight";
    console.log(props.data);
    const flights = {
      method: 'GET',
      url: `https://timetable-lookup.p.rapidapi.com/TimeTable/jlr/pnq/20230228/`,
      headers: {
        'X-RapidAPI-Key': 'eae621fa64msh38da454e381a490p144e25jsnf56d14a1ff1e',
        'X-RapidAPI-Host': 'timetable-lookup.p.rapidapi.com'
      }
    };
    axios.request(flights).then(function (response) {
      const json = xmlToJson(response.data);
      console.log(json);
    }).catch(function (error) {
      console.error(error);
    });
  }
  const clickMet = (event) => {
    props.data["Transport"] = "train";
    console.log(props.data);
  }
  console.log(props.icon);
  console.log(props.data);
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