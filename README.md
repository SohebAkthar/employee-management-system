# Employee Management System

A one-day Java Full Stack project built with React.js, Spring Boot and MySQL.

## Tech Stack

- Java 21
- Spring Boot
- Spring Data JPA
- MySQL
- React.js
- Axios
- HTML5 / CSS3
- REST API
- Maven

## Features

- Add employee
- View employees
- Edit employee
- Delete employee
- Search employee
- Department and salary dashboard
- Responsive UI
- MySQL persistence

## Database

Create the database:

```sql
CREATE DATABASE employee_db;
```

Then edit:

`backend/src/main/resources/application.properties`

Replace:

```properties
spring.datasource.password=YOUR_MYSQL_PASSWORD
```

with your MySQL password.

## Run Backend

```bash
cd backend
mvn spring-boot:run
```

Backend runs on:

`http://localhost:8080`

## Run Frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

`http://localhost:5173`

## API Endpoints

- GET `/api/employees`
- GET `/api/employees/{id}`
- GET `/api/employees/search?name=Soheb`
- POST `/api/employees`
- PUT `/api/employees/{id}`
- DELETE `/api/employees/{id}`

## Project Description

Employee Management System is a full-stack web application that provides CRUD operations for employee records. The React frontend communicates with a Spring Boot REST API, while Spring Data JPA persists employee data in MySQL.
