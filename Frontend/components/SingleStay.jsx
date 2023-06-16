import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useLocation } from 'react-router-dom';
import { borderRight } from '@mui/system';
import Navigation from './Navigation';

export default function SingleStay() {
    const location = useLocation();
    const singleStay = location.state;


    return (
        <div >
            <Navigation />
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                {/* <div text-align='center'> */}
                <Box sx={{ width: 600, height: 600, overflowY: 'scroll', padding: 1 }}>
                    <div style={{ marginBlockStart: "2 em" }}>
                        <ImageList variant="masonry" cols={2} gap={8}>
                            {singleStay.images && singleStay.images.map((item) => (
                                <ImageListItem key={item}>
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
                <Box sx={{ width: 600, height: 600, padding: 1 }}>
                    <div style={{ marginBlockStart: "1.5 em" }}>
                        <h1 style={{ color: "#562B08" }}>{singleStay.name}</h1>
                        <h2>{singleStay.city}</h2>
                        <br />
                        <span style={{ color: "#562B08", fontWeight: "bold", fontSize: "1em" }}>{singleStay.type}</span>
                        <h2>{singleStay.price.total}</h2>
                    </div>
                </Box>
            </div>
        </div>
    );
}


