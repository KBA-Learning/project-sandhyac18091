import React from 'react';

const Aboutcontact = () => {
  return (
    <div 
      id="about-contact" 
      className="relative bg-cover bg-center py-20"
      style={{ backgroundImage: "url('abou.jpg')" }} // Use camelCase for inline styles
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Overlay */}
      <div className="container mx-auto text-center relative z-10 space-y-16">

        {/* About Us Section */}
        <div>
          <h2 className="text-4xl font-bold text-white">About Us</h2>
          <p className="mt-4 text-lg text-gray-100 max-w-2xl mx-auto">
            At ExploreGo, we believe that the essence of travel lies in shared experiences and authentic recommendations. Our mission is to provide travelers with a platform to explore, review, and recommend the most captivating tourist destinations around the globe. Whether you’re seeking hidden gems off the beaten path or iconic landmarks, our community-driven insights empower you to make informed choices for your next adventure. We encourage travelers to share their personal stories and reviews, fostering a culture of trust and connection that inspires others to embark on their own journeys. Join us as we celebrate the beauty of travel through the eyes of those who have experienced it firsthand.
          </p>
        </div>

        {/* Contact Us Section */}
        <div>
          <h2 className="text-4xl font-bold text-white">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-100">
            We would love to hear from you! Reach out to us using the form below.
          </p>

          <form className="mt-8 max-w-lg mx-auto space-y-6">
            <div>
              <label htmlFor="name" className="block text-left text-gray-200">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" 
                placeholder="Enter your name" 
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-left text-gray-200">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" 
                placeholder="Enter your email" 
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-left text-gray-200">Message</label>
              <textarea 
                id="message" 
                rows="4" 
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" 
                placeholder="Enter your message" 
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Aboutcontact;
