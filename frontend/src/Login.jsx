import { useState } from 'react'
import axios from 'axios'
import { LogIn, Users } from 'lucide-react'

function Login({ onLogin, onRegister }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()

    setMessage('')
    setLoading(true)

    try {
      const response = await axios.post(
        'http://localhost:8080/api/auth/login',
        {
          email,
          password
        }
      )

      localStorage.setItem('token', response.data.token)
      localStorage.setItem('userName', response.data.name)
      localStorage.setItem('userEmail', response.data.email)
      localStorage.setItem('userRole', response.data.role)

      onLogin(response.data)
      window.location.reload()
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
        'Invalid email or password'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-page">

      <div className="login-card">

        <div className="login-logo">
          <div className="brand-icon">
            <Users size={28} />
          </div>

          <h1>EmployeeHub</h1>
          <p>Employee Management System</p>
        </div>

        <div className="login-title">
          <h2>Welcome Back</h2>
          <p>Login to manage your employees</p>
        </div>

        {message && (
          <div className="login-error">
            {message}
          </div>
        )}

        <form onSubmit={handleLogin}>

          <label>
            Email
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label>
            Password
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>

          <button
            type="submit"
            className="primary-btn login-btn"
            disabled={loading}
          >
            <LogIn size={18} />

            {loading ? 'Logging in...' : 'Login'}
          </button>

        </form>

        <p className="login-footer">
         Don't have an account?{' '}
         <button
            type="button"
            className="link-btn"
            onClick={onRegister}
         >
    Register
  </button>
</p>

      </div>

    </div>
  )
}

export default Login