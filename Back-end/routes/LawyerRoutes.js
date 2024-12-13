const express = require('express')
const { getLawyers,createLawyer,deleteLawyer } = require('../controllers/LawyerController')
const {protect} = require('../controllers/authController')


const router = express.Router()


router
    .route('/')
    .get(getLawyers)
    .post(protect,createLawyer)

router
    .route('/:id')
    .delete(protect,deleteLawyer)

module.exports = router
