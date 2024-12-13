const express = require('express')
const { getLocations,deleteLocation,createLocation } = require('../controllers/LocationController')
const {protect} = require('../controllers/authController')


const router = express.Router()


router
    .route('/')    
    .get(getLocations)
    .post(protect,createLocation)

router
    .route('/:id')
    .delete(protect,deleteLocation)

module.exports = router
