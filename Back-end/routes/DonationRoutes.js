const express = require('express')
const { getDonations,deleteDonation,createDonation } = require('../controllers/DonationController')
const {protect} = require('../controllers/authController')


const router = express.Router()

router
    .route('/')
    .get(getDonations)
    .post(protect,createDonation)

router
    .route('/')
    .delete(protect,deleteDonation)

module.exports = router
