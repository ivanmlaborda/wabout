const User = require('../../../models/User')

const mongoose = require('mongoose')
// const ObjectId = mongoose.Schema.Types.ObjectId

function getContactsById (req, res) {
  const { userId } = req.params
  User
    .findById(userId, { contacts: 1 })
    .populate('contacts.userId')
    .then(data => data.contacts.map(contact => {
      const id = contact.userId._id
      const username = contact.userId.username
      const shareTo = contact.shareTo
      return { id, username, shareTo }
    }))
    .then(data => {
      res.json(data)
    })
    .catch(error => {
      res.send({ result: 'KO', message: 'an error happened updating privacy settings', error })
    })
}

module.exports = getContactsById
