import axios from 'axios'

const api = axios.create({
  baseURL: 'https://employee-management-system-production-eac9.up.railway.app/api'
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