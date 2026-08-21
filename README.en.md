<div align="center">

## 🌐 Language / Idioma

[![Português](https://img.shields.io/badge/🇧🇷_Português-click_here-lightgrey?style=for-the-badge)](./README.md)
[![English](https://img.shields.io/badge/🇺🇸_English-selected-2ea44f?style=for-the-badge)](./README.en.md)

</div>

---

# Protagonize Tech Avanade Bootcamp — Back-End with .NET & AI
<div align="center">

<div align="center">

<img src="https://img.shields.io/badge/Angular-17-DD0031?style=for-the-badge&logo=angular&logoColor=white" />
<img src="https://img.shields.io/badge/.NET-8-512BD4?style=for-the-badge&logo=dotnet&logoColor=white" />
<img src="https://img.shields.io/badge/SQL_Server-CC2927?style=for-the-badge&logo=microsoft-sql-server&logoColor=white" />
<img src="https://img.shields.io/badge/Entity_Framework_Core-512BD4?style=for-the-badge&logo=dotnet&logoColor=white" />

# 📋 Protagonize Tech — Task Manager

Fullstack web application built as a technical challenge for Protagonize Tech's **Web Front Bootcamp (Angular + ASP.NET)**.

Allows creating, viewing, editing, deleting, and filtering tasks by status, with REST communication between front-end and back-end.

</div>

---

## 📑 Table of Contents

- [Technologies](#-technologies)
- [Features](#-features)
- [Prerequisites](#-prerequisites)
- [How to Run the Project](#-how-to-run-the-project)
  - [Back-end (API)](#back-end-api)
  - [Front-end (Angular)](#front-end-angular)
- [API Endpoints](#-api-endpoints)
- [Project Structure](#-project-structure)
- [Author](#-author)

---

## 🛠 Technologies

| Layer | Technology |
|--------|-----------|
| Front-end | Angular 17 |
| Back-end | ASP.NET Core 8 (C#) |
| Database | SQL Server |
| ORM | Entity Framework Core |
| Communication | REST API (JSON) |
| API Documentation | Swagger / OpenAPI |

---

## ✅ Features

- [x] List all tasks
- [x] Create a new task
- [x] Edit an existing task
- [x] Delete a task
- [x] Filter tasks by status (Pending / Completed)
- [x] User feedback messages (success and error)
- [x] Basic form validation

---

## 📦 Prerequisites

Before you begin, make sure you have installed:

- [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- [Node.js (LTS) + npm](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli) — install with:
  ```bash
  npm install -g @angular/cli
  ```
- [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads) installed and running
- [Git](https://git-scm.com/)

---

## 🚀 How to Run the Project

### 1. Clone the repository

```bash
git clone https://github.com/thaynabds/DESAFIO-TECNICO-PROTAGONIZE-TECH.git
cd DESAFIO-TECNICO-PROTAGONIZE-TECH
```

---

### Back-end (API)

1. Go to the back-end folder:
   ```bash
   cd backend/ProtagonizetechAPI
   ```

2. Set your SQL Server connection string in `appsettings.json`:
   ```json
   "ConnectionStrings": {
     "DefaultConnection": "Server=YOUR_SERVER;Database=ProtagonizetechDB;Trusted_Connection=True;TrustServerCertificate=True;"
   }
   ```
   > Replace `YOUR_SERVER` with your SQL Server name or address (e.g., `localhost` or `.\SQLEXPRESS`).

3. Restore dependencies, apply migrations, and run the API:
   ```bash
   dotnet restore
   dotnet ef database update
   dotnet run
   ```

4. The API will be available at:
   - **Base:** `http://localhost:5000`
   - **Swagger (interactive docs):** `http://localhost:5000/swagger`

---

### Front-end (Angular)

> ⚠️ **Note:** the back-end must be running before starting the front-end.

1. In another terminal, go to the front-end folder:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the application:
   ```bash
   ng serve
   ```

4. Open in your browser: **`http://localhost:4200`**

---

## 🔌 API Endpoints

| Method | Route | Description |
|--------|------|-----------|
| `GET` | `/api/tarefas` | Lists all tasks |
| `GET` | `/api/tarefas?status=Pendente` | Filters tasks by status |
| `GET` | `/api/tarefas/{id}` | Retrieves a task by ID |
| `POST` | `/api/tarefas` | Creates a new task |
| `PUT` | `/api/tarefas/{id}` | Updates an existing task |
| `DELETE` | `/api/tarefas/{id}` | Deletes a task |

### Example payload (POST / PUT)

```json
{
  "titulo": "Study Angular",
  "descricao": "Review components, services and routes",
  "status": "Pendente"
}
```

---

## 📁 Project Structure

```
DESAFIO-TECNICO-PROTAGONIZE-TECH/
│
├── backend/
│   └── ProtagonizetechAPI/
│       ├── Controllers/        # TarefasController — REST endpoints
│       ├── Data/               # AppDbContext — EF Core configuration
│       ├── DTOs/               # TarefaDto — data transfer objects
│       ├── Migrations/         # Database migrations
│       ├── Models/             # Task entity
│       └── Program.cs          # Application configuration
│
└── frontend/
    └── src/
        └── app/
            ├── components/
            │   ├── task-list/  # Task listing with filter
            │   └── task-form/  # Form to create and edit tasks
            ├── models/         # Task TypeScript interface
            └── services/       # TarefaService — API consumption via HttpClient
```

---

## 👩‍💻 Author

<div align="center">

### Thayná Batista da Silva

<a href="https://br.linkedin.com/in/thaynabds" target="_blank">
  <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
</a>
<a href="https://www.instagram.com/thaynabdstec/" target="_blank">
  <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" />
</a>
<a href="mailto:thaynabdstec@gmail.com">
  <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" />
</a>

📧 thaynabdstec@gmail.com · 📱 +55 (81) 97912-6121

**Systems Analysis and Development** student — Faculdade Senac Recife · Expected graduation: 2027

<br/>

<img src="https://raw.githubusercontent.com/thaynabds/AppMedSmart/refs/heads/main/Cart%C3%A3o%20TEC%20Thayn%C3%A1%20Batista%20da%20Silva.png" width="340" alt="Thayná Batista da Silva business card" />

</div>

---

<div align="center">
