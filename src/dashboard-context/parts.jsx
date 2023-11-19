import { useUserContext } from './userContext'

export function Sidebar() {
  const [user, setUser] = useUserContext()

  return (
    <div>
      <h3>Sidebar</h3>
      <p>{user.name}</p>
      <button
        onClick={() => {
          setUser((u) => ({
            ...u,
            name: 'Mammad',
          }))
        }}
      >
        Change user
      </button>
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
