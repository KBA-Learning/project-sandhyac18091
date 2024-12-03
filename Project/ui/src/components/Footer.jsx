import React from 'react'

const Footer = () => {
  return (
    <footer class="bg-gray-900 text-white py-10">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
  
       
        <div>
          <h5 class="text-xl font-semibold mb-4">About Us</h5>
          <p class="text-gray-400">
            Welcome to our Tourist Place Review & Recommendation website, your one-stop destination to explore top tourist spots!
          </p>
        </div>
  
        
        <div>
          <h5 class="text-xl font-semibold mb-4">Useful Links</h5>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-400 hover:text-blue-400">Home</a></li>
            <li><a href="#" class="text-gray-400 hover:text-blue-400">Sign up</a></li>
            <li><a href="#" class="text-gray-400 hover:text-blue-400">Login</a></li>
            
          </ul>
        </div>
  
        
        <div>
          <h5 class="text-xl font-semibold mb-4">Contact Us</h5>
          <p class="text-gray-400">Email: info@touristrecommendation.com</p>
          <p class="text-gray-400">Phone: +123-456-7890</p>
          <div class="flex space-x-4 mt-4 text-2xl">
            <a href="#" class="text-gray-400 hover:text-blue-400">Facebook</a>
            <a href="#" class="text-gray-400 hover:text-pink-400">Instagram</a>
            <a href="#" class="text-gray-400 hover:text-blue-400">Twitter</a>
          </div>
        </div>
  
      </div>
  
     
      <div class="text-center mt-10">
        <p class="text-gray-500">&copy; 2024 Tourist Recommendation Website. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer