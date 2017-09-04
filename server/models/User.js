const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

const collection = 'users'
const ObjectId = mongoose.Schema.Types.ObjectId

const UserSchema = new mongoose.Schema({
  // userName: {
  //   type: String,
  //   required: true
  // },
  // password: {
  //   type: String,
  //   required: true
  // },
  contacts: [{
    userId: {
      type: ObjectId,
      ref: 'User',
      unique: true
    },
    shareTo: {
      type: Boolean,
      default: true
    }
  }]
}, { collection })

UserSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('User', UserSchema)
