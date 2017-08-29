const User = require('../../../models/User')

const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

function removeContact (req, res) {
  const { id } = req.params

  User
    .findByIdAndRemove({_id: userId})
    .then(userDeleted => {
      res.send(`${contactName} deleted from your contact list`)
    })
}

module.exports = removeContact
