const mongoose = require('mongoose')

const LawyerSchema = new mongoose.Schema({
  contact: String,
  details: String,
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Lawyer', LawyerSchema)
