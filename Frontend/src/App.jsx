import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Test from '../components/test'
import Form from '../components/Form'
import {Navigation}  from '../components/Navigation'
import Forms from '../components/Forms'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navigation/>
      <Forms/>
      {/* <Test/> */}
    </div>
  )
}

export default App
