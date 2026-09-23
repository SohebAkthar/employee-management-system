import { useState } from 'react'
import axios from 'axios'
import { UserPlus, Users } from 'lucide-react'

function Register({ onRegister }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleRegister = async (e) => {
    e.preventDefault()

    setMessage('')
    setLoading(true)

    try {
      const response = await axios.post(
        'http://localhost:8080/api/auth/register',
        {
          name,
          email,
          password
        }
      )

      setMessage(response.data)

      setTimeout(() => {
        onRegister()
      }, 1000)

    } catch (error) {
      setMessage(
        error.response?.data ||
        'Registration failed'
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
          <h2>Create Account</h2>
          <p>Register to manage your employees</p>
        </div>

        {message && (
          <div className="login-error">
            {message}
          </div>
        )}

        <form onSubmit={handleRegister}>

          <label>
            Full Name
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>

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
              placeholder="Create a password"
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
            <UserPlus size={18} />
            {loading ? 'Creating Account...' : 'Register'}
          </button>

        </form>

        <p className="login-footer">
          Employee Management System
        </p>

      </div>
    </div>
  )
}

export default Register