import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'

const CreateExercise = () => {
  const [username, setUsername] = useState('')
  const [description, setDescription] = useState('')
  const [duration, setDuration] = useState(0)
  const [date, setDate] = useState(new Date())
  const [users, setUsers] = useState([])

  useEffect(() => {
    setUsers(['test'])
    setUsername('test')
  }, [])

  const onChangeUsername = (event) => {
    setUsername(event.target.value)
  }

  const onChangeDescription = (event) => {
    console.log(event.target)
    setDescription(event.target.value)
  }

  const onChangeDuration = (event) => {
    setDuration(event.target.value)
    console.log(event.target)
  }

  const onChangeDate = (date) => {
    setDate(date)
  }

  const onSubmit = (event) => {
    event.preventDefault()

    const exercise = {
      username: username,
      description: description,
      duration: duration,
      date: date,
    }

    console.log(exercise)

    axios
      .post('http://localhost:5000/exercise/add', exercise)
      .then((response) => {
        console.log('Response' + response.data)
      })
      .catch((error) => {
        console.log('Error' + error)
      })

    // window.location.href = '/';
  }

  return (
    <div>
      <h3>Create New Exercise Log</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <select
            required
            className="form-control"
            value={username}
            onChange={() => onChangeUsername()}
          >
            {users.map(function (user) {
              return (
                <option key={user} value={user}>
                  {user}
                </option>
              )
            })}
          </select>
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input
            type="text"
            required
            className="form-control"
            value={description}
            onChange={onChangeDescription}
          />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input
            type="text"
            className="form-control"
            value={duration}
            onChange={onChangeDuration}
          />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker selected={date} onChange={onChangeDate} />
          </div>
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Create Exercise Log"
            className="btn btn-secondary"
          />
        </div>
      </form>
    </div>
  )
}

export default CreateExercise
