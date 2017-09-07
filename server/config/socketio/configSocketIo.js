const findKey = require('../../modules/findKey.js')
const getBroadContacts = require('../../modules/getBroadContacts.js')


function configSocketIo (server ,app) {
  const sio = require('socket.io')
  const io = sio.listen(server)

  let usersConnected = []
  let idList = {}

  io.on('connection', function (socket) {
    console.log(`Client w/ id ${socket.id} connected`)
    socket.on('join', function (userId) {
      console.log(userId)
      io.emit('serverMsg', `You are now connected to the server`)
    })
    socket.on('setId', (userId) => {
      idList[userId] = socket.id
      console.log('idList')
      console.log(idList)
    })

    socket.on('userCoords', function (data) {
      console.log('userCoords arrive')
      getBroadContacts(data.name)
        .then(contacts => {
          console.log(`broadContacts ${contacts}`)
          data.id = findKey(idList, socket.id)
          console.log(data.id)
          io.emit('serverMsg', 'Data arrive to server')
          contacts.forEach(contact => socket.to(idList[contact]).emit('updateCoords', data))
        })
    })
  })
}

module.exports = configSocketIo
