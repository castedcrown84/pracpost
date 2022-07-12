const sequelize = require("../config/connections")
const seedusers = require("./userseeds")



async function seedDatabase(){

await sequelize.sync({force:true})
await seedusers()

}

seedDatabase();