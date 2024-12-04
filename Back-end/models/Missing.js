const mongoose = require('mongoose')

const MissingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  territory: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  photo: {
    type: String // URL or base64-encoded string
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Missing', MissingSchema)
