import React from 'react'
import StayCard from './StayCard'
import ts from './style/TravelSection.module.css'
export default function TravelSection(props) {
  return (
    <div className={ts.transport}>
        <StayCard  icon={"hotel"} data={props.data}/>
        <StayCard  icon={"stay"} data={props.data}/>
    </div>
  )
}
