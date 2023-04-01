import React from 'react'
import axios from 'axios';

import { Navigation } from './Navigation';

export default function HotelList() {
    const [locationid, setlocationid] = React.useState();
    const options1 = {
        method: 'GET',
        url: 'https://travel-advisor.p.rapidapi.com/locations/search',
        params: {
            query: 'Jabalpur',
            limit: '30',
            offset: '0',
            units: 'km',
            location_id: '1',
            currency: 'USD',
            sort: 'relevance',
            lang: 'en_US'
        },
        headers: {
            'X-RapidAPI-Key': 'ba35c709c4msh1cddd9faeb06c26p1d8858jsnb908a9ad561a',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
    };

    React.useEffect(() => {
        getLocationId();
    }, []);
    const getLocationId = () => {
        axios.request(options1).then(function (response) {
            // console.log(response.data);
            setLocationid(response.data.data[0].result_object.location_id);
        }).catch(function (error) {
            console.error(error);
        });
    }

    const lid=locationid;
    console.log(lid);
    const options = {
        method: 'GET',
        url: 'https://travel-advisor.p.rapidapi.com/hotels/get-details',
        params: {
            location_id: lid,
            checkin: '2023-04-15',
            adults: '1',
            lang: 'en_US',
            currency: 'INR',
            nights: '2'
        },
        headers: {
            'X-RapidAPI-Key': 'ba35c709c4msh1cddd9faeb06c26p1d8858jsnb908a9ad561a',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
    };

    React.useEffect(()=>{
        getHotelList();
    },[])
    const getHotelList=()=>{
        axios.request(options).then(function (response) {
            console.log(response.data);
            setHotelList(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }
    console.log(hotelList);

    return (
        <div>
            <Navigation/>
            {hotelList && hotelList.data.map((hotel)=>{
                return(
                    <h1>{hotel.name}</h1>
                )
            })}
        </div>
    )
}