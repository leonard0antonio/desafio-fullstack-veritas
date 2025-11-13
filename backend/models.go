package main

import (
	"encoding/json"
	"fmt"
	"os"
	"sync"
)

// Modelo de Tarefa e funções de manipulação

type Task struct {
	ID          int    `json:"id"`
	Title       string `json:"title"`
	Description string `json:"description"`
	Status      string `json:"status"`
}

var (
	tasks      []Task
	tasksMutex sync.Mutex
	lastTaskID int
	dataFile   = "tasks.json"
)

func LoadTasks() {
	file, err := os.ReadFile(dataFile)
	if err != nil {
		fmt.Println("Nenhum arquivo existente, iniciando lista vazia.")
		tasks = []Task{}
		lastTaskID = 0
		return
	}

	if len(file) == 0 {
		fmt.Println("Arquivo vazio, resetando lista.")
		tasks = []Task{}
		lastTaskID = 0
		return
	}

	err = json.Unmarshal(file, &tasks)
	if err != nil {
		fmt.Println("Erro ao carregar JSON:", err)
		tasks = []Task{}
		lastTaskID = 0
		return
	}

	lastTaskID = 0
	for _, t := range tasks {
		if t.ID > lastTaskID {
			lastTaskID = t.ID
		}
	}

	fmt.Printf("Carregadas %d tarefas.\n", len(tasks))
}

func SaveTasks() {
	data, err := json.MarshalIndent(tasks, "", "  ")
	if err != nil {
		fmt.Println("Erro ao salvar JSON:", err)
		return
	}

	err = os.WriteFile(dataFile, data, 0644)
	if err != nil {
		fmt.Println("Erro ao gravar arquivo:", err)
	}
}

func AddTask(t Task) Task {
	tasksMutex.Lock()
	defer tasksMutex.Unlock()

	lastTaskID++
	t.ID = lastTaskID
	tasks = append(tasks, t)
	SaveTasks()
	return t
}

func UpdateTask(id int, updated Task) (Task, bool) {
	tasksMutex.Lock()
	defer tasksMutex.Unlock()

	for i, t := range tasks {
		if t.ID == id {
			updated.ID = id
			tasks[i] = updated
			SaveTasks()
			return updated, true
		}
	}
	return Task{}, false
}

func DeleteTask(id int) bool {
	tasksMutex.Lock()
	defer tasksMutex.Unlock()

	for i, t := range tasks {
		if t.ID == id {
			tasks = append(tasks[:i], tasks[i+1:]...)
			SaveTasks()
			return true
		}
	}
	return false
}

func GetTasks() []Task {
	tasksMutex.Lock()
	defer tasksMutex.Unlock()
	return tasks
}
