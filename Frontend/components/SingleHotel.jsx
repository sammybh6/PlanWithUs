import React from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Navigation from './Navigation';
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

    return (
        <div>
            <Navigation />
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Box sx={{ width: 600, height: 700, overflowY: 'scroll', padding: 1 }}>
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
                <Box sx={{ width: 600, height: 700, padding: 1 }}>
                    <div style={{ marginBlockStart: "1.5 em" }}>
                        <h1>{singleHotel.hotel_name}</h1>
                        <h1>{singleHotel.address}</h1>
                        <h2>{singleHotel.city}</h2>
                        <h2>{singleHotel.country}</h2>
                        <br />
                        <span style={{ color: "#562B08", fontWeight: "bold", fontSize: "1em" }}>{singleHotel.review_score}</span>
                        <h2>{`Rate: ${singleHotel.price_breakdown.all_inclusive_price} ${singleHotel.price_breakdown.currency}`}</h2>
                        <span>{`Checkin: ${singleHotel.checkin.from} `}</span>
                        <span>{`Checkout: ${singleHotel.checkout.until}`}</span>
                    </div>
                </Box>
            </div>
        </div>
    );
}
