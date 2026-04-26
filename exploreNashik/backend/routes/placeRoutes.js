const express = require('express');
const router = express.Router();
const placeController = require('../controllers/placeController');

router.get('/getPlaces', placeController.getAllPlaces);
router.post('/addPlaces', placeController.createPlace);
router.put('/updatePlaces/:id', placeController.updatePlace);
router.delete('/deletePlaces/:id', placeController.deletePlace);
router.get('/places/:id', placeController.getPlaceById);

module.exports = router;