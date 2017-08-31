const User = require('../../../models/User')

const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

function newContact (req, res) {
  const { userName } = req.params
  const { contactName } = req.body

  User
    .findOne({userName: contactName}, {_id: 1})
    .then(user => user._id)
    .then(userId => User.update({ userName }, {$push: {contacts: {userId}}}))
    .then(userUpdated => {
      res.send('contact added')
    })
}

module.exports = newContact
