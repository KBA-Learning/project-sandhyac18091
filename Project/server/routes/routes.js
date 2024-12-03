const express = require("express");
const router = express.Router();
const Review = require("../models/rev"); 
const verifyToken = require("../middleware/authMiddleware.js");
const Place = require('../models/addplace.js')
const multer = require("multer");
const path = require("path");



router.post("/reviews", verifyToken, async (req, res) => {

      const user = req.userType

      console.log(user);
      

  try {
    
    if (req.userType === "user") {
      const { placeName, review, rating } = req.body;
      console.log("FROM FE",placeName, review, rating);
      
      // Extract data from the request body
      const newReview = new Review({
        placeName,
        review,
        rating
      });

      console.log("place", newReview);
      

      const result = await Review.create(newReview); // Save the review to MongoDB

      res.status(201).json({ message: "Review added successfully!", result });
    } else {
      res.status(403).json({ message: "Access denied. User only." });
    }
  } catch (error) {
    console.error("Error while adding review:", error);
    res.status(500).json({ message: "Error while adding data." });
  }
});
router.get('/getreviews', async (req, res) => {
  try {
    const reviewDetails = await Review.find(); 
    console.log(reviewDetails); 
    res.status(200).json(reviewDetails); 
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({ message: "Failed to fetch reviews", error: error.message }); 
  }
});
router.delete('/deletereview', async (req, res) => {
  try {
      const { placeName } = req.body;  

      if (!placeName) {
          return res.status(400).json({ message: "Place name is required" });
      }

     
      const deletedReview = await Review.deleteMany({ placeName });

      if (deletedReview.deletedCount === 0) {
          return res.status(404).json({ message: "No reviews found for the specified place" });
      }

      res.status(200).json({ message: "Review(s) deleted successfully" });
      console.log(`Reviews for ${placeName} deleted`);

  } catch (error) {
      console.error("Error deleting review:", error);
      res.status(500).json({ message: "Failed to delete review", error: error.message });
  }
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); 
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`); 
  },
});

const upload = multer({ storage }); 

// Admin route to add a place
router.post("/addplace", verifyToken, upload.single("Image"), async (req, res) => {
  const admin = req.userType;
  console.log(admin);

  try {
    if (req.userType === "admin") {
      const { PlaceName, Description, District } = req.body;

      if (!req.file) {
        return res.status(400).json({ message: "Image file is required." });
      }

      
      const existingPlace = await Place.findOne({ PlaceName });
      if (existingPlace) {
        return res.status(400).json({ message: "This place is already added." });
      }

      const newPlace = new Place({
        PlaceName,
        Description,
        Image: `/uploads/${req.file.filename}`, 
        District,
      });

      console.log("New Place:", newPlace);

      const result = await newPlace.save(); 
      res.status(201).json({ message: "Place added successfully!", result });
    } else {
      res.status(403).json({ message: "Access denied. Admin only." });
    }
  } catch (error) {
    console.error("Error while adding place:", error);
    res.status(500).json({ message: "Error while adding data." });
  }
});


// get places by district

router.get("/getplacedetails/:district", async (req, res) => {
  try {
    const { district } = req.params;
    console.log("fetch ",district);
    

    
    const place = await Place.find({ District: district });
    console.log("search:",place);
    

    if (!place) {
      return res.status(404).json({ message: "Place not found." });
    }

    res.status(200).json({ message: "Place details fetched successfully.", place });
  } catch (error) {
    console.error("Error fetching place details:", error);
    res.status(500).json({ message: "Error while fetching place details." });
  }
});

// get all places

router.get('/getAllPlaces', async (req,res)=>{
  const allPlaces = await Place.find()
  if(allPlaces.length > 0){
    return res.status(200).json({allPlaces})
  }
  return res.status(404).json({message:"Not Found"})
})

router.delete("/deleteplace", async (req, res) => {
  try {
    const { PlaceName } = req.body; 

    if (!PlaceName) {
      return res.status(400).json({ message: "Place name is required." });
    }

   
    const deletedPlace = await Place.deleteOne({ PlaceName });

    if (deletedPlace.deletedCount === 0) {
      return res.status(404).json({ message: "No place found with the specified name." });
    }

    res.status(200).json({ message: "Place deleted successfully." });
    console.log(`Place ${PlaceName} deleted.`);
  } catch (error) {
    console.error("Error while deleting place:", error);
    res.status(500).json({ message: "Error while deleting the place.", error: error.message });
  }
});













module.exports = router;
