const express = require('express')
const mongoose = require('mongoose')
const User = require('../models/User.model')

const router = express.Router()

router.get('/', (req, res) => {
  User.find()
    .then((allUsers) => {
      res.json({ message: allUsers })
    })
    .catch((error) => res.status(400).json('error' + error))
})

router.post('/add', (req, res) => {
  const username = req.body.username
  console.log(username)
  const newUserInstance = new User({ username })
  console.log(newUserInstance)

  newUserInstance
    .save()
    .then(() => res.json({ message: 'User added successfully' }))
    .catch((error) => {
      console.log(error)
      res
        .status(400)
        .json({ error: 'Error occured while adding the new user' + error })
    })
})

module.exports = router
