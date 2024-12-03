import React from 'react';
import beach from '../assets/images/2.jpg'
import x from '../assets/images/x.jpg'

const Beaches = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 text-center">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-black mb-6 text-center max-w-3xl">
        Discover the World: Celebrating the Spirit of Travel 2024
      </h1>
  
      <div className="relative w-full h-[500px] mb-8">
        <img 
          src={beach}
          alt="Best Destination" 
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-white bg-black bg-opacity-50 rounded-lg font-sans">
          Best of the Best Beaches
        </div>
      </div>
  
      {/* Description */}
      <h2 className="text-3xl font-bold text-black mb-6">
        World
      </h2>
  
      <p className="text-lg text-gray-700 mb-8 max-w-3xl leading-relaxed">
        Golden sands, rugged coastlines, clear blue waters—this year’s winning beaches are traveller faves for everything from lazy beach days to underwater adventures.
        <br />
        The Travellers’ Choice Awards Best of the Best title celebrates the highest level of excellence in travel. It’s awarded to those who receive a high volume of above-and-beyond reviews and opinions from the Tripadvisor community over a 12-month period. Out of our 8 million listings, fewer than 1% achieve this milestone.
      </p>
    
      <div className="relative w-3/5 h-full mb-8">
        <img 
          src={x}
          alt="Destination" 
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-white bg-black bg-opacity-50 rounded-lg">
          {/* Text for this section can go here if needed */}
        </div>
      </div>
    </div>
  );
}

export default Beaches;
