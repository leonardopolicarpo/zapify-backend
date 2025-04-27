# zapify-backend

# Zapify | Backend

> Leia em inglês: [README.md](./README.md)

API backend para o **Zapify**, uma aplicação de chat em tempo real focada em testes, escalabilidade e boas práticas modernas de desenvolvimento.

## 📚 Índice

- [📄 Descrição](#descrição)
- [🛠 Tecnologias Utilizadas](#tecnologias-utilizadas)
- [▶️ Como Rodar o Projeto](#como-rodar-o-projeto)
- [📌 Documentação e Organização](#documentação-e-organização)
- [🧠 Autoria e Contato](#autoria-e-contato)

---

## 📄 Descrição

Este backend fornece autenticação simples com bcrypt (JWT e cookies httpOnly estão nos planos) e integração com WebSocket para envio e recebimento de mensagens em tempo real.

O objetivo inicial é construir um MVP funcional para testes de comunicação em tempo real entre usuários. Funcionalidades como notificações, "usuário digitando..." e autenticação mais segura virão nas próximas versões.

---

## 🛠 Tecnologias Utilizadas

- Node.js
- Fastify
- Drizzle
- PostgreSQL
- Zod
- Bcrypt
- TypeScript

---

## ▶️ Como Rodar o Projeto

1- Clone o repositório:

```
git clone https://github.com/leonardopolicarpo/zapify-backend
```

2- Instale as dependências:

```
npm install
```

3- Inicie o servidor:

```
npm run dev
```

## 📌 Documentação e Organização

📋 [Kanban no GitHub (Zapify Backend)](https://github.com/users/leonardopolicarpo/projects/2)

## 🧠 Autoria e Contato

Desenvolvido por [Leonardo Policarpo](https://github.com/leonardopolicarpo)
🔗 LinkedIn: [Leonardo Policarpo](https://www.linkedin.com/in/leonardodumont/)