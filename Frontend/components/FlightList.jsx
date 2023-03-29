import React from 'react'
import axios from 'axios';
import * as cheerio from 'cheerio';

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

export default function FlightList() {
    const [flightData, setFlightData] = React.useState([]);
    const flights = {
        method: 'GET',
        url: `https://timetable-lookup.p.rapidapi.com/TimeTable/jlr/pnq/20230428/`,
        headers: {
            'X-RapidAPI-Key': 'eae621fa64msh38da454e381a490p144e25jsnf56d14a1ff1e',
            'X-RapidAPI-Host': 'timetable-lookup.p.rapidapi.com'
        }
    };
    React.useEffect(() => {
        getFlightData();
    }, [])
    const getFlightData = () => {

        axios.request(flights).then(function (response) {
            const json = xmlToJson(response.data);
            console.log(json);
            setFlightData(json);
        }).catch(function (error) {
            console.error(error);
        });
    }

  //   const config = {
  //     headers: {
  //         'Access-Control-Allow-Origin',
  //         'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36' ',
  //     },
  // };
  
  //   const url="https://www.makemytrip.com/flight/search?itinerary=DEL-BLR-27/03/2023&tripType=O&paxType=A-1_C-0_I-0&intl=false&cabinClass=E&ccde=IN&lang=eng"
  //   console.log(url)
  //   axios.get(url, config)
  //       .then(res => {
  //           const $ = cheerio.load(res.data)
  //           const tt=$(".listingCard").text()
  //           console.log(tt)
  //       }).catch(err => console.error(err))

    return (
        <div>
            <h1>Flight List</h1>
            {/* {flightData} */}
        </div>
    )
}
