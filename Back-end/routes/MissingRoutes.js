const express = require('express')
const { getMissingPersons } = require('../controllers/MissingController')

const router = express.Router()

router.get('/', getMissingPersons)

module.exports = router
