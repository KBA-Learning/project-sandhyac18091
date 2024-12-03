import React, { useState, useEffect } from 'react';

const Addplace = () => {
  const [formData, setFormData] = useState({
    PlaceName: '',
    Description: '',
    Image: '',
    District: ''
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);  // Track admin status

  useEffect(() => {
    // Check if user is admin
    const userType = localStorage.getItem('userType');
    if (userType === 'admin') {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, []);

  if (!isAdmin) {
    return <p className="text-red-500 text-center mt-6">You do not have permission to access this page.</p>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const { PlaceName, Description, Image, District } = formData;
    
    // Validation check
    if (!PlaceName || !Description || !Image || !District) {
      setErrorMessage('All fields are required');
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append('PlaceName', PlaceName);
    formDataToSend.append('Description', Description);
    formDataToSend.append('Image', Image);
    formDataToSend.append('District', District);

    try {
      const response = await fetch('/api/addplace', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}` // Include token for authorization
        },
        body: formDataToSend
      });

      const data = await response.json();
      if (response.ok) {
        alert('Place added successfully');
        // Clear form after success
        setFormData({
          PlaceName: '',
          Description: '',
          Image: '',
          District: ''
        });
      } else {
        setErrorMessage(data.message || 'An error occurred');
      }
    } catch (error) {
      setErrorMessage('Error while adding the place');
    }
  };

  return (
    <div className="container mx-auto mt-32">
      <h2 className="text-3xl font-bold text-purple-500 mb-6">Add New Place</h2>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow-lg rounded-lg">
        <div className="mb-4">
          <label htmlFor="PlaceName" className="block text-gray-700 font-bold mb-2">Place Name</label>
          <input
            type="text"
            id="PlaceName"
            name="PlaceName"
            value={formData.PlaceName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="Description" className="block text-gray-700 font-bold mb-2">Description</label>
          <textarea
            id="Description"
            name="Description"
            value={formData.Description}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="Image" className="block text-gray-700 font-bold mb-2">Image</label>
          <input
            type="file"
            id="Image"
            name="Image"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-4 py-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="District" className="block text-gray-700 font-bold mb-2">District</label>
          <select
            id="District"
            name="District"
            value={formData.District}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded"
            required
          >
            <option value="" disabled>Select a District</option>
            <option value="Alappuzha">Alappuzha</option>
            <option value="Ernakulam">Ernakulam</option>
            <option value="Idukki">Idukki</option>
            <option value="Kannur">Kannur</option>
            <option value="Kasaragod">Kasaragod</option>
            <option value="Kollam">Kollam</option>
            <option value="Kottayam">Kottayam</option>
            <option value="Kozhikode">Kozhikode</option>
            <option value="Malappuram">Malappuram</option>
            <option value="Palakkad">Palakkad</option>
            <option value="Pathanamthitta">Pathanamthitta</option>
            <option value="Thiruvananthapuram">Thiruvananthapuram</option>
            <option value="Thrissur">Thrissur</option>
            <option value="Wayanad">Wayanad</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-purple-500 text-white py-2 rounded-lg font-bold"
        >
          Add Place
        </button>
      </form>
    </div>
  );
};

export default Addplace;
