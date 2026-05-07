const place= require("../models/allPlaces");

// Get all places

exports.getAllPlaces = async (req, res) => {
    try {
 const places = await place.find();   
 res.json(places);    
    } catch (error) {
        res.status(500).json({ error: error.message });
        
    }
}

// Create a new place

exports.createPlace = async (req, res) => {
    try {
        const newPlace =await  place.create(req.body);
        res.status(201).json(newPlace);
    } catch (error) {
    res.status(400).json({ error: error.message });       
    }
}


// Update a place
exports.updatePlace = async (req, res) => {
    try {
        const updatedPlace = await place.findByIdAndUpdate(req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(updatedPlace);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Delete a place
exports.deletePlace = async (req, res) => {
    try {
        await place.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Place deleted successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


//get singgle place
exports.getPlaceById = async (req, res) => {
    try {
        const place = await place.findById(req.params.id);
        if (!place) {
            return res.status(404).json({ message: "Place not found" });
        }
        res.status(200).json(place);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}