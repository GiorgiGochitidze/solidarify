const mongoose = require('mongoose')
const validator = require('validator');

const userSchema = new mongoose.Schema({
    email: {
      type: String,
      require: [true, 'user must have email'],
      validate: [validator.isEmail],
    },
    password: {
      type: String,
      require: [true, 'Please provide a password'],
      minlength: 8,
      select: false,
    },
  });

const User = mongoose.model('User',userSchema)

module.exports = User