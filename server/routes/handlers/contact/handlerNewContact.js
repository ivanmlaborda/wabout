const User = require('../../../models/User')

const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

function newContact (req, res) {
  const { userName } = req.params
  const { contactName } = req.body

  User
    .findOne({userName: contactName}, {_id: 1})
    .then(user => {
      console.log(user)
      return user._id})
    .then(userId => {
      console.log(userId)
      return User.update({ userName },
          {$push: {contacts: {userId}}}
        )
    }
    )
    .then(userUpdated => {
      res.send(`${contactName} added tou your contact list`)
    })
}

module.exports = newContact
