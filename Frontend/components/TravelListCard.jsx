import React from 'react'
import tlc from "../components/style/TravelListCard.module.css"
export default function TravelListCard() {
  return (
    <div className={tlc.main}>
        <div className={tlc.card}>
            <div className={tlc.image}>
                <img src='https://indiadesignsystem.bombaydc.com/assets/india-designs/display/IRCTC/color.svg' />
            </div>
            <div className={tlc.content}>
                <div>
                    <h3>Train_Name</h3>
                    <p>Train_No</p>
                </div>
                <div className={tlc.loc}> 
                    <p>Departure</p>
                    <p>Arrival</p>
                </div>
                <div className={tlc.time}>
                    <p>Time</p>
                    <p>Runs on: </p>
                </div>
            </div>
        </div>
    </div>
  )
}
