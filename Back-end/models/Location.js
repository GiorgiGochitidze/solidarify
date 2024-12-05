const mongoose = require('mongoose')

const LocationSchema = new mongoose.Schema({
  location: String,
  coordinates:[Number],
  time: String,
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Location', LocationSchema)
