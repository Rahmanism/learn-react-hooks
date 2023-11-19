import { createContext, useContext } from 'react'

export const UserContext = createContext(undefined)

export const useUserContext = () => {
  const [user, setUser] = useContext(UserContext)

  if (user === undefined) {
    throw Error('useUserContext must be used within a UserContext')
  }

  return [user, setUser]
}
