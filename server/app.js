const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const bodyParser = require('body-parser')
const sio = require('socket.io')
const http = require('http')

const app = express()
const server = http.createServer(app)
const io = sio.listen(server)
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

let idList = {}

io.on('connection', function(socket) {
  console.log(`Client w/ id ${socket.id} connected`)
  socket.on('join', function(userId) {
    console.log(userId)
    io.emit('serverMsg', `You are now connected to the server`)
  })
  socket.on('setId', (userId) => {
    idList[userId] = socket.id
    console.log(idList)
  })

  socket.on('userCoords', function(data) {
    data.id = findKey(idList, socket.id)
    console.log(data.id)
    io.emit('serverMsg', 'Data arrive to server')
    // io.sockets.emit('updateCoords', data)
    socket.broadcast.emit('updateCoords', data)
  })
})

const findKey = (obj, value) => {
  let key = null
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      if (obj[prop] === value) {
        key = prop
      }
    }
  }
  return key
}

app.use(routesApp)

server.listen(PORT)
console.log(`Listening on Port ${PORT}`)
