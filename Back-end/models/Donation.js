const mongoose = require('mongoose')

const DonationSchema = new mongoose.Schema({
  donationReport: String,
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Donation', DonationSchema)

