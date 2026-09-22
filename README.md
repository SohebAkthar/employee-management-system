# 👨‍💼 Employee Management System

A full-stack Employee Management System built using **Java 21, Spring Boot, MySQL, and React.js**.

This application allows users to add, view, update, delete, and search employee records through a responsive web interface connected to a Spring Boot REST API.

## 🚀 Features

- ➕ Add employees
- 👀 View employees
- ✏️ Update employee details
- 🗑️ Delete employees
- 🔍 Search employees
- 📊 Employee dashboard
- 🏢 Department statistics
- 💰 Salary statistics
- 🔗 RESTful APIs
- 🗄️ MySQL database integration
- 📱 Responsive UI

- ## 🛠️ Technologies Used

### Backend
- Java 21
- Spring Boot
- Spring Data JPA
- Hibernate
- REST API
- Maven

### Frontend
- React.js
- JavaScript
- HTML5
- CSS3
- Vite

### Database
- MySQL

### Tools
- Visual Studio Code
- MySQL Workbench
- Git
- GitHub
- Thunder Client

- ## 📂 Project Structure

```text
employee-management-system/
│
├── backend/
│   ├── src/main/java/com/example/employeemanagement/
│   │   ├── controller/
│   │   ├── entity/
│   │   ├── repository/
│   │   ├── service/
│   │   └── EmployeeManagementApplication.java
│   │
│   ├── src/main/resources/
│   │   └── application.properties
│   │
│   └── pom.xml
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── api.js
│   │   ├── main.jsx
│   │   └── styles.css
│   │
│   ├── package.json
│   └── vite.config.js
│
├── screenshots/
│   └── employee-dashboard.png
│
├── .gitignore
├── JAVA-VERSION.txt
└── README.md

## 📸 Application Screenshot

### Employee Dashboard

![Employee Dashboard](screenshots/employee-dashboard.png)

## 🔗 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/employees` | Get all employees |
| GET | `/api/employees/{id}` | Get employee by ID |
| GET | `/api/employees/search?name=` | Search employees by name |
| POST | `/api/employees` | Add a new employee |
| PUT | `/api/employees/{id}` | Update employee |
| DELETE | `/api/employees/{id}` | Delete employee |

## 🗄️ Database Schema

### Employee Table

| Column | Type | Description |
|--------|------|-------------|
| id | BIGINT | Primary key |
| name | VARCHAR | Employee name |
| email | VARCHAR | Employee email |
| phone | VARCHAR | Employee phone number |
| department | VARCHAR | Employee department |
| salary | DOUBLE | Employee salary |

## ▶️ How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/SohebAkthar/employee-management-system.git
cd employee-management-system

### 2. Start the Backend

Open a terminal:

```bash
cd backend
mvn spring-boot:run

### 3. Start the Frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev

### 4. Database Setup

Create a MySQL database named:

```text
employee_db

### 5. Open the Application

Open your browser and visit:

```text
http://localhost:5173

## ⭐ Project Highlights

- Full-stack Java web application
- RESTful backend using Spring Boot
- React.js frontend
- MySQL database integration
- CRUD operations for employee management
- Search functionality
- Responsive dashboard
- Clean and simple user interface

## 👨‍💻 Author

**K MD Soheb Akthar**

Information Science Engineering Student  
Rao Bahadur Y. Mahabaleshwarappa Engineering College (RYMEC)

- 💼 LinkedIn: [K MD Soheb Akthar](https://www.linkedin.com/in/k-md-soheb-akthar/)
- 📧 Email: [soheb.ise.rymec@gmail.com](mailto:soheb.ise.rymec@gmail.com)
- 💻 GitHub: [SohebAkthar](https://github.com/SohebAkthar)

## 🚀 Future Enhancements

- 🔐 User authentication and authorization
- 👥 Role-based access control
- 📄 Employee profile management
- 📊 Advanced analytics and reports
- 🔎 Advanced filtering and sorting
- ☁️ Cloud deployment
- 📱 Improved mobile responsiveness
