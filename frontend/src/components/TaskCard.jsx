// src/components/TaskCard.jsx
import React, { useState } from "react";
import { Draggable } from "@hello-pangea/dnd";
import { updateTask, deleteTask } from "../api";

export default function TaskCard({ task, index, setTasks }) {
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);
  const [newDesc, setNewDesc] = useState(task.description);

  const handleSave = async () => {
    const updated = { ...task, title: newTitle, description: newDesc };
    await updateTask(task.id, updated);
    setTasks((prev) => prev.map((t) => (t.id === task.id ? updated : t)));
    setEditing(false);
  };

  const handleDelete = async () => {
    await deleteTask(task.id);
    setTasks((prev) => prev.filter((t) => t.id !== task.id));
  };

  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided, snapshot) => (
        <div
          className={`task-card ${snapshot.isDragging ? "dragging" : ""}`}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {editing ? (
            <>
              <input
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
              <textarea
                value={newDesc}
                onChange={(e) => setNewDesc(e.target.value)}
              />
              <button onClick={handleSave}>💾 Salvar</button>
            </>
          ) : (
            <>
              <h4>{task.title}</h4>
              <p>{task.description}</p>
              <div className="actions">
                <button onClick={() => setEditing(true)}>✏️</button>
                <button onClick={handleDelete}>🗑️</button>
              </div>
            </>
          )}
        </div>
      )}
    </Draggable>
  );
}
