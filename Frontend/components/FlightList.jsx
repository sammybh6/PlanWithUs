import React from 'react'
import axios from 'axios';
import FlightListCard from './FlightListCard';
import XMLParser from 'react-xml-parser';


export default function FlightList() {
    const [flightData, setFlightData] = React.useState([]);
    const flights = {
        method: 'GET',
        url: `https://timetable-lookup.p.rapidapi.com/TimeTable/bom/del/20230628/`,
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

            let xml = new XMLParser().parseFromString(response.data);
            console.log(xml);


            setFlightData(xml.children.slice(2,5));
        }).catch(function (error) {
            console.error(error);
        });
    }

    console.log(flightData);
    return (


        <div>
            {/* <Navigation /> */}
            <h1>Flight List</h1>
            {
                flightData.map((flight) => {
                    console.log(flight.attributes);
                    return <FlightListCard flightData={flight} />
                })
            }
        </div>
    )
}
