const User = require('../../../models/User')

function getUserId (req, res) {
  const { userName } = req.params

  User
    .findOne({userName}, {_id: 1})
    .then(userId => {
      res.json(userId)
    })
}

module.exports = getUserId
