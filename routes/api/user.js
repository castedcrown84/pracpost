const router = require('express').Router()
const Users = require('../../models/users')



router.post('/signin', async (req, res) => {

const userData = await Users.create({
    username: req.body.username,
    email: req.body.email
})

res.json(userData)


})





module.exports = router