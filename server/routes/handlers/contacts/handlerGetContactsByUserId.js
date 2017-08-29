const User = require('../../../models/User')

const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

function getContactsById (req, res) {
  const { userId } = req.params

  User
    .find({_id: userId})
    .populate('contacts.userId')
    .then(contacts =>{
      res.json(contacts)
    })
}

module.exports = getContactsById
