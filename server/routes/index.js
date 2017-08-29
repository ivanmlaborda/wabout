const express = require('express')
const router = express.Router()

const login = require('./handlers/auth/handlerLogin')
const register = require('./handlers/auth/handlerRegister')
const getUserId = require('./handlers/user/handlerGetUserId')
const newContact = require('./handlers/contact/handlerNewContact')
const updateContact = require('./handlers/contact/handlerUpdateContact')
const getContacts = require('./handlers/contacts/handlerGetContacts')


router.post('/auth/login/', login)
router.post('/auth/register/', register)
router.get('/user/:userName', getUserId)
router.post('/contact/:userName', newContact)
router.post('/contact/:userName', updateContact)
router.get('/contacts/:userName', getContacts)

module.exports = router
