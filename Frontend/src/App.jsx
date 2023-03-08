import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Test from '../components/test'
import {Navigation}  from '../components/Navigation'
import Forms from '../components/Forms'
import Header from '../components/Header'
import TravelForm from '../components/TravelForm'
import TravelSection from '../components/TravelSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navigation/>

      <Header/>
      <TravelForm/>
      <TravelSection/>
      <Forms/>
      {/* <Test/> */}
    </div>
  )
}

export default App
