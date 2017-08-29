const mongoose = require('mongoose')

const collection = 'users'
const ObjectId = mongoose.Schema.Types.ObjectId

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
    id: {
      type: ObjectId,
      ref: 'User'
    },
    shareTo: {
      type: Boolean,
      default: true
    }
  }]
}, { collection })

module.exports = mongoose.model('User', UserSchema)
