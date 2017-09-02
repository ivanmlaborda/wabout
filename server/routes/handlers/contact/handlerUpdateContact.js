const User = require('../../../models/User')

const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

function updateContact (req, res) {
  const { userName } = req.params
  const { grantedContacts } = req.body
  let contactList = []

  User
    .findOne({userName})
    .populate('contacts.userId')
    .then(user =>{
      console.log(JSON.stringify(user.contacts))
    })
  // User
  //   .findOne({userName}, {_id: 1})
  //   .then(user => user._id)
  //   // .then(userId => User.update({ userName }, {$push: {contacts: {userId}}}))
  //   // .then(grantedContacts.forEach(contactId => ))
  //   .then(userUpdated => {
  //     res.send(`${contactName} added tou your contact list`)
  //   })
}

module.exports = updateContact
