// src/api.js
const API_URL = "http://localhost:8080/tasks";

// ✅ Busca todas as tarefas
export async function getTasks() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Erro ao buscar tarefas");
  return await res.json();
}

// ✅ Adiciona nova tarefa
export async function addTask(task) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  if (!res.ok) throw new Error("Erro ao adicionar tarefa");
  return await res.json();
}

// ✅ Atualiza tarefa (edição ou mudança de status)
export async function updateTask(id, task) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  if (!res.ok) throw new Error("Erro ao atualizar tarefa");
  return await res.json();
}

// ✅ Exclui tarefa
export async function deleteTask(id) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Erro ao excluir tarefa");
}
