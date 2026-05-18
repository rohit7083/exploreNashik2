



const place = require("../models/allPlaces");
const cloudinary = require("../config/Cloudnary");

// Get all places
exports.getAllPlaces = async (req, res) => {
  try {
    const places = await place.find();
    res.status(200).json(places);
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

// Get single place
exports.getPlaceById = async (req, res) => {
  try {
    const placeById = await place.findById(req.params.id);

    if (!placeById) {
      return res.status(404).json({
        message: "Place not found"
      });
    }

    res.status(200).json(placeById);

  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
};

// Create place
exports.createPlace = async (req, res) => {
  try {
    const images = req.files
      ? req.files.map((file) => ({
          imageUrl: file.path,
          publicId: file.filename
        }))
      : [];

    const newPlace = await place.create({
      ...req.body,
      images
    });

    res.status(201).json(newPlace);

  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
};

// Update place
exports.updatePlace = async (req, res) => {
  try {
    const existingPlace = await place.findById(req.params.id);

    if (!existingPlace) {
      return res.status(404).json({
        message: "Place not found"
      });
    }

    let images = existingPlace.images;

    // if new images uploaded
    if (req.files && req.files.length > 0) {
      // delete old cloudinary images
      if (existingPlace.images.length > 0) {
        for (const img of existingPlace.images) {
          await cloudinary.uploader.destroy(img.publicId);
        }
      }

      images = req.files.map((file) => ({
        imageUrl: file.path,
        publicId: file.filename
      }));
    }

    const updatedPlace = await place.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
        images
      },
      {
        new: true,
        runValidators: true
      }
    );

    res.status(200).json(updatedPlace);

  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
};

// Delete place
exports.deletePlace = async (req, res) => {
  try {
    const existingPlace = await place.findById(req.params.id);

    if (!existingPlace) {
      return res.status(404).json({
        message: "Place not found"
      });
    }

    // delete images from cloudinary
    if (existingPlace.images.length > 0) {
      for (const img of existingPlace.images) {
        await cloudinary.uploader.destroy(img.publicId);
      }
    }

    await place.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Place deleted successfully"
    });

  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
};