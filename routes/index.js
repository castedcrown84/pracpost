const router = require('express').Router();
const apiroutes = require('./api')


router.use('/apiroutes', apiroutes)


module.exports = router;