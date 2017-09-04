const User = require('../../../models/User')

function getUserId (req, res) {
  const { username } = req.params

  User
    .findOne({username}, {_id: 1})
    .then(userId => {
      res.json(userId)
    })
}

module.exports = getUserId
