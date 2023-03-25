import React from 'react'
import TravelCard from './TravelCard'
import ts from './style/TravelSection.module.css'




export default function TravelSection(props) {


  return (

    <div className={ts.transport}>
      <TravelCard icon={"flight"} data={props.data} />
      <TravelCard icon={"train"} data={props.data} />
    </div>
  )
}
