import React from 'react';
import { CUSINES } from '../constants';

const Experties = () => {
  return (
    <section id='expertise'>
      <h3 className="my-8 text-white text-center tracking-tighter lg:text-4xl text-2xl">Our Expertise</h3>
      <div className="container mx-auto px-4">
        {CUSINES.map((cusion, index) => (
          <div key={index} className='flex flex-col md:flex-row items-center border-b-4 border-dotted border-neutral-700/40 py-2'>
            <div className='flex-shrink-0 text-white pr-8 text-2xl'>{cusion.number}</div>
            <div className="w-full md:w-1/2 flex-shrink-0 mt-4 md:mt-0">
              <img src={cusion.image} alt={cusion.title} className='h-auto rounded-3xl mx-auto' />
            </div>
            <div className="pl-8 mt-4 md:mt-0 text-center md:text-left">
              <h3 className="text-2xl uppercase tracking-tighter text-rose-300">
                {cusion.title}
              </h3>
              <p className="mt-4 text-lg tracking-tighter text-white">
                {cusion.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experties;
