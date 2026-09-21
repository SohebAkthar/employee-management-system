import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8080/api'
})

export const getEmployees = () => api.get('/employees')
export const searchEmployees = (name) => api.get(`/employees/search?name=${encodeURIComponent(name)}`)
export const createEmployee = (employee) => api.post('/employees', employee)
export const updateEmployee = (id, employee) => api.put(`/employees/${id}`, employee)
export const deleteEmployee = (id) => api.delete(`/employees/${id}`)
