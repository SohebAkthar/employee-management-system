import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8080/api'
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

export const getEmployees = () =>
  api.get('/employees')

export const createEmployee = (employee) =>
  api.post('/employees', employee)

export const updateEmployee = (id, employee) =>
  api.put(`/employees/${id}`, employee)

export const deleteEmployee = (id) =>
  api.delete(`/employees/${id}`)

export default api