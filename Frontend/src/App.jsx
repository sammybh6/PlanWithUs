import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
// import Test from '../components/test'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import FlightList from '../components/FlightList'
import TrainList from '../components/TrainList'
import HotelList from '../components/HotelList'
import StayList from '../components/StayList'
import GoogleLogin from '../components/GoogleLogin'
import SingleStay from '../components/SingleStay'
import SingleHotel from '../components/SingleHotel'
import PackageList from '../components/PackageList'
import AuthProvider from '../components/context/AuthContext'
import PackageProvider from '../components/context/PackageContext'
import  About from '../components/About'
// import TravelSection from '../components/TravelSection'

function App() {
  // <FlightList data={flightData} />
  return (
    <div>
      <AuthProvider>
        <PackageProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/google' element={<GoogleLogin />} />
              <Route path='/packages' element={<PackageList />} />
              <Route path="/flights" element={<FlightList />} />
              <Route path="/trains" element={<TrainList />} />
              <Route path='/hotels' element={<HotelList />} />
              <Route path='/stays' element={<StayList />} />
              <Route path='/singleStay' element={<SingleStay />} />
              <Route path='/singleHotel' element={<SingleHotel />} />
              <Route path='/about' element={<About/>}/>
            </Routes>
          </BrowserRouter>
        </PackageProvider>
      </AuthProvider>
    </div>
  )
}

export default App
