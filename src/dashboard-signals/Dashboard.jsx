import React, { useState } from 'react'
import { Profile, Sidebar } from './parts'

function Dashboard() {
  return (
    <div>
      <h1>Signals Dashboard</h1>
      <Sidebar />
      <Profile />
    </div>
  )
}

export default Dashboard
