const User = require('../../../models/User')

const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

function updateContact (req, res) {
  const { username } = req.params
  const { grantedContacts } = req.body
  let contactList = []

  console.log('----------------------')
  console.log('grantedContacts')
  console.log(grantedContacts)

  User
    .findOne({username})
    .populate('contacts.userId')
    .then(user => {
      const aPromisesUpdate = user.contacts.map( (contact, i) => {
        const sContactId = contact.userId._id.toString()
        const queryToUpdate = { username, 'contacts.userId': sContactId }
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
      res.status(500).send({ result: 'KO', message: 'an error happened updating privacy settings', error })
    })
}

module.exports = updateContact
