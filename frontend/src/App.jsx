import { useEffect, useMemo, useState } from 'react'
import Login from './Login'
import Register from './Register'
import { Users, UserPlus, Search, Pencil, Trash2, X, Building2, LogOut } from 'lucide-react'
import { createEmployee, deleteEmployee, getEmployees, updateEmployee } from './api'

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  department: '',
  salary: ''
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem('token')
  )

  const [employees, setEmployees] = useState([])
  const [form, setForm] = useState(emptyForm)
  const [editingId, setEditingId] = useState(null)
  const [search, setSearch] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState('')

    const handleLogin = () => {
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('userName')
  localStorage.removeItem('userEmail')
  localStorage.removeItem('userRole')

  window.location.reload()
}

  if (!isLoggedIn) {
  if (window.location.pathname === '/register') {
    return (
      <Register
        onRegister={() => window.location.href = '/'}
      />
    )
  }

  return (
    <Login
      onLogin={handleLogin}
      onRegister={() => window.location.href = '/register'}
    />
  )
}
  const loadEmployees = async () => {
    try {
      const response = await getEmployees()
      setEmployees(response.data)
    } catch {
      setMessage('Could not connect to the backend. Make sure Spring Boot is running.')
    } finally {
      setLoading(false)
    }
  }

 useEffect(() => {
  if (isLoggedIn) {
    loadEmployees()
  }
}, [isLoggedIn])

  const filteredEmployees = useMemo(() => {
    const value = search.trim().toLowerCase()
    if (!value) return employees
    return employees.filter(e =>
      e.name.toLowerCase().includes(value) ||
      e.email.toLowerCase().includes(value) ||
      e.department.toLowerCase().includes(value)
    )
  }, [employees, search])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const openAdd = () => {
    setForm(emptyForm)
    setEditingId(null)
    setShowForm(true)
  }

  const openEdit = (employee) => {
    setForm({
      name: employee.name,
      email: employee.email,
      phone: employee.phone,
      department: employee.department,
      salary: employee.salary
    })
    setEditingId(employee.id)
    setShowForm(true)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const payload = { ...form, salary: Number(form.salary) }
      if (editingId) {
        await updateEmployee(editingId, payload)
        setMessage('Employee updated successfully.')
      } else {
        await createEmployee(payload)
        setMessage('Employee added successfully.')
      }
      setShowForm(false)
      setForm(emptyForm)
      setEditingId(null)
      await loadEmployees()
    } catch (error) {
      setMessage(error.response?.data?.message || 'Operation failed. Check the backend.')
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this employee?')) return
    try {
      await deleteEmployee(id)
      setMessage('Employee deleted successfully.')
      await loadEmployees()
    } catch {
      setMessage('Could not delete employee.')
    }
  }

  const totalSalary = employees.reduce((sum, e) => sum + Number(e.salary || 0), 0)

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <div className="brand-icon"><Users size={24} /></div>
          <div>
            <h1>EmployeeHub</h1>
            <p>Employee Management System</p>
          </div>
        </div>
         <div className="user-info">
          <span>Welcome,</span>
          <strong>{localStorage.getItem('userName')}</strong>
        </div>
        
        <button className="primary-btn" onClick={openAdd}>
          <UserPlus size={18} /> Add Employee
        </button>

        <button className="secondary-btn" onClick={handleLogout}>
          <LogOut size={18} /> Logout
        </button>
      </header>

      <main className="container">
        {message && (
          <div className="notice">
            <span>{message}</span>
            <button onClick={() => setMessage('')}><X size={17}/></button>
          </div>
        )}

        <section className="stats">
          <div className="stat-card">
            <div><span>Total Employees</span><strong>{employees.length}</strong></div>
            <Users size={28}/>
          </div>
          <div className="stat-card">
            <div><span>Departments</span><strong>{new Set(employees.map(e => e.department)).size}</strong></div>
            <Building2 size={28}/>
          </div>
          <div className="stat-card">
            <div><span>Total Salary</span><strong>₹{totalSalary.toLocaleString('en-IN')}</strong></div>
            <span className="rupee">₹</span>
          </div>
        </section>

        <section className="panel">
          <div className="panel-head">
            <div>
              <h2>Employees</h2>
              <p>Manage your employee records</p>
            </div>
            <div className="search">
              <Search size={18}/>
              <input
                placeholder="Search by name, email or department..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
          </div>

          {loading ? (
            <div className="empty">Loading employees...</div>
          ) : filteredEmployees.length === 0 ? (
            <div className="empty">
              <Users size={42}/>
              <h3>No employees found</h3>
              <p>Add your first employee to get started.</p>
            </div>
          ) : (
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Employee</th>
                    <th>Phone</th>
                    <th>Department</th>
                    <th>Salary</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredEmployees.map(employee => (
                    <tr key={employee.id}>
                      <td>
                        <div className="employee-cell">
                          <div className="avatar">{employee.name.charAt(0).toUpperCase()}</div>
                          <div><strong>{employee.name}</strong><small>{employee.email}</small></div>
                        </div>
                      </td>
                      <td>{employee.phone}</td>
                      <td><span className="badge">{employee.department}</span></td>
                      <td>₹{Number(employee.salary).toLocaleString('en-IN')}</td>
                      <td>
                        <div className="actions">
                          <button className="icon-btn edit" title="Edit" onClick={() => openEdit(employee)}><Pencil size={17}/></button>
                          <button className="icon-btn delete" title="Delete" onClick={() => handleDelete(employee.id)}><Trash2 size={17}/></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </main>

      {showForm && (
        <div className="modal-backdrop" onMouseDown={e => e.target === e.currentTarget && setShowForm(false)}>
          <div className="modal">
            <div className="modal-head">
              <div>
                <h2>{editingId ? 'Edit Employee' : 'Add Employee'}</h2>
                <p>{editingId ? 'Update employee information' : 'Enter employee information'}</p>
              </div>
              <button className="close-btn" onClick={() => setShowForm(false)}><X/></button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <label>Full Name<input required name="name" value={form.name} onChange={handleChange} placeholder="Soheb Akthar"/></label>
                <label>Email<input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="soheb@example.com"/></label>
                <label>Phone<input required name="phone" value={form.phone} onChange={handleChange} placeholder="9876543210"/></label>
                <label>Department
                  <select required name="department" value={form.department} onChange={handleChange}>
                    <option value="">Select department</option>
                    <option>IT</option>
                    <option>HR</option>
                    <option>Finance</option>
                    <option>Marketing</option>
                    <option>Sales</option>
                    <option>Operations</option>
                  </select>
                </label>
                <label>Annual Salary (₹)<input required type="number" min="0" name="salary" value={form.salary} onChange={handleChange} placeholder="500000"/></label>
              </div>
              <div className="form-actions">
                <button type="button" className="secondary-btn" onClick={() => setShowForm(false)}>Cancel</button>
                <button type="submit" className="primary-btn">{editingId ? 'Update Employee' : 'Add Employee'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
