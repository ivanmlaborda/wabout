const User = require('../../../models/User')

function login (req, res) {

  const { userName, password } = req.body

  res.redirect('/#!/explore')
}

module.exports = login
