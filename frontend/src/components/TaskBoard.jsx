// src/components/TaskCard.jsx
import React from "react";
import { deleteTask, updateTask } from "../api";
import { Draggable } from "@hello-pangea/dnd";

function TaskCard({ task, index, setTasks }) {
  const handleDelete = async () => {
    await deleteTask(task.id);
    setTasks((prev) => prev.filter((t) => t.id !== task.id));
  };

  const handleEdit = async () => {
    const newTitle = prompt("Novo título:", task.title);
    if (!newTitle) return;

    const updated = { ...task, title: newTitle };
    await updateTask(task.id, updated);
    setTasks((prev) => prev.map((t) => (t.id === task.id ? updated : t)));
  };

  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided) => (
        <div
          className="task-card"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <h4>{task.title}</h4>
          {task.description && <p>{task.description}</p>}
          <div className="buttons">
            <button onClick={handleEdit}>Editar</button>
            <button onClick={handleDelete}>Excluir</button>
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default TaskCard;
