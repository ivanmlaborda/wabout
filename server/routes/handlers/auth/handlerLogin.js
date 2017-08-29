const User = require('../../../models/User')

function login (req, res) {

  const { email, password } = req.body

  res.redirect('/#!/explore')
}

module.exports = login
