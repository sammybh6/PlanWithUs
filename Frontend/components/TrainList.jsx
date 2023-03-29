import React from 'react';
import axios from 'axios';

export default function TrainList(props) {
  const [trainData, setTrainData] = React.useState([]);
  const trains = {
    method: 'GET',
    url: 'https://irctc1.p.rapidapi.com/api/v2/trainBetweenStations',
    params: { fromStationCode: 'bju', toStationCode: 'bdts' },
    headers: {
      'X-RapidAPI-Key': 'ba35c709c4msh1cddd9faeb06c26p1d8858jsnb908a9ad561a',
      'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
    }
  };
  React.useEffect(() => {
    getTrainData();
  }, []);
  const getTrainData = () => {
    axios.request(trains).then(function (response) {
      console.log(response.data);
      setTrainData(response.data.data);
    }).catch(function (error) {
      console.error(error);
    });
  }
  // console.log(trainData.data[0]);

  
  return (

    <div>gaytri
      {trainData && trainData.map((e)=>{
        return(
          <div>{e}</div>
        )
      })}
    </div>
  )
}
