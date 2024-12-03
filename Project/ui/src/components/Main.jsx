import React from 'react'
import { Link } from 'react-router-dom';
import Travel from '../assets/images/home.jpeg'; // Adjusted to include the file extension


const Main = () => {
  return (
    <section className="relative min-h-screen bg-gray-100 flex items-center">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-6" data-aos="fade-right">
        <div className="lg:w-1/2">
          <h1 className="text-5xl font-extrabold text-gray-800 leading-snug">
            Discover Your Next Adventure{' '}
            <span className="text-green-600">Explore and Enjoy</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Explore the most amazing tourist places around the world, read reviews, and share your experiences.
          </p>
          <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg text-lg shadow-lg">
            <Link to={'/explorenow'}>Explore Now</Link>
          </button>
        </div>
        <div className="lg:w-1/2">
          <img
            src={Travel}
            alt="Travel Destination"
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
      

      <div className="absolute top-0 left-0 w-32 h-32 bg-green-100 rounded-full opacity-50 transform -translate-x-12 -translate-y-12"></div>
    </section>
  )
}

export default Main