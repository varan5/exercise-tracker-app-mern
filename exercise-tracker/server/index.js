const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const usersRouter = require('./routes/users')
const exercisesRouter = require('./routes/exercises')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI
mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  },
  () => {
    console.log('Mongodb connected')
  }
)

app.use('/exercise', exercisesRouter)
app.use('/users', usersRouter)

app.listen(port, () => {
  console.log(`Server is running on Port: ${port}`)
})
