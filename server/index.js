//requirements
require('dotenv').config()
const express = require('express')
const massive = require('massive')
const ctrl = require('./controller')
const {PORT, STRING} = process.env

const app = express()
app.use(express.json())

//endpoints
app.get('/api/inventory', ctrl.getInventory)

//massive - listening

massive(STRING).then(databaseConnection => {
    app.set('db', databaseConnection)
    console.log('database is on and working')
    app.listen(PORT, ()=>console.log(`PORT ${PORT} is on and ready to copy`))
})

