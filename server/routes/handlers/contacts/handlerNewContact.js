const User = require('../../../models/User')

const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

function newContact (req, res) {

  const { userName } = req.params
  const { contactName } = req.body
  console.log(userName)
  console.log(contactName)
  let contactId = ''
  User
    .find({userName: contactName}, {_id:1})
    .then(function(id){
      id.map(function (id) {
        contactId = id._id
      })
      console.log(contactId)
    })
    .then(
      User.update(
        { userName: userName },
        {$push: {contacts: {id: ObjectId(contactId)}}}
      )
      .then(data => {
        console.log(data)
        res.send(`${contactName} with id ${contactId} added tou your contact list`)
      })
    // .then(console.log(contactId))
    )
}

module.exports = newContact
