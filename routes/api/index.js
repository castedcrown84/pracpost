const router = require('express').Router()
const userroutes = require('./user')

router.use('/user', userroutes)

module.exports = router