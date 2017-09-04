const User = require('../../../models/User')

function getUser (req, res) {
  const { userId } = req.params

  User
    .findOne({_id: userId}, {username: 1})
    .then(username => {
      res.json(username)
    })
}

module.exports = getUser
