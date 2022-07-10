const router = require('express').Router()
const userroutes = require('./user')

router.use('/books', userroutes)

module.exports = router