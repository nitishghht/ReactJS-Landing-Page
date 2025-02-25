import React from 'react'
import video from '../assets/hero.mp4'
import bg2 from '../assets/bg2.mp4'
import logo from '../assets/logo.png'
import hero from '../assets/hero.jpeg'
const HeroBanner = () => {
  return (
    <section className="relative flex h-screen items-center justify-center">
        <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
        <video src={bg2} className='h-full w-full object-cover' muted autoPlay loop playsInline poster={hero}></video>
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-70% to-black">
            <div className="relative  z-20 flex h-screen flex-col justify-end pb-20">
                <img src={logo} alt="restaura" className='w-full  p-4' />
                <p className="p-4 text-lg tracking-tighter text-white">Navi Mumbai</p>
            </div>

        </div>
    </section>
  )
}

export default HeroBanner