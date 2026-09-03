# Salvus — Desafio Fullstack

Projeto Full Stack desenvolvido como parte de um desafio técnico.

A aplicação permite o **cadastro e login de usuários**, utilizando autenticação com **JWT**, criptografia de senhas e acesso a uma área protegida.

O projeto foi desenvolvido com **React no frontend**, **Node.js e Express no backend** e **MySQL** para armazenamento dos dados.

## 🎥 Demonstração

![Demonstração do projeto](./demo.gif)

## 🚀 Tecnologias utilizadas

### Frontend

* React
* JavaScript
* Vite
* Axios
* React Router

### Backend

* Node.js
* Express
* JWT
* bcrypt
* Knex.js
* MySQL
* dotenv

## ✨ Funcionalidades

* Cadastro de usuários
* Login com e-mail e senha
* Criptografia das senhas com bcrypt
* Autenticação utilizando JWT
* Proteção de rotas
* Exibição dos dados do usuário
* Logout
* Integração entre frontend, backend e banco de dados

## 🔐 Autenticação

O sistema utiliza **JWT (JSON Web Token)** para controlar a autenticação.

Após realizar o login, o backend verifica as credenciais do usuário e gera um token. Esse token é utilizado para permitir o acesso às áreas protegidas da aplicação.

As senhas dos usuários são armazenadas de forma segura utilizando **bcrypt**, evitando que sejam salvas diretamente no banco de dados.

## 🗄️ Banco de dados

O projeto utiliza **MySQL** para armazenar os dados dos usuários.

O **Knex.js** é utilizado para trabalhar com o banco de dados e executar as migrations.

## 📂 Estrutura

```text
desafio-fullstack/
├── frontend/
└── backend/
```

O frontend é responsável pela interface e interação com o usuário, enquanto o backend disponibiliza a API e realiza a comunicação com o banco de dados.

## ⚙️ Como executar o projeto

### Backend

Entre na pasta do backend:

```bash
cd backend
```

Instale as dependências:

```bash
npm install
```

Configure o arquivo `.env` com as informações do banco de dados e a chave do JWT.

Execute as migrations:

```bash
npx knex migrate:latest
```

Inicie o servidor:

```bash
npm run dev
```

### Frontend

Em outro terminal:

```bash
cd frontend
```

Instale as dependências:

```bash
npm install
```

Execute:

```bash
npm run dev
```

Depois, acesse a aplicação pelo endereço informado pelo Vite.

## 🎯 Objetivo

O objetivo do projeto foi desenvolver uma aplicação Full Stack colocando em prática conceitos de **React, Node.js, APIs REST, autenticação, banco de dados e integração entre frontend e backend**.

## 👩‍💻 Desenvolvido por

**Raissa Marques**

Projeto desenvolvido para fins de estudo e desafio técnico.
