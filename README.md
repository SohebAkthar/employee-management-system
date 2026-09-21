# 👨‍💼 Employee Management System

A full-stack Employee Management System built using **Java 21, Spring Boot, MySQL, and React.js**.

The application allows users to manage employee records through a modern and responsive web interface connected to a RESTful Spring Boot backend.

---

## 🚀 Features

- ➕ Add new employees
- 👀 View all employees
- ✏️ Update employee details
- 🗑️ Delete employees
- 🔍 Search employees by name, email, or department
- 📊 Employee statistics dashboard
- 🏢 Department count
- 💰 Total salary calculation
- 🔗 RESTful API integration
- 🗄️ MySQL database integration
- 📱 Responsive user interface

---

## 🛠️ Technologies Used

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
- MySQL Workbench

### Tools

- Visual Studio Code
- Git
- GitHub
- Thunder Client

---

## 📂 Project Structure

```text
employee-management-system-java21/
│
├── backend/
│   ├── src/
│   │   └── main/
│   │       ├── java/
│   │       │   └── com/example/employee
│   │       │       ├── controller/
│   │       │       ├── entity/
│   │       │       ├── repository/
│   │       │       └── service/
│   │       │
│   │       └── resources/
│   │           └── application.properties
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

---

## 🖥️ Application Screenshot

### Employee Dashboard

![Employee Dashboard](screenshots/employee-dashboard.png)

---

## 🔗 REST API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/employees` | Get all employees |
| GET | `/api/employees/{id}` | Get employee by ID |
| POST | `/api/employees` | Add a new employee |
| PUT | `/api/employees/{id}` | Update employee |
| DELETE | `/api/employees/{id}` | Delete employee |

---

## ⚙️ How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/SohebAkthar/employee-management-system.git