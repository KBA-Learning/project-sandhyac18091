import React from 'react';
import palm from '../assets/images/palm-cove-beach.jpg'
import Whitesands from '../assets/images/28-Whitesands-01.webp'
import beach3 from '../assets/images/2.jpg'

const Explore = () => {
  return (
    <div>
      {/* Section: Sunny Beaches */}
      <h2 className="text-4xl font-bold text-gray-900 text-center mt-12">Sunny Beaches</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8" data-aos="fade-right">
        {/* Beach 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src={palm} alt="Beach 1" className="w-full h-64 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-900">Palm Cove Beach</h3>
            <p className="mt-4 text-gray-600">
              Palm Cove Beach offers golden sands and clear waters, ideal for swimming, sunbathing, and family-friendly water sports. Nestled in a tropical setting, it’s the perfect escape for relaxation.
            </p>
          </div>
        </div>

        {/* Beach 2 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src={Whitesands} alt="Beach 2" className="w-full h-64 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-900">White Sands Beach</h3>
            <p className="mt-4 text-gray-600">
              Known for its powdery white sands and crystal-blue waters, White Sands Beach is a top destination for water sports and beach resorts. It's a favorite among surfers and beachgoers alike.
            </p>
          </div>
        </div>

        {/* Beach 3 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src={beach3} alt="Beach 3" className="w-full h-64 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-900">Coral Bay</h3>
            <p className="mt-4 text-gray-600">
              Coral Bay is a tranquil and secluded beach, perfect for snorkeling and exploring vibrant coral reefs. It’s a hidden gem that offers peace and natural beauty in abundance.
            </p>
          </div>
        </div>
      </div>

      {/* Section: Mountain Peaks */}
      <h2 className="text-4xl font-bold text-gray-900 text-center mt-12">Mountain Peaks</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8" data-aos="fade-right">
        {/* Mountain 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src="/image/m1.jpeg" alt="Mountain 1" className="w-full h-64 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-900">Everest Base Camp</h3>
            <p className="mt-4 text-gray-600">
              Everest Base Camp offers stunning views of the world’s highest peak and an incredible trekking experience for adventurous souls. The journey through snow-capped trails is both challenging and rewarding.
            </p>
          </div>
        </div>

        {/* Mountain 2 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src="/image/m2.jpg" alt="Mountain 2" className="w-full h-64 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-900">Rocky Mountains</h3>
            <p className="mt-4 text-gray-600">
              The Rocky Mountains offer a diverse range of hiking trails, skiing, and breathtaking views. Whether you’re an adventure seeker or a nature lover, this mountain range provides the perfect getaway.
            </p>
          </div>
        </div>

        {/* Mountain 3 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src="/image/m3.jpeg" alt="Mountain 3" className="w-full h-64 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-900">Mount Fuji</h3>
            <p className="mt-4 text-gray-600">
              Mount Fuji, Japan’s iconic mountain, offers scenic hiking and cultural significance. Its snow-capped peak is a must-see for any traveler visiting the region, attracting millions of visitors each year.
            </p>
          </div>
        </div>
      </div>

      {/* Section: Historical Cities */}
      <h2 className="text-4xl font-bold text-gray-900 text-center mt-12">Historical Cities</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8" data-aos="fade-right">
        {/* City 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src="/image/his1.jpg" alt="City 1" className="w-full h-64 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-900">Rome</h3>
            <p className="mt-4 text-gray-600">
              Rome, the eternal city, is a treasure trove of history and culture. With its ancient monuments like the Colosseum and the Roman Forum, it offers a glimpse into the past with modern Italian charm.
            </p>
          </div>
        </div>

        {/* City 2 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src="/image/his2.jpg" alt="City 2" className="w-full h-64 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-900">Kyoto</h3>
            <p className="mt-4 text-gray-600">
              Kyoto is Japan’s cultural capital, home to stunning temples, traditional tea houses, and gardens. Its preserved historical sites offer a peaceful escape into Japan’s rich history and traditions.
            </p>
          </div>
        </div>

        {/* City 3 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src="/image/his3.jpg" alt="City 3" className="w-full h-64 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-900">Athens</h3>
            <p className="mt-4 text-gray-600">
              Athens, the birthplace of democracy and philosophy, is home to the Acropolis and countless other ancient landmarks. Wander through the city’s streets to discover its classical heritage blended with a vibrant modern culture.
            </p>
          </div>
        </div>
      </div>

      {/* Back to Home Link */}
      <label className="font-bold font-serif text-2xl">
        <a href="home.html">Back to Home</a>
      </label>

      {/* AOS Library Initialization */}
      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      <script>
        AOS.init();
      </script>
    </div>
  );
};

export default Explore;
