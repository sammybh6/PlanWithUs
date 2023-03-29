import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Test from '../components/test'


import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import FlightList from '../components/FlightList'
import TrainList from '../components/TrainList'
import HotelList from '../components/HotelList'
import StayList from '../components/StayList'
// import TravelSection from '../components/TravelSection'

function App() {
  const [count, setCount] = useState(0)
  // <FlightList data={flightData} />
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/flights" element={<FlightList />} />
          <Route path="/trains" element={<TrainList />} />
          <Route path='/hotels' element={<HotelList />} />
          <Route path='/stays' element={<StayList />} />
        </Routes>
      </BrowserRouter>



    </div>
  )
}

export default App
