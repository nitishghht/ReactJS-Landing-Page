import React from 'react'
import Video from '../assets/mission2.mp4';
const Mission = () => {
  return (
    <section id='mission'>
        <div className="container mx-auto text-center">
            <h2 className="mb-8 text-3xl text-white lg:text-4xl">
                Our Mission
            </h2>
            <div className="relative flex items-center justify-center">
                <video src={Video} className="w-full rounded-3xl " autoPlay muted></video>
            </div>
        </div>
    </section>
  )
}

export default Mission