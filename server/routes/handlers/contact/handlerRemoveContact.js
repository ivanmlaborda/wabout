const User = require('../../../models/User')

function removeContact (req, res) {
  const { username } = req.params
  const { contactId } = req.body
  let refId = ''
  User
  .findOne({username}, {'_id': 0, contacts: 1})
  .populate('contacts.userId')
  .then(data => {
    let matchContact = data.contacts.filter(contact => {
      return contact.userId.id === contactId
    })
    refId = matchContact[0]._id

    User
    .findOne({username}, {'_id': 0, contacts: 1})
    .update({$pull: {contacts: {_id: refId}}})
    .then(userRemoved => {
      console.log(userRemoved)
      console.log(`contact w/ id ${contactId} has been properly deleted`)
      res.send({ result: 'OK', message: 'contact has been deleted successfully' })
    })
    .catch(error => {
      res.status(500).send({ result: 'KO', message: 'an error happened removing contact', error })
    })
  })
}
module.exports = removeContact
