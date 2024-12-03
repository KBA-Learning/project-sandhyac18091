import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    
    const userType = localStorage.getItem('userType');
    if (userType === 'admin') {
      setIsAdmin(true);  
    }
  }, []);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link to="#" className="text-2xl font-bold text-gray-800">ExploreGo</Link>
        <ul className="hidden md:flex space-x-6">
          <li><Link to={'/home'}>Home</Link></li>
          <li><Link to={'/review'}>Review</Link></li>
          <li><Link to={'/reccomandation'}>Reccomandation</Link></li>
          <li><Link to={'/discover'}>Discover</Link></li>
          <li><Link to={'/viewreview'}>View Reviews</Link></li>

          
          {isAdmin && <li><Link to="/addplace">Add Place</Link></li>}

          <li><Link to={'/'}>Logout</Link></li>
        </ul>
        <button className="md:hidden text-gray-800 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
