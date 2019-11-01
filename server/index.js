//requirements
require('dotenv').config()
const express = require('express')
const {PORT, STRING} = process.env
const massive = require('massive')
// const ctrl = require('./controller')

const app = express()
app.use(express.json)

//endpoints

//massive - listening

massive(STRING).then(databaseConnection => {
    app.set('db', databaseConnection)
    console.log('database is on and working')
    app.listen(PORT, ()=>console.log(`PORT ${PORT} is on and ready to copy`))
})

