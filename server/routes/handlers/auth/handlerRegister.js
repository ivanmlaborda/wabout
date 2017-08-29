const User = require('../../../models/User')

function register (req, res) {
  console.log('New User')
  const { userName, password } = req.body
  const user = new User({ userName, password })
  console.log(`${userName} // ${password}`)

  user.save()
    .then(() => res.send(`Added user 👉 ${userName}`))
    // .then(() => res.redirect('/#!/auth/login'))
}

module.exports = register
