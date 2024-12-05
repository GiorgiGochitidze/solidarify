const express = require('express')

// Routes
const infoRoutes = require('./routes/infoRoutes')
const locationRoutes = require('./routes/LocationRoutes')
const missingRoutes = require('./routes/MissingRoutes')
const lawyerRoutes = require('./routes/LawyerRoutes')
const donationRoutes = require('./routes/DonationRoutes')
const userRoutes = require('./routes/userRoutes')

// Database
const mongoose = require('mongoose')

mongoose
  .connect('mongodb+srv://lukaguledani123:lukaluka@cluster0.jncco.mongodb.net/')
  .then(() => console.log('MongoDB connected'))
  .catch((error) => {
    console.error('Error:', error.message)
    process.exit(1)
  })


const app = express()
app.use(express.json())

app.use('/api/users',userRoutes)
app.use('/api/infos', infoRoutes)
app.use('/api/locations', locationRoutes)
app.use('/api/missing', missingRoutes)
app.use('/api/lawyers', lawyerRoutes)
app.use('/api/donations', donationRoutes)

module.exports = app
