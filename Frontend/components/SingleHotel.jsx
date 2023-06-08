
import React from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Navigation from './Navigation';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default async function SingleHotel() {
    const location = useLocation();
    const singleHotel = location.state;

    // const axios = require('axios');
    const [data, setData] = React.useState(null);
    const options = {
        method: 'GET',
        url: 'https://booking-com.p.rapidapi.com/v1/hotels/photos',
        params: {
            hotel_id: `${singleHotel.hotel_id}`,
            locale: 'en-gb'
        },
        headers: {
            'X-RapidAPI-Key': 'eae621fa64msh38da454e381a490p144e25jsnf56d14a1ff1e',
            'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
        setData(response.data);
    } catch (error) {
        console.error(error);
    }

    return (
        <div><Navigation />
            <Box sx={{ width: 600, height: 600, overflowY: 'scroll', padding: 1 }}>
                <div style={{ marginBlockStart: "2 em" }}>
                    <ImageList variant="masonry" cols={2} gap={8}>
                        {data && data.map((item) => (
                            <ImageListItem key={item.url_max}>
                                <img
                                    src={`${item}`}
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
        </div>
    )
}

