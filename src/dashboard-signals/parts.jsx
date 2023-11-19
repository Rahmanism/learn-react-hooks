import React from 'react'
import { userSignal } from './userSignals'

export function Sidebar() {
  const user = userSignal

  return (
    <div>
      <h3>Sidebar</h3>
      <p>{user.value.name}</p>
      <button
        onClick={() => (user.value = { ...user.value, name: 'Mammad Signal' })}
      >
        Change user
      </button>
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
