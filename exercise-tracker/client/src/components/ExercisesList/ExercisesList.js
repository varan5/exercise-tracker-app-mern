import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ExerciseList = () => {
  const [exercises, setExercises] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:5000/exercise')
      .then((response) => {
        setExercises(response.data.message)
        console.log(response.data.message)
      })
      .catch((error) => {
        console.log('Error' + error)
      })
  }, [])

  return (
    <div>
      {
        exercises.map((exercise) => {
          <div>{exercise}</div>
        })
      }
    </div>
  )
}

export default ExerciseList
