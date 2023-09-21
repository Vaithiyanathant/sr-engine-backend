const express  = require('express')
const authentication = require('./src/controllers/login')
const router = express.Router()

router.post('/login',authentication.login)

module.exports = router
