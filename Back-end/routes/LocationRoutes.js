const express = require('express')
const { getLocations,deleteLocation,createLocation } = require('../controllers/LocationController')
const {protect} = require('../controllers/authController')


const router = express.Router()

router.use(protect)

router
    .route('/')    
    .get(getLocations)
    .post(createLocation)

router
    .route('/:id')
    .delete(deleteLocation)

module.exports = router
