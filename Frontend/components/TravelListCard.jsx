import React from 'react'
import tlc from "../components/style/TravelListCard.module.css"
export default function TravelListCard(trainData) {
    console.log(trainData.train);
    return (
        <div className={tlc.main}>
            <div className={tlc.card}>
                <div className={tlc.image}>
                    <img src='https://indiadesignsystem.bombaydc.com/assets/india-designs/display/IRCTC/color.svg' />
                </div>
                <div className={tlc.content}>
                    <div>
                        <h3>{trainData.train && trainData.train.train_name}</h3>
                        <p>{trainData.train && trainData.train.train_number}</p>
                    </div>
                    <div className={tlc.loc}>
                        <p>{trainData.train && trainData.train.depart_time}</p>
                        <p>{trainData.train && trainData.train.arrival_time}</p>
                    </div>
                    <div className={tlc.time}>
                        <p>Time</p>
                        <p>Runs on: {trainData.train && trainData.train.run_days}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
