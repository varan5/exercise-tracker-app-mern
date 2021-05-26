const express = require('express')
const mongoose = require('mongoose')
const Exercise = require('../models/Exercise.model')

const router = express.Router()

router.get('/', (req, res) => {
  Exercise.find()
    .then((allExercises) => {
      res.json({ message: allExercises })
    })
    .catch((error) => {
      res.status(400).json({ error: error })
    })
})

router.post('/add', (req, res) => {
  const username = req.body.username
  const description = req.body.description
  const duration = Number(req.body.duration)
  const date = Date.parse(req.body.date)

  const newExerciseInstance = new Exercise({
    username,
    description,
    duration,
    date,
  })

  newExerciseInstance
    .save()
    .then(() => {
      res.json({ message: 'New exercise was created successfully' })
    })
    .catch((error) => {
      res.status(400).json({ error: error })
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  Exercise.findById(id)
    .then((exercise) => {
      res.json({ exercise: exercise })
    })
    .catch((error) => {
      res.status(400).json({ error: error })
    })
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  Exercise.findByIdAndDelete(id)
    .then(() => {
      res.json('Exercise deleted')
    })
    .catch((error) => {
      res.status(400).json({ error: error })
    })
})

router.post('/update/:id', (req, res) => {
  const id = req.params.id
  Exercise.findById(id).then((exercise) => {
    exercise.username = req.body.username
    exercise.description = req.body.description
    exercise.duration = Number(req.body.duration)
    exercise.date = Date.parse(req.body.date)

    exercise
      .save() // Updating the database with the above updations
      .then(() => {
        res.json({ message: 'Exercise updated' })
      })
      .catch((error) => {
        res.status(400).json({ error: error })
      })
      .catch((error) => {
        res.status(400).json({ error: error })
      })
  })
})

module.exports = router
