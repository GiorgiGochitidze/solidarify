const express = require('express')
const { getMissingPersons,createMissing,deleteMissing } = require('../controllers/MissingController')
const {protect} = require('../controllers/authController')


const router = express.Router()

router.use(protect)

router
    .route('/')
    .post(getMissingPersons)
    .post(protect,createMissing)

router
    .route('/:id')
    .delete(protect,deleteMissing)

module.exports = router
