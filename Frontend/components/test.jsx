import React from "react";
import axios from "axios";
// const axios = require("axios");
export default function test()
{

    
// const axios = require("axios");

// const options1 = {
//   method: 'GET',
//   url: 'https://irctc1.p.rapidapi.com/api/v2/trainBetweenStations',
//   params: {fromStationCode: 'jbp', toStationCode: 'pune'},
//   headers: {
//     'X-RapidAPI-Key': 'ba35c709c4msh1cddd9faeb06c26p1d8858jsnb908a9ad561a',
//     'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
//   }
// };

// axios.request(options1).then(function (response) {
//   console.log(response.data);
// }).catch(function (error) {
//   console.error(error);
// });


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

  // Call the parseNode function to convert the root element to JSON
  parseNode(xmlDoc.documentElement, json);

  // Return the converted JSON object
  return json;
}




const options2 = {
  method: 'GET',
  url: 'https://timetable-lookup.p.rapidapi.com/TimeTable/JLR/PNQ/20230228/',
  headers: {
    'X-RapidAPI-Key': 'eae621fa64msh38da454e381a490p144e25jsnf56d14a1ff1e',
    'X-RapidAPI-Host': 'timetable-lookup.p.rapidapi.com'
  }
};

axios.request(options2).then(function (response) {
  const json = xmlToJson(response.data);
	console.log(json);
}).catch(function (error) {
	console.error(error);
});


  return <div>test</div>;
}
