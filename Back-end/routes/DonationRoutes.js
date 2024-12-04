const express = require('express')
const { getDonations } = require('../controllers/DonationController')

const router = express.Router()

router.get('/', getDonations)

module.exports = router
