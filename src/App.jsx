import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroBanner from './Components/HeroBanner'
import Navbar from './Components/Navbar'
import Dishes from './Components/Dishes'
import About from './Components/About'
import Mission from './Components/Mission'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='overflow-y-hidden text-netural-200 antialiased'>
    <HeroBanner />
    <Navbar />
    <Dishes />
    <About />
    <Mission/>
    </main>
  )
}

export default App
