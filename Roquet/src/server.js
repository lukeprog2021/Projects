const express = require('express')
const route = require('./route').default
const path = require('path')

const server = express()

server.set('views engine', 'ejs')

server.use(express.static('public'))

server.set('views', path.join(__dirname, 'views'))

server.use(route)

server.listen(3000, console.log("RODANDO"))


