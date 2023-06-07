import React from 'react'
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import slc from "../components/style/StayListCard.module.css";
// import { Link } from 'react-router-dom';
import SingleStay from './SingleStay';

export default function StayListCard({ stay }) {
    return (
        <div>
            < SingleStay singleStay={stay.images} />
            <div className={slc.main}>
                <div className={slc.wrapper}>
                    <h1>PHILIPPINES</h1>
                    <div className={slc.image}></div>
                    <div className={slc.details}><h1><em>Boracay Island</em></h1>
                        <h2>Surfer's Home</h2>
                        <p>3 Days - 2 Nights</p></div>
                    <h1>£750</h1>
                </div>
            </div>
        </div>

    )
}
