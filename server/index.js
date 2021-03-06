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
app.get('/api/inventory/:id', ctrl.getProduct)
app.post('/api/inventory', ctrl.postProduct)
app.delete('/api/inventory/:id', ctrl.deletePost)
app.put('/api/inventory/:id', ctrl.updatePost)

//massive - listening

massive(STRING).then(databaseConnection => {
    app.set('db', databaseConnection)
    console.log('database is on and working')
    app.listen(PORT, ()=>console.log(`PORT ${PORT} is on and ready to copy`))
})

