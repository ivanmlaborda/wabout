const User = require('../../../models/User')

function login (req, res) {

  const { userName} = req.body
  console.log(userName)


  res.send(userName)
}

module.exports = login
