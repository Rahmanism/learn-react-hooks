import React, { useState } from 'react'
import Dashboard from './Dashboard'
import { UserContext } from './userContext'

function DemoDashboardWithContext() {
  const [user, setUser] = useState({
    name: 'John Doe from context',
    email: 'john@doe-context.com',
  })

  return (
    <div>
      <h3>Demo Context</h3>
      <UserContext.Provider value={[user, setUser]}>
        <Dashboard />
      </UserContext.Provider>
    </div>
  )
}

export default DemoDashboardWithContext
