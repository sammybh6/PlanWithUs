import React from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Navigation from './Navigation';
import { Button } from '@mui/material';
export default function SingleHotel() {
    const location = useLocation()
    const hid=(location.state.hotel_id)
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
        <Navigation/>
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
        <Button onClick={()=>setPageNumber(pageNumber+1)}>Next</Button>

    </div>
  )
}
