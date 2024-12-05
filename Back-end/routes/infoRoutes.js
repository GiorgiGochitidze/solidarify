const { getInfos,deleteInfo,createInfo } = require('../controllers/infoController')
const {protect} = require('../controllers/authController')
const express = require('express')

const router = express.Router()

router.use(protect)

router
    .route('/')
    .get(getInfos)
    .post(createInfo)

router
    .route('/:id')
    .delete(deleteInfo)

module.exports = router
