const express = require('express')
const { getDonations,deleteDonation,createDonation } = require('../controllers/DonationController')
const {protect} = require('../controllers/authController')


const router = express.Router()

router.use(protect)

router
    .route('/')
    .get(getDonations)
    .post(createDonation)

router
    .route('/')
    .delete(deleteDonation)

module.exports = router
