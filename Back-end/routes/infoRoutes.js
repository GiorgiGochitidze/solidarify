const { getInfos } = require('../controllers/infoController')
const express = require('express')

const router = express.Router()

router.get('/', getInfos)

module.exports = router
