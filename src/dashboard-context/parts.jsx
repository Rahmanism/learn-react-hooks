import { useState } from 'react'
import { useUserContext } from './userContext'

export function Sidebar() {
  const [user, setUser] = useUserContext()
  const [username, setUsername] = useState(user.name)

  return (
    <div>
      <h3>Sidebar</h3>
      <p>{user.name}</p>
      <p>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <button
          onClick={() => {
            setUser((u) => ({
              ...u,
              name: username,
            }))
          }}
        >
          Change user
        </button>
      </p>
    </div>
  )
}

export function Profile() {
  const [user] = useUserContext()

  return (
    <div>
      <h3>Profile</h3>
      <p>{user.email}</p>
    </div>
  )
}
