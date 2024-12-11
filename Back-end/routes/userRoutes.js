const express = require('express');

const { login } = require('../controllers/userController');
const { verifyToken } = require('../controllers/authController');

const router = express.Router();

router
    .route('/login')
    .post(login);

router
    .route('/verifyToken')
    .get(verifyToken)

module.exports = router;
