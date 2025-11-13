import React, { useState, useEffect } from "react";
import { DragDropContext } from "@hello-pangea/dnd";
import Column from "./components/Column";
import { getTasks, updateTask } from "./api";
import "./styles.css";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 🌓 Alternar tema
  function toggleTheme() {
    document.body.classList.toggle("dark");
  }

  // 🔄 Buscar tarefas do backend
  useEffect(() => {
    setLoading(true);
    getTasks()
      .then((data) => {
        setTimeout(() => {
          // <- apenas para visualizar o loading
          setTasks(data);
          setError(null);
          setLoading(false);
        }, 800);
      })
      .catch(() => {
        setError("Erro ao carregar tarefas.");
        setLoading(false);
      });
  }, []);

  // 🎯 Função para reordenar (drag and drop)
  const onDragEnd = async (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    const movedTask = tasks.find((t) => t.id.toString() === draggableId);
    const updatedTask = { ...movedTask, status: destination.droppableId };

    const newTasks = tasks.map((t) =>
      t.id === movedTask.id ? updatedTask : t
    );
    setTasks(newTasks);

    try {
      await updateTask(movedTask.id, updatedTask);
    } catch (err) {
      console.error("Erro ao atualizar task:", err);
    }
  };

  // 🧩 Agrupar tarefas por status
  const columns = {
    todo: tasks.filter((t) => t.status === "todo"),
    doing: tasks.filter((t) => t.status === "doing"),
    done: tasks.filter((t) => t.status === "done"),
  };

  // 🚀 Renderização
  return (
    <>
      <div className="app-container">
        <header>
          <h1>📋 Meu Quadro de Tarefas</h1>
          <button className="theme-toggle" onClick={toggleTheme}>
            Alternar tema
          </button>
        </header>

        {/* Feedback logo abaixo do header */}
        {loading && (
          <div className="feedback-inline loading-feedback">
            🔄 Carregando tarefas...
          </div>
        )}
        {error && (
          <div className="feedback-inline error-feedback">⚠️ {error}</div>
        )}

        {!loading && !error && (
          <DragDropContext onDragEnd={onDragEnd}>
            <div className="columns">
              <Column
                title="A Fazer"
                status="todo"
                tasks={columns.todo}
                setTasks={setTasks}
              />
              <Column
                title="Em Progresso"
                status="doing"
                tasks={columns.doing}
                setTasks={setTasks}
              />
              <Column
                title="Concluídas"
                status="done"
                tasks={columns.done}
                setTasks={setTasks}
              />
            </div>
          </DragDropContext>
        )}
      </div>
    </>
  );
}
