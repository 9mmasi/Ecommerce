import React from 'react'
import { useForm } from 'react-hook-form'
import  AuthContext  from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Auth = () => {
  const [mode, setMode] = React.useState('login')
  const [authError, setAuthError] = React.useState(null)

  const navigate = useNavigate()
  const { signup, login } = React.useContext(AuthContext)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  function onSubmit(data) {
    setAuthError(null)

    if (mode === 'signup') {
      const res = signup(data.email, data.password)

      if (!res.success) {
        setAuthError(res.error)
        return
      }

      setMode('login')
    } else {
      const res = login(data.email, data.password)

      if (!res.success) {
        setAuthError(res.error)
        return
      }

      navigate('/')
    }
  }

  return (
    <div className="page">
      <div className="container">
        <div className="auth-container">
          <h1 className="page-title">
            {mode === 'signup' ? 'Sign Up' : 'Log In'}
          </h1>

          {/* 🔴 Auth error from Context */}
          {authError && (
            <div className="error-message">
              {authError}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                <input
                  id="email"
                  type="email"
                  className="form-input"
                  placeholder="Email"
                  {...register('email', { required: true })}
                />
              </label>
              {errors.email && (
                <span className="error">Email is required</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">
                <input
                  id="password"
                  type="password"
                  className="form-input"
                  placeholder="Password"
                  {...register('password', {
                    required: true,
                    minLength: 6
                  })}
                />
              </label>
              {errors.password && (
                <span className="error">
                  Password must be at least 6 characters
                </span>
              )}
            </div>

            <button className="btn btn-primary" type="submit">
              {mode === 'signup' ? 'Sign Up' : 'Log In'}
            </button>
          </form>

          {mode === 'signup' && (
            <div className="auth-switch">
              <p>
                Already have an account?{' '}
                <span
                  className="auth-link"
                  onClick={() => {
                    setAuthError(null)
                    setMode('login')
                  }}
                >
                  Log In
                </span>
              </p>
            </div>
          )}

          {mode === 'login' && (
            <div className="auth-switch">
              <p>
                Don’t have an account?{' '}
                <span
                  className="auth-link"
                  onClick={() => {
                    setAuthError(null)
                    setMode('signup')
                  }}
                >
                  Register
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Auth
