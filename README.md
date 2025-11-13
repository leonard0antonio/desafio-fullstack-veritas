#!/bin/bash

# 🧭 Kanban Tasks – React + Go
# Script de setup e informações do projeto

# ------------------------------------------------------------
# 🚀 Funcionalidades
# ------------------------------------------------------------
# As funcionalidades estão implícitas no código:
# - Adicionar, editar e excluir tarefas
# - Drag & Drop entre colunas
# - Tema claro/escuro
# - Persistência em tasks.json
# - Feedbacks visuais
# - Scroll suave
# - Backend em Go

# ------------------------------------------------------------
# ⚙️ Como Executar
# ------------------------------------------------------------

# Backend (Go)
cd backend
go run .

# Frontend (React + Vite)
cd frontend
npm install
npm start

# ------------------------------------------------------------
# 📡 API Endpoints
# ------------------------------------------------------------
# GET    /tasks       -> Retorna todas as tarefas
# POST   /tasks       -> Adiciona uma nova tarefa
# PUT    /tasks/:id   -> Atualiza uma tarefa existente
# DELETE /tasks/:id   -> Remove uma tarefa

# ------------------------------------------------------------
# 🧹 Limpar Dados
# ------------------------------------------------------------
# Pare o backend: CTRL + C
rm ../backend/tasks.json
go run .
# O contador de IDs será resetado automaticamente

# ------------------------------------------------------------
# 📦 Tecnologias Utilizadas
# ------------------------------------------------------------
# Frontend: React + Vite
# Backend: Go (Golang)
# Estilo: CSS puro (modo claro/escuro)

# ------------------------------------------------------------
# 👨‍💻 Autor
# ------------------------------------------------------------
# Desenvolvido com 💙 por Leonardo
