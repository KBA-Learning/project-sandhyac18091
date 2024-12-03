const { Schema, model } = require('mongoose');

// Review Schema
const reviewSchema = new Schema({
  placeName: { type: String, required: true },
  review: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 }, // Rating between 1 and 5
});

// Create the model
const Review = model('Review', reviewSchema);

module.exports = Review;
