const mongoose = require('mongoose')

const InfoSchema = new mongoose.Schema({
  title: String,
  image:String,
  src:String,
  details: String,
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Info', InfoSchema)
