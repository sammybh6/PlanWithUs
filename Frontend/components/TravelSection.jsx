import React from 'react'
import TravelCard from './TravelCard'
import ts from './style/TravelSection.module.css'
export default function TravelSection() {
  return (
    <div className={ts.transport}>
        <TravelCard  icon={"flight"}/>
        <TravelCard  icon={"train"}/>
    </div>
  )
}
