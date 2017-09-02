const User = require('../../../models/User')

const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

function updateContact (req, res) {
  const { userName } = req.params
  const { grantedContacts } = req.body
  let contactList = []

  console.log('----------------------')
  console.log('grantedContacts')
  console.log(grantedContacts)

  User
    .findOne({userName})
    .populate('contacts.userId')
    .then(user =>{
      // console.log(JSON.stringify(user.contacts))
      user.contacts.forEach(contact => {
        let contactId = contact.userId._id
        console.log(`ContactId ${contactId}`)
        console.log(contact.shareTo)
        if (grantedContacts.includes((contactId).toString())) {
          console.log(`${contactId} is included in Granted List`)
          User
            // .findOne({userName})
            .update({userName}, {'contacts.userId': contactId}, {'$set': {'contacts.$.shareTo': true}})
        } else {
          console.log(`${contactId} is not included in Granted List`)
          User
            // .findOne({userName})
            .update({userName}, {'contacts.userId': contactId}, {'$set': {'contacts.$.shareTo': false}})
        }
      })
    })
    .then(userUpdated => {
      res.send({ result: 'OK', message: 'privacy settings updated successfully' })
    })
    .catch(error => {
      res.send({ result: 'KO', message: 'an error happened updating privacy settings', error })
    })
}

module.exports = updateContact
