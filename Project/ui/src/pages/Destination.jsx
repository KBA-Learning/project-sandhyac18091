import React from 'react';
import destination from '../assets/images/3.jpg'
import bea from '../assets/images/b.jpg'

const Destination = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 text-center">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-black mb-6 text-center max-w-3xl">
        Discover the World: Celebrating the Spirit of Travel 2024
      </h1>
  
      <div className="relative w-full h-[500px] mb-8">
        <img 
          src={destination}
          alt="Best Destination" 
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-white bg-black bg-opacity-50 rounded-lg font-sans">
          Best of the Best Destination
        </div>
      </div>
  
      {/* Description */}
      <h2 className="text-3xl font-bold text-black mb-6">
        Trending Destinations - World
      </h2>
  
      <p className="text-lg text-gray-700 mb-8 max-w-3xl leading-relaxed">
        From breathtaking landscapes to hidden gems, the world is full of wonders waiting to be explored. This year, we shine a light on the most trending destinations, unforgettable experiences, and culinary delights that captured the hearts of travelers worldwide.
        <br />
        These awards are crafted from your genuine reviews and adventures, showcasing the best of travel for 2024. Whether it's serene retreats or vibrant urban escapes, let these winners inspire your next unforgettable journey.
      </p>
  
      <div className="relative w-3/5 h-full mb-8">
        <img 
          src={bea} 
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

export default Destination;
