const User = require('../../../models/User')

const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

function getContacts (req, res) {
  const { userName } = req.params

  User
    .find({userName})
    .populate('contacts.userId')
    .then(user =>{
      res.json(user)
    })
}

module.exports = getContacts
