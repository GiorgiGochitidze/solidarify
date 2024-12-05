const mongoose = require('mongoose')

const LawyerSchema = new mongoose.Schema({
  full_Name:String,
  contact: String,
  details: String,
  image:String,
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Lawyer', LawyerSchema)
