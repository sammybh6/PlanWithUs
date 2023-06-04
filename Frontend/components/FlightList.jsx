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
            'X-RapidAPI-Key': 'ba35c709c4msh1cddd9faeb06c26p1d8858jsnb908a9ad561a',
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

            setFlightData(xml.children.slice(2, 10));
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
                    {/* console.log(flight.attributes); */ }
                    return <FlightListCard flightData={flight} />
                })
            }
        </div>
    )
}
