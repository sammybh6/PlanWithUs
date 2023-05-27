import React from 'react';
import axios from 'axios';
import Loading from './Loading';import { Navigation } from '../components/Navigation'
import TravelCard from './TravelCard';
import TravelListCard from './TravelListCard';

export default function TrainList(props) {
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
  // React.useEffect(() => {
  //   getTrainData();
  // }, []);
  // const getTrainData = () => {
  //   axios.request(trains).then(function (response) {
  //     setTrainData(response.data.data);
  //   }).catch(function (error) {
  //     console.error(error);
  //   });
  // }
  // console.log(trainData);
  // {
  //   trainData && trainData.map((train) => {
  //     return (
  //       <div>
  //         <h1>{train.train_name}</h1>
  //         {/* <h1>{train.train_number}</h1> */}
  //       </div>
  //     )
  //   })
  // }
  
  return (

    <div >
      {/* <Loading /> */}
      {/* {
        (trainData) ? trainData.map((train) => {
          return (
            <TravelListCard train={train} />
          )
        }) : <Loading />
      } */}
      <TravelListCard/>
    </div>
  )
}
