const express  = require('express')
const authentication = require('./src/controllers/authentication')
const router = express.Router()

router.post('/login',authentication.login)
router.post('/change-password',authentication.changePassword)
router.post('/create-admin',authentication.CreateModerator)

module.exports = router
