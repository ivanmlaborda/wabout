// const User = require('../../../models/User')
//
// const mongoose = require('mongoose')
// // const ObjectId = mongoose.Schema.Types.ObjectId
//
// function getContactsById (req, res) {
//   const { userId } = req.params
//   console.log('getting contacts')
//   console.log(userId)
//   User
//     .findOne({_id: userId}, {contacts: 1, _id: 0})
//     .populate('contacts.userId')
//     .then(data => {
//       console.log(data)
//       res.json(data)
//     })
//     .catch(error => {
//       res.send({ result: 'KO', message: 'an error happened updating privacy settings', error })
//     })
// }
//
// module.exports = getContactsById

const User = require('../../../models/User')

const mongoose = require('mongoose')
// const ObjectId = mongoose.Schema.Types.ObjectId

function getContactsById (req, res) {
  console.log('getContactsById: req.user')
  console.log(req.user._id)
  const { userId } = req.params
  console.log('getContactsById: getting contacts')
  console.log(userId)
  User
    .findById(userId, { contacts: 1 })
    .populate('contacts.userId')
    .then(data => data.contacts.map(contact => {
      const id = contact.userId._id
      const username = contact.userId.username
      return { id, username }
    }))
    .then(data => {
      console.log(data)
      res.json(data)
    })
    .catch(error => {
      res.send({ result: 'KO', message: 'an error happened updating privacy settings', error })
    })
}

module.exports = getContactsById
