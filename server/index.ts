import express from 'express'
import cors from 'cors'

const PORT = 4000
const app = express()

app.use(express.json())
app.use(cors())

app.get("/checkhealth", (_, res) => {
  res.send("Everything is working")
})

app.listen(PORT, () => {
  console.info(`Server running on port ${PORT}`)
})
