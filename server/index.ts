import express from 'express'
import http from 'http'
import cors from 'cors'
import { Server } from 'socket.io'

const PORT = 4000
const app = express()
app.use(cors())
const server = http.createServer(app)

app.use(express.json())

const socketServer = new Server(server, {
  cors: {
    origin: 'http://localhost:5173/',
    methods: ['GET', 'POST']
  }
})

socketServer.on('connection', (socket) => {
  console.log(`User connected ${socket.id}`)
})

app.get("/", (_, res) => {
  res.send("Hello there, this is the server")
})

app.get("/checkhealth", (_, res) => {
  res.send("Everything is working")
})

app.listen(PORT, () => {
  console.info(`Server running on port ${PORT}`)
})
