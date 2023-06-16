import React from 'react'

import slc from "../components/style/StayListCard.module.css";
import { Link } from 'react-router-dom';
import SingleStay from './SingleStay';

export default function HotelListCard({ hotel }) {
    //   let images=stay?stay.images:[];
    console.log(hotel);
    const fonts = (hotel.hotel_name.length > 20) ? '0.8em' : '1em';
    return (
        <Link to='/singleHotel' state={hotel} style={{ textDecoration: 'none' }}>
            <div>
                {/* {stay && <SingleStay singleStay={stay.images} />} */}
                <div className={slc.main}>
                    <div className={slc.wrapper}>
                        {/* <h1>PHILIPPINES</h1> */}
                        <div className={slc.image} style={{ backgroundImage: `url(${hotel.max_photo_url})` }}>
                        </div>
                        <div className={slc.details}><h1><em>₹ </em></h1>
                            <h2>{hotel.city}</h2>
                            <p>{ }</p></div>
                        <div className={slc.description}>
                            <p style={{ color: "#562B08", fontWeight: "bold", fontSize: "1em" }}>{hotel.hotel_name}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
