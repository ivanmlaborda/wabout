const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const bodyParser = require('body-parser')
const http = require('http')
const configSocketIo = require('./config/socketio/configSocketIo.js')

require('dotenv').load()

// global.__base = path.join(__dirname, '/server')
global.__base = path.join(__dirname)

const app = express()
const server = http.createServer(app)
const pathPublic = path.join(process.cwd(), 'client')

const routesApp = require('./routes/')
const PORT = process.env.PORT || 3001
const URL_DB = process.env.URL_DB || 'mongodb://localhost:27017/wabout'

mongoose.promise = global.Promise
mongoose.connect(URL_DB, {
  useMongoClient: true
})

app.use(express.static(pathPublic))
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

configSocketIo(server, app)

app.use(routesApp)

server.listen(PORT)
console.log(`Listening on Port ${PORT}`)
