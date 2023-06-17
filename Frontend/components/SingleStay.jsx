import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useLocation } from 'react-router-dom';
import { borderRight } from '@mui/system';
import Navigation from './Navigation';
import sh from "../components/style/singleHotel.module.css";
import { postData } from './utils/Rest';
import Button from '@mui/material/Button';

export default function SingleStay() {
    const location = useLocation();
    const singleStay = location.state;


    const pId = sessionStorage.getItem('newPackage');

    const bookStay = async () => {
        const data = {
            stayName: singleStay.name,
            stayDestination: singleStay.city,
            stayType: `AirBnb`,
            stayPrice: singleStay.price.total
        }
        const res = await postData(`package/${pId}/stay`, true, data);
        console.log(res);
    }

    return (
        <div >
            <Navigation />
            <div classname={sh.gallery} style={{ display: 'flex', flexDirection: 'row', padding: '30px' }}>
                <Box style={{ width: '45vw', height: '80vh', overflowY: 'scroll' }}>
                    <div style={{ marginBlockStart: "2 em" }}>
                        <ImageList variant="masonry" cols={2} gap={8}>
                            {singleStay.images && singleStay.images.map((item) => (
                                <ImageListItem key={item}>
                                    <img
                                        src={`${item}`}
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </div>
                </Box>
                <div className={sh.details}>
                    <div className={sh.heading}>
                        <h1 style={{ fontSize: '42px' }}>{singleStay.name}</h1>
                        <span style={{ color: "#562B08", fontWeight: "bold", fontSize: "1em" }}>{`Ratings: ${singleStay.rating}`}</span>
                    </div>
                    <div className={sh.address}>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                        }}>
                            <h3>{singleStay.address}</h3>
                            {/* <h3>{`${singleStay.city}, ${singleStay.country_trans}`}</h3> */}
                        </div>
                        <span style={{ color: "#562B08", fontWeight: "bold", fontSize: "1em" }}>{`${singleStay.type}`}</span>
                    </div>
                    <div className={sh.facilities}>
                        <div className={sh.facilitiesList}>
                            <ul className={sh.facility}>
                                <li>{`Bedrooms: ${singleStay.bedrooms}`}</li>
                            </ul>
                            <ul className={sh.facility}>
                                <li>{`Beds: ${singleStay.beds}`}</li>
                            </ul>
                            <ul className={sh.facility}>
                                <li>{`Bathrooms: ${singleStay.bathrooms}`}</li>
                            </ul>
                        </div>
                        <div className={sh.facilitiesList}>
                            {/* <h4>Amenities</h4> */}
                            {singleStay.previewAmenities.map((item) => (
                                <ul className={sh.facility}>
                                    <li>{`${item}`}</li>
                                </ul>
                            ))}
                        </div>

                    </div>
                    <div className={sh.rbtn}>
                        <h3>{`Rate: ${singleStay.price.total} ${singleStay.price.currency}`}</h3>
                        <div class="btn-holder">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


