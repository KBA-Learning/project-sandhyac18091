import React, { useState, useEffect } from 'react';

const Reccomandation = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  // Fetch all places on component mount
  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await fetch('/api/getAllPlaces');
        const data = await response.json();

        if (response.ok) {
          setPlaces(data.allPlaces);
        } else {
          setErrorMessage(data.message || 'Failed to fetch places');
        }
      } catch (error) {
        setErrorMessage('Error while fetching places');
      } finally {
        setLoading(false);
      }
    };

    fetchPlaces();
  }, []);

  // Handle deleting a place
  const handleDelete = async (PlaceName) => {
    if (!window.confirm(`Are you sure you want to delete ${PlaceName}?`)) return;

    try {
      const response = await fetch('/api/deleteplace', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ PlaceName }),
      });

      const data = await response.json();
      if (response.ok) {
        alert(`${PlaceName} deleted successfully`);
        setPlaces(places.filter(place => place.PlaceName !== PlaceName)); // Update the UI
      } else {
        setErrorMessage(data.message || 'Failed to delete the place');
      }
    } catch (error) {
      setErrorMessage('Error while deleting the place');
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (errorMessage) {
    return <p className="text-red-500">{errorMessage}</p>;
  }

  return (
    <div className="container mx-auto mt-32">
      <h2 className="text-3xl font-bold text-purple-500 mb-6">All Places</h2>

      {places.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {places.map((place) => {
            // Assuming 'Image' is a relative path, adjust it to the full URL if needed
            const imageUrl = place.Image ? `http://localhost:2201${place.Image}` : null;

            return (
              <div key={place._id} className="bg-white p-6 shadow-lg rounded-lg">
                <h3 className="text-2xl font-semibold text-purple-700">{place.PlaceName}</h3>
                <p className="text-gray-700 mt-2">{place.Description}</p>
                <p className="text-gray-700 mt-2">
                  <strong>District:</strong> {place.District}
                </p>

                {/* Display image if available */}
                {imageUrl && (
                  <img 
                    src={imageUrl} 
                    alt={place.PlaceName} 
                    className="mt-4 w-full max-w-lg mx-auto rounded-lg"
                  />
                )}

                {/* Delete Button */}
                <button
                  onClick={() => handleDelete(place.PlaceName)}
                  className="mt-4 bg-purple-500 text-white px-4 py-2 rounded-lg"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <p>No places found.</p>
      )}
    </div>
  );
};

export default Reccomandation;
