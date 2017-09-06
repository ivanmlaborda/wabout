// const User = require('../../../models/User')
//
// function register (req, res) {
//   console.log('New User')
//   const { userName, password } = req.body
//   const user = new User({ userName, password })
//   console.log(`${userName} // ${password}`)
//
//   user.save()
//     .then(() => res.send(`Added user 👉 ${userName}`))
//     // .then(() => res.redirect('/#!/auth/login'))
// }
//
// module.exports = register

/* global __base */
const path = require('path')
const User = require(path.join(__base, 'models/User'))

function handleRegister (req, res) {
  const { username, password, email } = req.body

  const user = new User({username, email})

  User.register(user, password, err => {
    if (err) {
      return res.json({ success: false, msg: 'Username already exists.' })
    }
    res.json({ success: true, msg: 'Successful created new user.' })
  })
}

module.exports = handleRegister
