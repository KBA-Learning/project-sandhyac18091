import React, { useState, useEffect } from "react";

const Viewreview = () => {
  const [reviews, setReviews] = useState([]);  // State to store the reviews
  const [error, setError] = useState(null); // State to store any error message

  // Function to fetch reviews from the backend
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/getreviews'); // Send a GET request to fetch reviews
        if (!response.ok) {
          throw new Error('Failed to fetch reviews');
        }
        const data = await response.json(); // Parse the response as JSON
        setReviews(data);  // Store the fetched reviews in the state
      } catch (error) {
        setError(error.message);  // Set error message in case of failure
      }
    };

    fetchReviews();  // Fetch reviews when component mounts
  }, []); 

  // Function to handle review deletion
  const handleDelete = async (placeName) => {
    try {
      const response = await fetch('/api/deletereview', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,  // Assuming JWT token is stored in localStorage
        },
        body: JSON.stringify({ placeName }), // Send placeName in the request body
      });

      if (!response.ok) {
        throw new Error('Failed to delete review');
      }

      const data = await response.json();
      alert(data.message);  // Show success or error message

      // Remove the deleted review from the state
      setReviews((prevReviews) => prevReviews.filter((review) => review.placeName !== placeName));
    } catch (error) {
      alert(error.message);  // Show error if any issue with the deletion process
    }
  };

  // Function to generate a unique background color for each review (alternate styles)
  const getReviewStyle = (index) => {
    return index % 2 === 0
      ? { backgroundColor: '#f3e8ff' } // Light purple for even-indexed reviews
      : { backgroundColor: '#e8f3ff' }; // Light blue for odd-indexed reviews
  };

  return (
    <section className="bg-white mb-20 mt-32">
      <div className="container m-auto max-w-7xl py-2">
        <h2 className="text-3xl text-purple-800 text-center font-semibold mb-6">View Reviews</h2>

        {error && <p className="text-red-500 text-center">{error}</p>}  {/* Show error message if there's an error */}

        {reviews.length === 0 ? (
          <p className="text-center text-gray-700">No reviews found</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 py-8">
            {reviews.map((review, index) => (
              <div
                key={review._id}
                className="p-4 rounded-md shadow-md"
                style={getReviewStyle(index)} // Apply the background color style
              >
                <h3 className="text-xl text-purple-700">{review.placeName}</h3> {/* Display place name */}
                <p className="text-gray-600">{review.review}</p> {/* Display review text */}
                <p className="font-semibold">Rating: {review.rating}</p> {/* Display rating */}
                <button
                  onClick={() => handleDelete(review.placeName)}  // Call handleDelete when button is clicked
                  className="bg-purple-800 text-white py-2 px-4 rounded mt-2 hover:bg-purple-600"
                >
                  Delete Review
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Viewreview;
