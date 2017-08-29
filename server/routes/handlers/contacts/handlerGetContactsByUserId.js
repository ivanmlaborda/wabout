const User = require('../../../models/User')

const mongoose = require('mongoose')
// const ObjectId = mongoose.Schema.Types.ObjectId

function getContactsById (req, res) {
  const { userId } = req.params

  User
    .findOne({_id: userId}, {contacts: 1, _id: 0})
    .populate('contacts.userId')
    .then(data => {
      res.json(data)
    })
}

module.exports = getContactsById
