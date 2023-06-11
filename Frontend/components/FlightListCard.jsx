import React from 'react'
import flc from '../components/style/FlightListCard.module.css'
import { useContext } from 'react'
import { AuthContext } from '../components/context/authContext'
import { postData } from './utils/Rest';


export default function FlightListCard({ flightData }) {

    const auth = useContext(AuthContext);
    console.log(auth.user);
    const bookFlight = async () => {
        const res = await postData('transport', true, {
            transportName: `${flightData.children[0].children[2].attributes.CompanyShortName}`,
            transportDestination: `${flightData.children[0].children[0].attributes.LocationCode}`
        })
        return res;
    }
    return (
        <div className={flc.main}>
            <div className={flc.card} onClick={bookFlight}>
                <div className={flc.image}>
                    <img src={`../images/${flightData.children[0].children[2].attributes.CompanyShortName}.svg`}
                        height="90px" width="90px"
                    />
                </div>
                <div className={flc.content}>
                    <div>
                        <h3>{flightData.children[0].children[2].attributes.CompanyShortName}</h3>

                    </div>
                    <div className={flc.loc}>
                        <p>{flightData.children[0].attributes.DepartureDateTime.split(':')}</p>
                        <p>{flightData.children[0].attributes.ArrivalDateTime}</p>
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
