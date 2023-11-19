import React from 'react'

export function Sidebar({ user }) {
  return (
    <div>
      <h3>Sidebar</h3>
      <p>{user.name}</p>
    </div>
  )
}

export function Profile({ user }) {
  return (
    <div>
      <h3>Profile</h3>
      <p>{user.email}</p>
    </div>
  )
}
