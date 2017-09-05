const User = require('../../../models/User')

const mongoose = require('mongoose')
// const ObjectId = mongoose.Schema.Types.ObjectId

function getContactsById (req, res) {
  const { userId } = req.params
  console.log('getting contacts')
  console.log(userId)
  User
    .findOne({_id: userId}, {contacts: 1, _id: 0})
    .populate('contacts.userId')
    .then(data => {
      console.log(data)
      res.json(data)
    })
    .catch(error => {
      res.send({ result: 'KO', message: 'an error happened updating privacy settings', error })
    })
}

module.exports = getContactsById
