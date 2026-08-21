<div align="center">

## 🌐 Idioma / Language

[![Português](https://img.shields.io/badge/🇧🇷_Português-selecionado-2ea44f?style=for-the-badge)](./README.md)
[![English](https://img.shields.io/badge/🇺🇸_English-click_here-lightgrey?style=for-the-badge)](./README.en.md)

</div>

---

# Bootcamp Protagonize Tech Avanade Back-End com .NET & IA
<div align="center">

<div align="center">

<img src="https://img.shields.io/badge/Angular-17-DD0031?style=for-the-badge&logo=angular&logoColor=white" />
<img src="https://img.shields.io/badge/.NET-8-512BD4?style=for-the-badge&logo=dotnet&logoColor=white" />
<img src="https://img.shields.io/badge/SQL_Server-CC2927?style=for-the-badge&logo=microsoft-sql-server&logoColor=white" />
<img src="https://img.shields.io/badge/Entity_Framework_Core-512BD4?style=for-the-badge&logo=dotnet&logoColor=white" />

# 📋 Protagonize Tech — Gerenciador de Tarefas

Aplicação web fullstack desenvolvida como desafio técnico do **Bootcamp Web Front (Angular + ASP.NET)** da Protagonize Tech.

Permite criar, visualizar, editar, excluir e filtrar tarefas por status, com comunicação REST entre front-end e back-end.

</div>

---

## 📑 Índice

- [Tecnologias](#-tecnologias)
- [Funcionalidades](#-funcionalidades)
- [Pré-requisitos](#-pré-requisitos)
- [Como rodar o projeto](#-como-rodar-o-projeto)
  - [Back-end (API)](#back-end-api)
  - [Front-end (Angular)](#front-end-angular)
- [Endpoints da API](#-endpoints-da-api)
- [Estrutura do projeto](#-estrutura-do-projeto)
- [Autora](#-autora)

---

## 🛠 Tecnologias

| Camada | Tecnologia |
|--------|-----------|
| Front-end | Angular 17 |
| Back-end | ASP.NET Core 8 (C#) |
| Banco de dados | SQL Server |
| ORM | Entity Framework Core |
| Comunicação | REST API (JSON) |
| Documentação da API | Swagger / OpenAPI |

---

## ✅ Funcionalidades

- [x] Listar todas as tarefas
- [x] Criar nova tarefa
- [x] Editar tarefa existente
- [x] Excluir tarefa
- [x] Filtrar tarefas por status (Pendente / Concluída)
- [x] Mensagens de feedback ao usuário (sucesso e erro)
- [x] Validação básica de formulário

---

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- [Node.js (LTS) + npm](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli) — instale com:
  ```bash
  npm install -g @angular/cli
  ```
- [SQL Server](https://www.microsoft.com/pt-br/sql-server/sql-server-downloads) instalado e em execução
- [Git](https://git-scm.com/)

---

## 🚀 Como rodar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/thaynabds/DESAFIO-TECNICO-PROTAGONIZE-TECH.git
cd DESAFIO-TECNICO-PROTAGONIZE-TECH
```

---

### Back-end (API)

1. Acesse a pasta do back-end:
   ```bash
   cd backend/ProtagonizetechAPI
   ```

2. Configure a string de conexão com o seu SQL Server no arquivo `appsettings.json`:
   ```json
   "ConnectionStrings": {
     "DefaultConnection": "Server=SEU_SERVIDOR;Database=ProtagonizetechDB;Trusted_Connection=True;TrustServerCertificate=True;"
   }
   ```
   > Substitua `SEU_SERVIDOR` pelo nome ou endereço do seu servidor SQL Server (ex: `localhost` ou `.\SQLEXPRESS`).

3. Restaure as dependências, aplique as migrations e rode a API:
   ```bash
   dotnet restore
   dotnet ef database update
   dotnet run
   ```

4. A API estará disponível em:
   - **Base:** `http://localhost:5000`
   - **Swagger (documentação interativa):** `http://localhost:5000/swagger`

---

### Front-end (Angular)

> ⚠️ **Atenção:** o back-end precisa estar em execução antes de iniciar o front-end.

1. Em outro terminal, acesse a pasta do front-end:
   ```bash
   cd frontend
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie a aplicação:
   ```bash
   ng serve
   ```

4. Acesse no navegador: **`http://localhost:4200`**

---

## 🔌 Endpoints da API

| Método | Rota | Descrição |
|--------|------|-----------|
| `GET` | `/api/tarefas` | Lista todas as tarefas |
| `GET` | `/api/tarefas?status=Pendente` | Filtra tarefas por status |
| `GET` | `/api/tarefas/{id}` | Busca uma tarefa pelo ID |
| `POST` | `/api/tarefas` | Cria uma nova tarefa |
| `PUT` | `/api/tarefas/{id}` | Atualiza uma tarefa existente |
| `DELETE` | `/api/tarefas/{id}` | Remove uma tarefa |

### Exemplo de payload (POST / PUT)

```json
{
  "titulo": "Estudar Angular",
  "descricao": "Revisar componentes, serviços e rotas",
  "status": "Pendente"
}
```

---

## 📁 Estrutura do projeto

```
DESAFIO-TECNICO-PROTAGONIZE-TECH/
│
├── backend/
│   └── ProtagonizetechAPI/
│       ├── Controllers/        # TarefasController — endpoints REST
│       ├── Data/               # AppDbContext — configuração do EF Core
│       ├── DTOs/               # TarefaDto — transferência de dados
│       ├── Migrations/         # Migrations do banco de dados
│       ├── Models/             # Entidade Tarefa
│       └── Program.cs          # Configuração da aplicação
│
└── frontend/
    └── src/
        └── app/
            ├── components/
            │   ├── task-list/  # Listagem de tarefas com filtro
            │   └── task-form/  # Formulário para criar e editar tarefas
            ├── models/         # Interface TypeScript da Tarefa
            └── services/       # TarefaService — consumo da API via HttpClient
```

---

## 👩‍💻 Autora

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

Estudante de **Análise e Desenvolvimento de Sistemas** — Faculdade Senac Recife · Previsão de formatura: 2027

<br/>

<img src="https://raw.githubusercontent.com/thaynabds/AppMedSmart/refs/heads/main/Cart%C3%A3o%20TEC%20Thayn%C3%A1%20Batista%20da%20Silva.png" width="340" alt="Cartão TEC Thayná Batista da Silva" />

</div>

---

<div align="center">
