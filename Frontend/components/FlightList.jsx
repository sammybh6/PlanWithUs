import React from 'react'
import axios from 'axios';
import FlightListCard from './FlightListCard';
import XMLParser from 'react-xml-parser';
import Loading from './Loading';
import Navigation from './Navigation';
import { useLocation } from 'react-router-dom';


export default function FlightList() {
    const location = useLocation();
    console.log(location.state);
    if (location.state === undefined) {
        window.location.href = "/";
    }
    const data=location.state.data;
    const { Source, Destination, DateOfJourney } = data;

    const doj=DateOfJourney.split('-').join('');

    const [flightData, setFlightData] = React.useState([]);
    const flights = {
        method: 'GET',
        url: `https://timetable-lookup.p.rapidapi.com/TimeTable/${Source}/${Destination}/${doj}/`,
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
            setFlightData(xml.children.slice(2,xml.children.length-2));
        }).catch(function (error) {
            console.error(error);
        });
    }

    console.log(flightData);
    return (


        <div>
            <Navigation />
            {
                flightData.length === 0 ? <Loading /> :
                flightData.map((flight) => {
                    {/* console.log(flight.attributes); */ }
                    return <FlightListCard flightData={flight} />
                })
            }
        </div>
    )
}
