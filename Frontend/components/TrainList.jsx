import React from 'react';
import axios from 'axios';
import Loading from './Loading'; import { Navigation } from '../components/Navigation'
import TravelCard from './TravelCard';
import TrainListCard from './TrainListCard';
import { useLocation } from 'react-router-dom';

export default function TrainList(props) {
  const location = useLocation();
  console.log(location.state);
  const [trainData, setTrainData] = React.useState();
  const trains = {
    method: 'GET',
    url: 'https://irctc1.p.rapidapi.com/api/v2/trainBetweenStations',
    params: { fromStationCode: 'bju', toStationCode: 'bdts' },
    headers: {
      'X-RapidAPI-Key': 'fa80125835msha1dfd0fa1db0c02p183390jsn955d222b6b09',
      'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
    }
  };
  React.useEffect(() => {
    getTrainData();
  }, []);
  const getTrainData = () => {
    axios.request(trains).then(function (response) {
      setTrainData(response.data.data);
    }).catch(function (error) {
      console.error(error);
    });
  }
  // console.log(trainData);


  return (

    <div >
      <Navigation />
      {
        (trainData) ? trainData.map((train) => {
          return (
            <TrainListCard train={train} />
          )
        }) : <Loading />
      }
    </div>
  )
}
