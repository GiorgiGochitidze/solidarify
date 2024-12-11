const express = require('express')
const cors = require('cors');
const cookieParser = require('cookie-parser');


require('dotenv').config()

// Routes
const infoRoutes = require('./routes/infoRoutes')
const locationRoutes = require('./routes/LocationRoutes')
const missingRoutes = require('./routes/MissingRoutes')
const lawyerRoutes = require('./routes/LawyerRoutes')
const donationRoutes = require('./routes/DonationRoutes')
const userRoutes = require('./routes/userRoutes')
const PORT = 5000
const app = express()

// Database
const mongoose = require('mongoose')

// Enable CORS for all origins
const corsOptions = {
  origin: 'http://localhost:5173',  // Replace with your front-end URL
  credentials: true,  // Allows cookies and headers to be sent
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(cookieParser());

const DBPass = process.env.DB_USER_PASS

const url = `mongodb+srv://webcanvas555:${DBPass}@cluster0.l4wf4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose
  .connect(url)
  .then(() => console.log('MongoDB connected'))
  .catch((error) => {
    console.error('Error:', error.message)
    process.exit(1)
  })

app.use(express.json())

app.use('/api/users',userRoutes)
app.use('/api/infos', infoRoutes)
app.use('/api/locations', locationRoutes)
app.use('/api/missing', missingRoutes)
app.use('/api/lawyers', lawyerRoutes)
app.use('/api/donations', donationRoutes)


app.listen(PORT, function () {
  console.log(`Server running on port ${PORT}`)
})

