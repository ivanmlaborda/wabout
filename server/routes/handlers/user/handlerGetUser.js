const User = require('../../../models/User')

function getUser (req, res) {
  const { userId } = req.params

  User
    .findOne({_id: userId}, {userName: 1})
    .then(userName => {
      res.json(userName)
    })
}

module.exports = getUser
