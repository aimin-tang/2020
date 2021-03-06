const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000
const publicDirPath = path.join(__dirname, '../public')

app.use(express.static(publicDirPath))

io.on('connection', (socket) => {
    console.log("New websocket connection")
    socket.emit('message', 'Welcome!')
    socket.broadcast.emit('message', 'A new user joined')
    socket.on('sendMessage', (d) => {
        io.emit('message', d)
    })

    socket.on('disconnect', () => {
        io.emit('message', 'A user left')
    })
})

server.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})