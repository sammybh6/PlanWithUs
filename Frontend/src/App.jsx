import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Test from '../components/test'
import {Navigation}  from '../components/Navigation'
import Forms from '../components/Forms'
import Header from '../components/Header'
import TravelForm from '../components/TravelForm'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import FlightList from '../components/FlightList'
import TrainList from '../components/TrainList'
// import TravelSection from '../components/TravelSection'

function App() {
  const [count, setCount] = useState(0)
  // <FlightList data={flightData} />
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/test" element={<Test/>}/>
        <Route path="/flight" element={<FlightList/>}/>
        <Route path="/train" element={<TrainList/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
