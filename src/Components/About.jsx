import React from 'react'
import { ABOUT } from '../constants';
import about from '../assets/about.jpeg'

const About = () => {
  return (
    <section className="container mx-auto mb-8 " id='about'>
      <h2 className="mb-8 text-center text-3xl tracking-tighter text-white lg:text-4xl">About US</h2>
      <div className="flex flex-wrap">
        <div className="w-full p-4 lg:w-1/2">
          <img src={about} alt="about" className='rounded-3xl lg:-rotate-3' />
        </div>
        <div className="w-full px-2 lg:w-1/2">
          <h2 className="text-4xl text-white tracking-tighter lg:text-6xl">{ABOUT.header}</h2>
          <div className="mb-6 mt-1 h-2 w-36 bg-rose-300 lg:-rotate-3"></div>
          <p className="m-8 text-2xl text-white leading-relaxed tracking-tight">
            {ABOUT.content}
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
