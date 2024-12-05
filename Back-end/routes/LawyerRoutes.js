const express = require('express')
const { getLawyers,createLawyer,deleteLawyer } = require('../controllers/LawyerController')
const {protect} = require('../controllers/authController')


const router = express.Router()

router.use(protect)

router
    .route('/')
    .get(getLawyers)
    .post(createLawyer)

router
    .route('/:id')
    .delete(deleteLawyer)

module.exports = router
