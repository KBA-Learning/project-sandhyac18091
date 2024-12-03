const mongoose = require("mongoose"); 
const { Schema } = mongoose; 

const placeSchema = new Schema({
  PlaceName: { type: String, unique: true, required: true },
  Description: { type: String, required: true },
  Image: { type: String, required: true },
  District: { type: String, required: true },
});

const Place = mongoose.model("Place", placeSchema); 
module.exports = Place; 
