const express = require("express");
const path = require('path')
const sequelize = require('./config/connections')

const app = express() 
const PORT = process.env.PORT || 3007

const routes = require('./routes')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')))

app.use(routes)




sequelize.sync().then( app.listen(PORT, ()=> {
    console.log(`Listening to app on http://localhost:${PORT}`)
}))