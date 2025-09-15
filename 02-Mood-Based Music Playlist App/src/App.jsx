import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TrackInfo from './components/TrackInfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TrackInfo/>
    </>
  )
}

export default App
