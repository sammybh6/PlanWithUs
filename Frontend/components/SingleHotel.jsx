import React from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import sh from "../components/style/SingleHotel.module.css";
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
                        <h3>{singleHotel.address}</h3>
                        <h3>{`${singleHotel.city}, ${singleHotel.country_trans}`}</h3>
                    </div>
                    <br />
                    <span>{`Checkin: ${singleHotel.checkin.from} `}</span>
                    <span>{`Checkout: ${singleHotel.checkout.until}`}</span>
                    <h3>{`Rate: ${singleHotel.price_breakdown.all_inclusive_price} ${singleHotel.price_breakdown.currency}`}</h3>
                </div>
            </div>
        </div>
    );
}
