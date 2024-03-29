import React from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import sh from "../components/style/SingleHotel.module.css";
import Navigation from './Navigation';
// import { Button } from '@mui/material';
import { postData } from './utils/Rest';
import Button from '@mui/material/Button';

export default function SingleHotel() {
    const location = useLocation()
    const singleHotel = location.state;
    const hid = (location.state.hotel_id)
    const [hotelImages, setHotelImages] = React.useState();
    const [hotelFacilities, setHotelFacilities] = React.useState();
    const options = {
        method: 'GET',
        url: 'https://booking-com.p.rapidapi.com/v1/hotels/photos',
        params: {
            hotel_id: `${hid}`,
            locale: 'en-gb'
        },
        headers: {
            'X-RapidAPI-Key': 'eab84aa50dmshc6837e929d1b85bp1cd023jsn0fd6a2f99ee0',
            'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
        }
    };

    React.useEffect(() => {
        getHotelImages();
    }, [])
    const getHotelImages = () => {
        axios.request(options).then(function (response) {
            console.log(response.data);
            setHotelImages(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }
    console.log(hotelImages);




    const facilities = {
        method: 'GET',
        url: 'https://booking-com.p.rapidapi.com/v1/hotels/facilities',
        params: {
            hotel_id: `${hid}`,
            locale: 'en-gb'
        },
        headers: {
            'X-RapidAPI-Key': 'eab84aa50dmshc6837e929d1b85bp1cd023jsn0fd6a2f99ee0',
            'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
        }
    };

    React.useEffect(() => {
        getHotelFacilities();
    }, [])
    const getHotelFacilities = () => {
        axios.request(facilities).then(function (response) {
            console.log(response.data);
            setHotelFacilities(response.data.slice(0, 8));
        }).catch(function (error) {
            console.error(error);
        });
    }

    const pId = sessionStorage.getItem('newPackage')

    const bookStay = async () => {
        const data = {
            stayName: `${singleHotel.hotel_name}`,
            stayAddress: `${singleHotel.address}`,
            stayDestination: `${singleHotel.city}`,
            stayType: `Hotel`,
            stayPrice: `${singleHotel.price_breakdown.all_inclusive_price}`
        }
        const sHotel = await postData(`package/${pId}/stay`, true, data)
        console.log(sHotel)
    }



    return (
        <div>
            <Navigation />
            <div classname={sh.gallery} style={{ display: 'flex', flexDirection: 'row', padding: '30px' }}>
                <Box style={{ width: '45vw', height: '80vh', overflowY: 'scroll' }}>
                    <div style={{ marginBlockStart: "2 em" }}>
                        <ImageList variant="masonry" cols={2} gap={8}>
                            {hotelImages && hotelImages.map((item) => (
                                <ImageListItem key={item}>
                                    <img
                                        src={`${item.url_max}`}
                                    // srcSet={{ item } + "?w=248&fit=crop&auto=format&dpr=2 2x"}
                                    // alt={item.title}
                                    // loading="lazy"
                                    />
                                    {/* <ImageListItemBar position="below" title={item.author} /> */}
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </div>
                </Box>
                <div className={sh.details}>
                    <div className={sh.heading}>
                        <h1 style={{ fontSize: '42px' }}>{singleHotel.hotel_name}</h1>
                        <span style={{ color: "#562B08", fontWeight: "bold", fontSize: "1em" }}>{`Ratings: ${singleHotel.review_score}`}</span>
                    </div>
                    <div className={sh.address}>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                        }}>
                            <h3>{singleHotel.address}</h3>
                            <h3>{`${singleHotel.city}, ${singleHotel.country_trans}`}</h3>
                        </div>
                        <span style={{ color: "#562B08", fontWeight: "bold", fontSize: "1em" }}>{`${singleHotel.review_score_word}`}</span>
                    </div>
                    <div className={sh.facilities}>
                        {/* <h3>Facilities</h3> */}
                        <div className={sh.facilitiesList}>
                            {hotelFacilities && hotelFacilities.map((item) => (
                                <ul className={sh.facility}>
                                    <li>{`${item.facility_name}`}</li>
                                </ul>
                            ))}</div>

                    </div>

                    <br />
                    <div className={sh.timings}>
                        <span>{`Checkin: ${singleHotel.checkin.from} `}</span>
                        <span>{`Checkout: ${singleHotel.checkout.until}`}</span>
                    </div>
                    <br />
                    <div className={sh.rbtn}>
                        <h3>{`Rate: ${singleHotel.price_breakdown.all_inclusive_price} ${singleHotel.price_breakdown.currency}`}</h3>
                        {/* <div class="btn-holder"> */}
                        {/* <button type="submit" onClick={bookStay} className='btn'>Click</button> */}
                        <Button variant="contained" onClick={bookStay} style={{
                            color: '#562B08',
                            backgroundColor: 'white',
                            borderRadius: '20px',
                            border: '2px solid #562B08',
                            padding: '10px 20px',
                            '&:hover': {
                                backgroundColor: '#562B08',
                                color: 'white',
                            }
                        }}>Book</Button>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
