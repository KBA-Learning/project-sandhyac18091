import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import caption from '../assets/images/caption.jpg';
import z from '../assets/images/z.jpg';
import p from '../assets/images/p.jpg';

const Discover = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 text-center">
      <br />
      <br />
      <br />
      <img 
        src={caption}
        alt="Image Description" 
        className="w-3/5 h-3/5 object-cover rounded-lg shadow-lg" 
      /><br />
      
      {/* Heading */}
      <h1 className="text-4xl font-bold text-black mb-6 text-center max-w-3xl">
        Discover the World: Celebrating the Spirit of Travel 2024
      </h1>

      {/* Description */}
      <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl">
        Every journey tells a story, and every traveler leaves a mark. This year, we honor the world’s most beloved destinations, accommodations, experiences, and culinary delights with the 2024 Travelers' Spotlight Awards. These accolades are shaped by your authentic reviews, ratings, and shared adventures over the past year.
        <br />
        The 2024 winners showcase the best places to explore, from stunning landscapes to hidden gems. Whether it's peaceful retreats or vibrant cities, this list celebrates the joy of adventure. Stay tuned as we reveal more winners throughout the year to inspire your next journey.
      </p>

      {/* Destination Section with Link */}
      <div className="relative w-3/5 h-80 mb-8">
        <Link to="/destination" className="block w-full h-full">
          <img 
            src={z} 
            alt="Destination" 
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-white bg-black bg-opacity-50 rounded-lg">
            Destination
          </div>
        </Link>
      </div>

      {/* Beaches Section with Link */}
      <div className="relative w-3/5 h-80 mb-8">
        <Link to="/beaches" className="block w-full h-full">
          <img 
            src={p} 
            alt="Beaches" 
            className="w-full h-80 object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-white bg-black bg-opacity-50 rounded-lg">
            Beaches
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Discover;
