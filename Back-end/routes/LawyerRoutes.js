const express = require('express')
const { getLawyers } = require('../controllers/LawyerController')

const router = express.Router()

router.get('/', getLawyers)

module.exports = router
