import React from 'react'
import { useState } from 'react'
import { Navigation } from '../components/Navigation'
import StayForms from './StayForms'

import Header from '../components/Header'
import TravelForm from '../components/TravelForm'
import StayListCard from './StayListCard'
import SingleStay from './SingleStay'
import PackageModal from './PackageModal'

export default function Home() {
    return (
        <div>
            <Navigation />
            <Header />
            <TravelForm />
            <StayForms />
            {/* <PackageModal /> */}
        </div>
    )

}
