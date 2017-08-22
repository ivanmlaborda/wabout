const express = require('express')
const path = require('path')

const app = express()
const pathPublic = path.join(process.cwd(), 'client')

const PORT = process.env.PORT || 3001

// const routerMap = require('./routes/map')

app.use(express.static(pathPublic))
// app.use(routerMap)

app.listen(PORT, () => `Listening on Port ${PORT}`)
console.log(`Listening on Port ${PORT}`)
