import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Test from '../components/test'
import Form from '../components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Form/>
      hi
      <Test/>
    </div>
  )
}

export default App
