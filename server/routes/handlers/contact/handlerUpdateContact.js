const User = require('../../../models/User')

const async = require('async')
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
    .then(user => {
      const aPromisesUpdate = user.contacts.map( (contact, i) => {
        const sContactId = contact.userId._id.toString()
        const queryToUpdate = { userName, 'contacts.userId': sContactId }
        const bShallIShare = grantedContacts.includes(sContactId)
        return User
            .update(queryToUpdate, { 'contacts.$.shareTo': bShallIShare })
      })

      return Promise.all(aPromisesUpdate)
    })

    .then(userUpdated => {
      res.send({ result: 'OK', message: 'privacy settings updated successfully' })
    })
    .catch(error => {
      res.send({ result: 'KO', message: 'an error happened updating privacy settings', error })
    })
}

module.exports = updateContact
