import React from 'react'
import axios from 'axios';
import { NativeSelect } from '@mui/material';
import Loading from './Loading';
import { Navigation } from './Navigation';
// const axios = require("axios");

export default function StayList() {
    // const [locationId, setLocationId] = React.useState();
    // const [stayList, setStayList] = React.useState();
    // const options1 = {
    //     method: 'GET',
    //     url: 'https://airbnb19.p.rapidapi.com/api/v1/searchDestination',
    //     params: { query: 'Pune', country: 'IND' },
    //     headers: {
    //         'X-RapidAPI-Key': 'eae621fa64msh38da454e381a490p144e25jsnf56d14a1ff1e',
    //         'X-RapidAPI-Host': 'airbnb19.p.rapidapi.com'
    //     }
    // };
    // React.useEffect(() => {
    //     getLocationId();
    // }, []);
    // const getLocationId = () => {

    //     axios.request(options1).then(function (response) {
    //         console.log(response.data.data[0]);
    //         // setLocationId(response.data.data[0].id);
    //     }).catch(function (error) {
    //         console.error(error);
    //     });
    // }
    // const place = locationId;
    // console.log(place);

    // const options = {
    //     method: 'GET',
    //     url: 'https://airbnb19.p.rapidapi.com/api/v1/searchPropertyByPlace',
    //     params: {
    //         id: place,
    //         display_name: 'Pune',
    //         totalRecords: '10',
    //         currency: 'INR',
    //         adults: '1'
    //     },
    //     headers: {
    //         'X-RapidAPI-Key': 'eae621fa64msh38da454e381a490p144e25jsnf56d14a1ff1e',
    //         'X-RapidAPI-Host': 'airbnb19.p.rapidapi.com'
    //     }
    // };
    // React.useEffect(() => {
    //     getStayList();
    // }, [])
    // const getStayList = () => {
    //     axios.request(options).then(function (response) {
    //         console.log(response.data);
    //         setStayList(response.data);
    //     }).catch(function (error) {
    //         console.error(error);
    //     });
    // }

    const options = {
        method: 'GET',
        url: 'https://airbnb13.p.rapidapi.com/search-location',
        params: {
            location: 'Mumbai',
            checkin: '2023-09-16',
            checkout: '2023-09-17',
            adults: '1',
            children: '0',
            infants: '0',
            pets: '0',
            page: '1',
            currency: 'INR'
        },
        headers: {
            'X-RapidAPI-Key': 'eae621fa64msh38da454e381a490p144e25jsnf56d14a1ff1e',
            'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
        }
    };
    const [stayList, setStayList] = React.useState();
    // React.useEffect(() => {
    //     getStayList();
    // }, [])
    // const getStayList = () => {
    //     axios.request(options).then(function (response) {
    //         console.log(response.data.results);
    //         setStayList(response.data.results);
    //     }).catch(function (error) {
    //         console.error(error);
    //     });
    // }
    console.log(stayList);
    return (
        <div>
            <Navigation />
            <Loading />
            {/* {(stayList) ? stayList.map((stay) => {
                return (
                    <div>{stay.name}</div>
                )
            }) : <Loading />} */}
            Samyak
        </div>
    )
}