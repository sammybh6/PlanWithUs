import React from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import sh from "../components/style/SingleHotel.module.css";
import Navigation from './Navigation';
import { Button } from '@mui/material';


export default function SingleHotel() {
    const location = useLocation()
    const singleHotel = location.state;
    const hid = (location.state.hotel_id)
    const [hotelImages, setHotelImages] = React.useState();

    const options = {
        method: 'GET',
        url: 'https://booking-com.p.rapidapi.com/v1/hotels/photos',
        params: {
            hotel_id: `${hid}`,
            locale: 'en-gb'
        },
        headers: {
            'X-RapidAPI-Key': 'eae621fa64msh38da454e381a490p144e25jsnf56d14a1ff1e',
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
            'X-RapidAPI-Key': 'eae621fa64msh38da454e381a490p144e25jsnf56d14a1ff1e',
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
        <Button onClick={()=>setPageNumber(pageNumber+1)}>Next</Button>

                    </div>

                    <br />
                    <div className={sh.timings}>
                        <span>{`Checkin: ${singleHotel.checkin.from} `}</span>
                        <span>{`Checkout: ${singleHotel.checkout.until}`}</span>
                    </div>
                    <br />
                    <div className={sh.rbtn}>
                        <h3>{`Rate: ${singleHotel.price_breakdown.all_inclusive_price} ${singleHotel.price_breakdown.currency}`}</h3>
                        <div class="btn-holder">
                            <button type="button" className='btn'>Click</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
