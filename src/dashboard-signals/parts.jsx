import React, { useState } from 'react'
import { userSignal } from './userSignals'

export function Sidebar() {
  const user = userSignal
  const [username, setUsername] = useState(user.value.name)

  return (
    <div>
      <h3>Sidebar</h3>
      <p>{user.value.name}</p>
      <p>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <button
          onClick={() =>
            (user.value = { ...user.value, name: username })
          }
        >
          Change user
        </button>
      </p>
    </div>
  )
}

export function Profile() {
  const user = userSignal.value

  return (
    <div>
      <h3>Profile</h3>
      <p>{user.email}</p>
    </div>
  )
}
