// src/components/Column.jsx
import React, { useState } from "react";
import TaskCard from "./TaskCard";
import {Droppable } from "@hello-pangea/dnd";
import { addTask } from "../api";

export default function Column({ title, status, tasks, setTasks }) {
  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newTask = { title: newTitle, description: newDesc, status };

    const saved = await addTask(newTask);
    setTasks((prev) => [...prev, saved]);

    setNewTitle("");
    setNewDesc("");
  };

  return (
    <div className="column">
      <h2>{title}</h2>

      <form onSubmit={handleAdd}>
        <input
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Título da tarefa"
        />
        <textarea
          value={newDesc}
          onChange={(e) => setNewDesc(e.target.value)}
          placeholder="Descrição"
        />
        <button type="submit">➕ Adicionar</button>
      </form>

      <Droppable droppableId={status}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{
              flex: 1,
              minHeight: "60vh",
              transition: "background 0.2s",
              background: snapshot.isDraggingOver
                ? "#dbeafe"
                : "transparent",
            }}
          >
            {tasks.map((task, index) => (
              <TaskCard
                key={task.id}
                task={task}
                index={index}
                setTasks={setTasks}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
