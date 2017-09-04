// const User = require('../../../models/User')
//
// function login (req, res) {
//
//   const { userName} = req.body
//   console.log(userName)
//
//   res.send(userName)
// }
//
// module.exports = login

var jwt = require('jsonwebtoken')

function handleLogin (req, res) {
  const SECRET = process.env.SECRET
  const { _id: id, username } = req.user

  const token = jwt.sign({ id, username }, SECRET)

   res.json({success: true, token: token})
}

module.exports = handleLogin
