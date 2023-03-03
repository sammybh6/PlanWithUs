import React from "react";
import axios from "axios";
// const axios = require("axios");
export default function test()
{

    

const options = {
  method: 'GET',
  url: 'https://irctc1.p.rapidapi.com/api/v2/trainBetweenStations',
  params: {fromStationCode: 'jbp', toStationCode: 'pune'},
  headers: {
    'X-RapidAPI-Key': 'ba35c709c4msh1cddd9faeb06c26p1d8858jsnb908a9ad561a',
    'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
  }
};


axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
    return <div>test</div>;
}
