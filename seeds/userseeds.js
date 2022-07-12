const userdata = require('../models/users')


const users = [
    {
        username: "JohnF",
        email: "JF@gmail.com"
    },
    {
        username: "RichC",
        email: "rfes@gmail.com"
    },
    {
        username: "IsaacL",
        email: " issa@gmail.com"
    },
    {
        username: "Andre",
        email : "And@gmail.com"
    },
    {
        username: "Des",
        email: "Des@gmail.com"
    }
]


function seedusers() {
    
    userdata.bulkCreate(users)

}

module.exports = seedusers