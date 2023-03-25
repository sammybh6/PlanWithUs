import React from 'react'
import axios from 'axios';
export default function TrainList(props) {
  const trains = {
    method: 'GET',
    url: 'https://irctc1.p.rapidapi.com/api/v2/trainBetweenStations',
    params: {fromStationCode: `${props.data["Source"]}`, toStationCode: `${props.data["Destination"]}`},
    headers: {
      'X-RapidAPI-Key': 'eab84aa50dmshc6837e929d1b85bp1cd023jsn0fd6a2f99ee0',
      'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
    }
  };

  // axios.request(trains).then(function (response) {
  //   console.log(response.data);
  //   setTrainData(response.data);
  // }).catch(function (error) {
  //   console.error(error);
  // });
  return (
    <div>gaytri</div>
  )
}
