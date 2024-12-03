import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Review = () => {
  const [placeName, setPlaceName] = useState(""); 
  const [review, setReview] = useState(""); 
  const [rating, setRating] = useState(""); 
  const navigate = useNavigate(); 

  // Submit form function
  const submitForm = async (e) => {
    e.preventDefault();

    const newReview = {
      placeName,
      review,
      rating,
    };

    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newReview),
      });

      if (res.ok) {
        navigate(`/viewreview/${placeName}`);
      } else {
        console.log("Failed to add review");
      }
    } catch (error) {
      console.log("Error adding review", error);
    }
  };

  return (
    <section className="bg-white mb-20 mt-32">
      <div className="container m-auto max-w-2xl py-2">
        <div className="bg-purple-100 px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-purple-800 text-center font-semibold mb-6">
              Add Review
            </h2>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Place Name
              </label>
              <input
                type="text"
                id="placeName"
                name="placeName"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Enter the place name"
                required
                value={placeName}
                onChange={(e) => setPlaceName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Review
              </label>
              <textarea
                id="review"
                name="review"
                className="border rounded w-full py-2 px-3 mb-2"
                rows="4"
                placeholder="Write your review"
                required
                value={review}
                onChange={(e) => setReview(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Rating (1-5)
              </label>
              <input
                type="number"
                id="rating"
                name="rating"
                className="border rounded w-full py-2 px-3 mb-2"
                min="1"
                max="5"
                placeholder="Rate between 1 and 5"
                required
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </div>

            <div>
              <button
                className="bg-purple-500 hover:bg-purple-600 my-10 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Review;
