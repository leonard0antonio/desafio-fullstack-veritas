# 🧭 Kanban Tasks – React + Go

Um quadro de tarefas moderno e leve, com drag-and-drop, modo escuro e persistência em arquivo JSON via backend em Go.

---

## 🚀 Funcionalidades

- ✅ **Adicionar, editar e excluir tarefas**
- 🔄 **Arrastar e soltar (Drag & Drop)** entre colunas
- 🌙 **Tema claro/escuro** com alternância em tempo real
- 💾 **Persistência local** (armazenamento em `tasks.json`)
- ⚡ **Feedbacks visuais** de *loading* e *erro*
- 🧭 **Scroll suave** dentro das colunas
- 🧱 **Backend simples e rápido em Go**

---

## ⚙️ Como Executar

### 🔧 Backend (Go)

cd backend, 
go run main.go

### 💻 Frontend (React + Vite)

cd frontend, 
npm install, 
npm run dev

Acesse o app em:  
👉 http://localhost:5173

---

## 📡 API Endpoints

Método | Endpoint | Descrição
:----- | :-------- | :---------
GET | /tasks | Retorna todas as tarefas
POST | /tasks | Adiciona uma nova tarefa
PUT | /tasks/:id | Atualiza uma tarefa existente
DELETE | /tasks/:id | Remove uma tarefa

---

## 🧹 Limpar Dados

Se quiser reiniciar as tarefas:

# Pare o backend
CTRL + C

# Apague o arquivo de dados
rm backend/tasks.json

# Reinicie o servidor
go run backend/main.go

✨ O contador de IDs será resetado automaticamente.

---

## 📦 Tecnologias Utilizadas

Frontend: React + Vite  
Backend: Go (Golang)  
Estilo: CSS puro (modo claro/escuro)

---

## 👨‍💻 Autor

Desenvolvido com 💙 por Leonardo  

---

