import React from 'react'
import axios from 'axios';
import Loading from './Loading';
import { Navigation } from './Navigation';
import HotelListCard from './HotelListCard';
import { useLocation } from 'react-router-dom';
import { Button } from '@mui/material';

export default function HotelList() {
    const loc=useLocation();
    const { Destination, DateofArrival, DateofDeparture, No_of_people} = loc.state;
    console.log(Destination, DateofArrival, DateofDeparture, No_of_people);
    const [pageNumber, setPageNumber] = React.useState(0);
    const [locationid, setLocationId] = React.useState();
    const [hotelList, setHotelList] = React.useState();
    const options1 = {
        method: 'GET',
        url: 'https://booking-com.p.rapidapi.com/v1/hotels/locations',
        params: {
            name: Destination,
            locale: 'en-gb'
        },
        headers: {
            'X-RapidAPI-Key': 'eab84aa50dmshc6837e929d1b85bp1cd023jsn0fd6a2f99ee0',
            'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
        }
    };

    React.useEffect(() => {
        getLocationId();
    }, []);
    const getLocationId = () => {
         axios.request(options1).then(function (response) {
            console.log(response.data);
            setLocationId(response.data[0].dest_id);
        }).catch(function (error) {
            console.error(error);
        });
    }



    const place = locationid;
    console.log(place);
    const options = {
        method: 'GET',
        url: 'https://booking-com.p.rapidapi.com/v1/hotels/search',
        params: {
            checkin_date: '2023-09-27',
            dest_type: 'city',
            units: 'metric',
            checkout_date: '2023-09-28',
            adults_number: '2',
            order_by: 'popularity',
            dest_id:  `${place}`,
            filter_by_currency: 'INR',
            locale: 'en-gb',
            room_number: '1',
            page_number: `${pageNumber}`,
            include_adjacency: 'true'
        },
        headers: {
            'X-RapidAPI-Key': 'eab84aa50dmshc6837e929d1b85bp1cd023jsn0fd6a2f99ee0',
            'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
        }
      };
    React.useEffect(() => {
        getHotelList();
    }, [locationid,pageNumber])
    const getHotelList = () => {
        axios.request(options).then(function (response) {
            console.log(response.data);
            setHotelList(response.data.result);
        }).catch(function (error) {
            console.error(error);
        });
    }


    return (
        <div >
            <Navigation />
            {(hotelList) ? hotelList.map((hotel) => {
                return (
                    <div>
                        <HotelListCard hotel={hotel} />
                    </div>
                )
            }) : <Loading />
            }
            
            <div>

                <Button  onClick={() => setPageNumber(pageNumber + 1)}>Next</Button>
                {pageNumber>0 && <Button onClick={()=> setPageNumber(pageNumber-1 )}>Previous</Button>}
            </div>
        </div>
    )
}