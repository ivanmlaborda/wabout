const express = require('express')
const router = express.Router()

const login = require('./handlers/auth/handlerLogin')
const register = require('./handlers/auth/handlerRegister')
const newContact = require('./handlers/contacts/handlerNewContact')

router.post('/auth/login/', login)
router.post('/auth/register/', register)
router.post('/contacts/:userName', newContact)

module.exports = router
