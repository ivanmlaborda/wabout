const express = require('express')
const router = express.Router()

const login = require('./handlers/auth/handlerLogin')
const register = require('./handlers/auth/handlerRegister')
const newContact = require('./handlers/contact/handlerNewContact')
const getContacts = require('./handlers/contacts/handlerGetContacts')


router.post('/auth/login/', login)
router.post('/auth/register/', register)
router.post('/contact/:userName', newContact)
router.get('/contacts/:userName', getContacts)

module.exports = router
