import React from 'react'
import { useState } from 'react'
import { Navigation } from '../components/Navigation'
import Forms from '../components/Forms'
import Header from '../components/Header'
import TravelForm from '../components/TravelForm'

export default function Home() {
    return (
        <div>
            <Navigation />
            <Header />

            <TravelForm />

            <Forms />
        </div>
    )
}
