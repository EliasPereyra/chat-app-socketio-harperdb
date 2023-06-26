import https from 'node:https'
import { Server } from 'socket.io'

const PORT = 4000
const server = https.createServer()

const CHAT_BOT = Symbol('ChatBot')
let chatRoomUsers = []
let allUsers = []

const socketServer = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST']
  }
})

socketServer.on('connection', (socket) => {
  console.log(`User connected ${socket.id}`)

  socket.on("join_room", (data) => {
    const { username, room } = data
    socket.join(room)

    let __createdTime__ = Date.now()
    socket.to(room).emit('receive_message', {
      message: `${username} has joined the chat room`,
      username: CHAT_BOT,
      __createdTime__
    })

    socket.emit('receive_message', {
      message: `Welcome ${username}`,
      username: CHAT_BOT,
      __createdTime__
    })

    let chatRoomUsers
    allUsers.push({ id: socket.id, username, room })
    chatRoomUsers = allUsers.filter(user => user.room === room)
    socket.to(room).emit('chatroom_users', chatRoomUsers)
    socket.emit('chatroom_users', chatRoomUsers)
  })
})

socketServer.listen(PORT)
