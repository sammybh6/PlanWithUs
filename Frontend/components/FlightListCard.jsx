import React from 'react'
import flc from '../components/style/FlightListCard.module.css'

export default function FlightListCard(flightData) {
    return (
        <div className={flc.main}>
            <div className={flc.card}>
                <div className={flc.image}>
                    {/* <img src='https://indiadesignsystem.bombaydc.com/assets/india-designs/display/IRCTC/color.svg' /> */}
                </div>
                <div className={flc.content}>
                    <div>
                        <h3>{flightData.FLSResponseFields.FlightDetails.FlightLegDetails.MarketingAirline.CompanyShortName}</h3>
                        <p>Flight Name</p>
                    </div>
                    <div className={flc.loc}>
                        <p>Departure</p>
                        <p>Arrival</p>
                    </div>
                    <div className={flc.time}>
                        <p>duration</p>
                        <p>rate</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
