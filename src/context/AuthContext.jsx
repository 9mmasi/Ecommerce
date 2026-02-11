import React, { createContext, useEffect, useState } from 'react'

 const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem('users')) || []
  })

  const [currentUser, setCurrentUser] = useState(() => {
    return JSON.parse(localStorage.getItem('currentUser')) || null
  })

  // keep localStorage in sync
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users))
  }, [users])

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('currentUser', JSON.stringify(currentUser))
    } else {
      localStorage.removeItem('currentUser')
    }
  }, [currentUser])

  function signup(email, password) {
    const exists = users.find(u => u.email === email)

    if (exists) {
      return { success: false, error: 'User already exists' }
    }

    const newUser = { email, password }
    setUsers(prev => [...prev, newUser])
    setCurrentUser({ email })

    return { success: true }
  }

  function login(email, password) {
    const user = users.find(
      u => u.email === email && u.password === password
    )

    if (!user) {
      return { success: false, error: 'Invalid credentials' }
    }

    setCurrentUser({ email: user.email })
    return { success: true }
  }

  function logout() {
    localStorage.removeItem('currentUser')
    setCurrentUser(null)
  }

  const value = {
    users,
    currentUser,
    signup,
    login,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthContext