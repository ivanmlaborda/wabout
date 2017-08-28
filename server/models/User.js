const mongoose = require('mongoose')

const collection = 'users'

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  contacts: [{
    contactName: {
      type: String,
      required: true
    },
    shareTo: {
      type: Boolean,
      default: true
    }
  }]
})

module.exports = mongoose.model('User', UserSchema)
