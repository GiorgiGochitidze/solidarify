const { getInfos,deleteInfo,createInfo } = require('../controllers/infoController')
const {protect} = require('../controllers/authController')
const express = require('express')

const router = express.Router()


router
    .route('/')
    .get(getInfos)
    .post(protect,createInfo)

router
    .route('/:id')
    .delete(protect,deleteInfo)

module.exports = router
