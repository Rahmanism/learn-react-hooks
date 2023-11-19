import React, { useState } from 'react'
import { Profile, Sidebar } from './parts'

function Dashboard() {
  const [user] = useState({
    name: 'John Doe',
    email: 'john@doe.com',
  })

  return (
    <div>
      <h1>Dashboard</h1>
      <Sidebar user={user} />
      <Profile user={user} />
    </div>
  )
}

export default Dashboard
