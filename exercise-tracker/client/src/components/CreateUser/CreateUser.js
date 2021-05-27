import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

const CreateUser = () => {
  const [username, setUsername] = useState('')

  const onChangeUsername = (event) => {
    setUsername(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()

    const user = {
      username: username,
    }

    console.log(user)
    axios
      .post('http://localhost:5000/users/add', user)
      .then((result) => {
        console.log(result.data)
      })
      .catch((error) => {
        console.log('Error' + error)
      })
  }

  return (
    <div>
      <h3>Create New Exercise Log</h3>
      <form onSubmit={onSubmit}>
        <label>Username:</label>
        <input
          type="text"
          required
          className="form-control"
          value={username}
          onChange={onChangeUsername}
        />
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

export default CreateUser
