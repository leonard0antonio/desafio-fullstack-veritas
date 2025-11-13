# 🧭 Kanban Tasks – React + Go
# Um quadro de tarefas moderno e leve, com drag-and-drop, modo escuro e persistência em JSON via backend em Go.

# ------------------------------------------------------------
# 🚀 Funcionalidades
# ------------------------------------------------------------
echo "✅ Adicionar, editar e excluir tarefas"
echo "🔄 Arrastar e soltar (Drag & Drop) entre colunas"
echo "🌙 Tema claro/escuro com alternância em tempo real"
echo "💾 Persistência local (tasks.json)"
echo "⚡ Feedbacks visuais de loading e erro"
echo "🧭 Scroll suave dentro das colunas"
echo "🧱 Backend simples e rápido em Go"

# ------------------------------------------------------------
# ⚙️ Como Executar
# ------------------------------------------------------------

# Backend (Go)
echo "🔧 Iniciando Backend"
cd backend
go run .

# Frontend (React + Vite)
echo "💻 Iniciando Frontend"
cd ../frontend
npm install
npm start

echo "Acesse o app em: http://localhost:5173"

# ------------------------------------------------------------
# 📡 API Endpoints
# ------------------------------------------------------------
echo "GET    /tasks       -> Retorna todas as tarefas"
echo "POST   /tasks       -> Adiciona uma nova tarefa"
echo "PUT    /tasks/:id   -> Atualiza uma tarefa existente"
echo "DELETE /tasks/:id   -> Remove uma tarefa"

# ------------------------------------------------------------
# 🧹 Limpar Dados
# ------------------------------------------------------------
echo "Se quiser reiniciar as tarefas:"
echo "# Pare o backend: CTRL + C"
echo "# Apague o arquivo de dados"
rm ../backend/tasks.json
echo "# Reinicie o servidor"
go run ../backend/main.go
echo "✨ O contador de IDs será resetado automaticamente."

# ------------------------------------------------------------
# 📦 Tecnologias Utilizadas
# ------------------------------------------------------------
echo "Frontend: React + Vite"
echo "Backend: Go (Golang)"
echo "Estilo: CSS puro (modo claro/escuro)"

# ------------------------------------------------------------
# 👨‍💻 Autor
# ------------------------------------------------------------
echo "Desenvolvido com 💙 por Leonardo"
