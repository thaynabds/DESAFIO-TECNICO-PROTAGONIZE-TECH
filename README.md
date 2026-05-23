# Protagonize Tech - Gerenciador de Tarefas

Projeto desenvolvido como desafio técnico do Bootcamp Web Front (Angular + ASP.NET).

---

## Tecnologias usadas

- **Front-end:** Angular 17
- **Back-end:** ASP.NET Core 8 (C#)
- **Banco de dados:** SQL Server
- **ORM:** Entity Framework Core

---

## Como rodar o projeto

### Pré-requisitos

- .NET 8 SDK instalado
- Node.js e npm instalados
- Angular CLI: `npm install -g @angular/cli`
- SQL Server instalado e rodando

---

### Back-end (API)

1. Abra a pasta `backend/ProtagonizetechAPI`

2. Edite o arquivo `appsettings.json` e coloque sua string de conexão com o SQL Server:
```json
"DefaultConnection": "Server=SEU_SERVIDOR;Database=ProtagonizetechDB;Trusted_Connection=True;TrustServerCertificate=True;"
```

3. Rode os comandos abaixo no terminal:
```bash
dotnet restore
dotnet ef database update
dotnet run
```

A API vai rodar em `http://localhost:5000`

Você pode testar os endpoints no Swagger em `http://localhost:5000/swagger`

---

### Front-end (Angular)

1. Abra a pasta `frontend`

2. Instale as dependências:
```bash
npm install
```

3. Rode o projeto:
```bash
ng serve
```

Acesse `http://localhost:4200` no navegador.

> **Atenção:** o back-end precisa estar rodando antes de abrir o front.

---

## Endpoints da API

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | /api/tarefas | Lista todas as tarefas |
| GET | /api/tarefas?status=Pendente | Filtra por status |
| GET | /api/tarefas/{id} | Busca tarefa pelo id |
| POST | /api/tarefas | Cria uma nova tarefa |
| PUT | /api/tarefas/{id} | Edita uma tarefa |
| DELETE | /api/tarefas/{id} | Deleta uma tarefa |

---

## Funcionalidades

- Listar todas as tarefas
- Criar nova tarefa
- Editar tarefa existente
- Deletar tarefa
- Filtrar por status (Pendente / Concluída)
- Mensagens de feedback pro usuário

---

## Estrutura do projeto

```
protagonize-tech/
├── backend/
│   └── ProtagonizetechAPI/
│       ├── Controllers/    -> TarefasController
│       ├── Data/           -> AppDbContext
│       ├── DTOs/           -> TarefaDto
│       ├── Migrations/     -> migration do banco
│       ├── Models/         -> Tarefa
│       └── Program.cs
│
└── frontend/
    └── src/
        └── app/
            ├── components/
            │   ├── task-list/   -> listagem das tarefas
            │   └── task-form/   -> formulário criar/editar
            ├── models/          -> interface Tarefa
            └── services/        -> TarefaService (HttpClient)
```
--- 
</div>
---

### Thayná Batista da Silva

<a href="https://br.linkedin.com/in/thaynabds" target="_blank">
  <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
</a>
<a href="https://www.instagram.com/thaynabdstec/" target="_blank">
  <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" />
</a>
<a href="mailto:thaynabdstec@gmail.com">
  <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" />
</a>

📧 [thaynabdstec@gmail.com](mailto:thaynabdstec@gmail.com) · 📱 +55 (81) 97912-6121

<img src="https://raw.githubusercontent.com/thaynabds/AppMedSmart/refs/heads/main/Cart%C3%A3o%20TEC%20Thayn%C3%A1%20Batista%20da%20Silva.png" width="340" alt="Cartão TEC Thayná Batista da Silva" />

---
</div>
<div align="center">

**Copyright © 2026, Thayná Batista da Silva — DESAFIO TECNICO PROTAGONIZE TECH. Todos os direitos reservados.**

Feito com 💜 por **Thayná Batista da Silva** para o **Bootcamp .NET Avanade Protagonize Tech!**
**Estudante de Análise e Desenvolvimento de Sistemas na Faculdade Senac Recife 2026 · Previsão de formatura 2027**
