const User = require('../models/User')

const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

function getBroadContacts (userName) {
  User
    .findOne({userName})
    .populate('contacts.userId')
    // .then(console.log)
    .then(user => {
      let broadContacts = []
      user.contacts.forEach(contact => {
        if (contact.shareTo) {
          broadContacts.push(contact.userId._id)
        }
      })
      console.log(broadContacts)
      return broadContacts
    })
}

module.exports = getBroadContacts
