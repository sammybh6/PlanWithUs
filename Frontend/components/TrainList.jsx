import React from 'react';
import axios from 'axios';
import React from 'react'
import axios from 'axios';
export default function TrainList(props) {
  const [trainData, setTrainData] = React.useState([]);
  const trains = {
    method: 'GET',
    url: 'https://irctc1.p.rapidapi.com/api/v2/trainBetweenStations',
    params: { fromStationCode: 'bju', toStationCode: 'bdts' },
    headers: {
      'X-RapidAPI-Key': 'eae621fa64msh38da454e381a490p144e25jsnf56d14a1ff1e',
      'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
    }
  };
  React.useEffect(() => {
    getTrainData();
  }, []);
  const getTrainData = () => {
    axios.request(trains).then(function (response) {
      console.log(response.data);
      setTrainData(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }

  return (

    <div>gaytri
      {trainData}
    </div>
  )
}
