const express = require('express')
const { getLocations } = require('../controllers/LocationController')

const router = express.Router()

router.get('/', getLocations)

module.exports = router
