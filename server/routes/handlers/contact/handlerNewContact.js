const User = require('../../../models/User')

function newContact (req, res) {
  const { username } = req.params
  const { contactName } = req.body

  User
    .findOne({username})
    .populate('contacts.userId')
    .then(user => {
      let alreadyExists = false
      const hasContact = user.contacts.forEach(contact => {
        if (contact.userId.username === contactName) {
          alreadyExists = true
        }
      })

      if (alreadyExists) {
        res.send({ result: 'KO', message: 'Your contact is already in your contact list' })
      } else {
        User
          .findOne({username: contactName}, {_id: 1})
          .then(user => user._id)
          .then(userId => User.update({ username }, {$push: {contacts: {userId}}}))
          .then(userUpdated => {
            res.send({ result: 'OK', message: 'contact added to user successfully' })
          })
          .catch(error => {
            res.status(500).send({ result: 'KO', message: 'an error happened on adding a contact to user', error })
          })
      }
    })
}

module.exports = newContact
