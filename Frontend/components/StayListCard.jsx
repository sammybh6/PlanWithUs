import React from 'react'
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import slc from "../components/style/StayListCard.module.css";
import { Link } from 'react-router-dom';
import SingleStay from './SingleStay';

export default function StayListCard({ stay }) {
    //   let images=stay?stay.images:[];
    const fonts = (stay.name.length > 20) ? '0.2em' : '1em';
    return (
        <Link to='/singleStay' state={stay} style={{ textDecoration: 'none' }}>
            <div>
                {/* {stay && <SingleStay singleStay={stay.images} />} */}
                <div className={slc.main}>
                    <div className={slc.wrapper}>
                        {/* <h1>PHILIPPINES</h1> */}
                        <div className={slc.image} style={{ backgroundImage: `url(${stay.images[0]})` }}>
                        </div>
                        <div className={slc.details}><h1><em>₹ {stay.price.total}</em></h1>
                            <h2>{stay.city}</h2>
                            <p>{ ljljedl }</p></div>
                        <p style={{ color: "#562B08", fontWeight: "bold", fontSize: "1em" }}>{stay.name}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}
