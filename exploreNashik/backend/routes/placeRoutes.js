// const express = require('express');
// const router = express.Router();
// const placeController = require('../controllers/placeController');

// router.get('/getPlaces', placeController.getAllPlaces);
// router.post('/addPlaces', placeController.createPlace);
// router.put('/updatePlaces/:id', placeController.updatePlace);
// router.delete('/deletePlaces/:id', placeController.deletePlace);
// router.get('/places/:id', placeController.getPlaceById);

// module.exports = router;

const express = require("express");
const router = express.Router();
const placeController = require("../controllers/placeController");
const upload = require("../middleware/upload");

// Get all places
router.get("/getPlaces", placeController.getAllPlaces);

// Get single place
router.get("/places/:id", placeController.getPlaceById);

// Create place with multiple images
router.post(
  "/addPlaces",
  upload.array("images", 10),
  placeController.createPlace,
);

// Update place with multiple images
router.put(
  "/updatePlaces/:id",
  upload.array("images", 10),
  placeController.updatePlace,
);

// Delete place
router.delete("/deletePlaces/:id", placeController.deletePlace);

router.post(
  "/addImagesInbulk",
  upload.array("images", 50),
  placeController.addImagesInbulk
);

router.post(
  "/bulkUploadProducts",
  upload.array("images", 50),
  placeController.bulkUploadProducts
);


module.exports = router;
