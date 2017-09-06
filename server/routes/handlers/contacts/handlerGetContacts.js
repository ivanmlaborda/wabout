const User = require('../../../models/User')

const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

function getContacts (req, res) {
  const { username } = req.params

  User
    .find({username})
    .populate('contacts.userId')
    .then(contacts =>{
      res.json(contacts)
    })
}

module.exports = getContacts
