const User = require('../../../models/User')

function newContact (req, res) {
  const { userName } = req.params
  const { contactName } = req.body

  User
    .findOne({userName})
    .populate('contacts.userId')
    .then(user => {
      let alreadyExists = false
      const hasContact = user.contacts.forEach(contact => {
        if (contact.userId.userName === contactName) {
          alreadyExists = true
        }
      })

      if (alreadyExists) {
        res.send({ result: 'KO', message: 'Your contact is already in your contact list' })
      } else {
        User
          .findOne({userName: contactName}, {_id: 1})
          .then(user => user._id)
          .then(userId => User.update({ userName }, {$push: {contacts: {userId}}}))
          .then(userUpdated => {
            res.send({ result: 'OK', message: 'contact added to user successfully' })
          })
          .catch(error => {
            res.send({ result: 'KO', message: 'an error happened on adding a contact to user', error })
          })
      }
    })
}

module.exports = newContact
