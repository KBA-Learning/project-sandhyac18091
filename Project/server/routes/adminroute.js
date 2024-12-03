import express from "express";
import multer from "multer";
import path from "path";
import Place from "../models/place.js"; // Import your Place model

const router = express.Router();

// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Directory where images are stored
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Timestamp + original file extension
  },
});

// File filter to allow only image uploads
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true); // Accept the file
  } else {
    cb(new Error("Only image files are allowed!"), false); // Reject the file
  }
};

const upload = multer({ storage, fileFilter });

// Route to add a place
router.post("/addplace", upload.single("Image"), async (req, res) => {
  try {
    const { PlaceName, Description, Capitalcity } = req.body;

    // Check if an image file is uploaded
    if (!req.file) {
      return res.status(400).json({ error: "Image file is required" });
    }

    // Create a new place document
    const newPlace = new Place({
      PlaceName,
      Description,
      Capitalcity,
      Image: req.file.path, // Save the file path to the database
    });

    // Save the new place to the database
    await newPlace.save();

    res.status(201).json({ message: "Place added successfully", place: newPlace });
  } catch (error) {
    console.error("Error adding place:", error);
    res.status(500).json({ error: "Failed to add place" });
  }
});

export default router;
