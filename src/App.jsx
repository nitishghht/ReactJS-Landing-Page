import { useState } from 'react'
import './App.css'
import HeroBanner from './Components/HeroBanner'
import Navbar from './Components/Navbar'
import Dishes from './Components/Dishes'
import About from './Components/About'
import Mission from './Components/Mission'
import Experties from './Components/Experties'
import Review from './Components/Review'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='overflow-y-hidden text-netural-200 antialiased'>
    <HeroBanner />
    <Navbar />
    <Dishes />
    <About />
    <Mission/>
    <Experties/>
    <Review />
    <Contact />
    < Footer />
    </main>
  )
}

export default App
