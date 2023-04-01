import React from 'react'
import axios from 'axios';

export default function HotelList() {
    const [locationid, setlocationid] = React.useState();
    const options1 = {
        method: 'GET',
        url: 'https://travel-advisor.p.rapidapi.com/locations/search',
        params: {
            query: 'pattaya',
            limit: '30',
            offset: '0',
            units: 'km',
            location_id: '1',
            currency: 'USD',
            sort: 'relevance',
            lang: 'en_US'
        },
        headers: {
            'X-RapidAPI-Key': 'eae621fa64msh38da454e381a490p144e25jsnf56d14a1ff1e',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
    };

    React.useEffect(() => {
        getLocationId();
    }, []);
    const getLocationId = () => {
        axios.request(options1).then(function (response) {
            // console.log(response.data);
            setlocationid(response.data.data);
        }).catch(function (error) {
            console.error(error);
        });
    }
    console.log(locationid[0].result_object);
    // const options = {
    //     method: 'GET',
    //     url: 'https://travel-advisor.p.rapidapi.com/hotels/get-details',
    //     params: {
    //         location_id: '10359481',
    //         checkin: '2022-03-15',
    //         adults: '1',
    //         lang: 'en_US',
    //         currency: 'USD',
    //         nights: '2'
    //     },
    //     headers: {
    //         'X-RapidAPI-Key': 'eae621fa64msh38da454e381a490p144e25jsnf56d14a1ff1e',
    //         'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    //     }
    // };

    // axios.request(options).then(function (response) {
    //     console.log(response.data);
    // }).catch(function (error) {
    //     console.error(error);
    // });
    return (
        <div>
        </div>
    )
}
