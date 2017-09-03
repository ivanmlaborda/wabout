const User = require('../../../models/User')

const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

function removeContact (req, res) {
  const { id } = req.params

  User
    .findByIdAndRemove({_id: userId})
    .then(console.log)
    .then(userUpdated => {
      res.send({ result: 'OK', message: 'user has been deleted successfully' })
    })
    .catch(error => {
      res.send({ result: 'KO', message: 'an error happened removing user', error })
    })
}

module.exports = removeContact
