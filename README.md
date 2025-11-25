# 🧭 Kanban Tasks – React + Go

Aplicação **Full Stack** de gerenciamento de tarefas no estilo **Kanban**, com frontend em **React (Vite)** e backend em **Go (Golang)**.

Permite criar, editar, mover e excluir tarefas entre colunas, com **persistência local** em arquivo JSON e **interface moderna** com suporte a **tema claro e escuro**.

-----

## 🚀 Funcionalidades

  - ✅ Adicionar, editar e excluir tarefas
  - 🔄 Arrastar e soltar (Drag & Drop) entre colunas
  - 🌓 Alternar entre tema claro e escuro
  - 💾 Persistência em `tasks.json`
  - 🎨 Feedbacks visuais e scroll suave
  - ⚙️ Backend em Go para gerenciamento das tarefas

-----

## 📷 Demonstração


![Demo da aplicação](demo01.gif)

-----
## 🧰 Tecnologias Utilizadas

  - **Frontend:** React + Vite
  - **Backend:** Go (Golang)
  - **Estilização:** CSS puro (modo claro/escuro)

-----

## ⚙️ Como Executar

> ⚠️ **Atenção:**
> Se você baixou o projeto como `.zip`, ele pode ter sido extraído com uma pasta dentro da outra.
> Nesse caso, o caminho será:
> `desafio-fullstack-veritas-main/desafio-fullstack-veritas-main/`

1.  **Abra o terminal e entre na pasta do projeto:**

    ```bash
    cd "C:\Users\leonardo\Downloads\desafio-fullstack-veritas-main\desafio-fullstack-veritas-main"
    ```

2.  **Inicie o backend (Go):**

    ```bash
    cd backend
    go run .
    ```

3.  **Volte um nível e inicie o frontend (React + Vite):**

    ```bash
    cd ..
    cd frontend
    npm install
    npm start
    ```

4.  **Acesse no navegador:**

    ```bash
    http://localhost:5173
    ```

-----

## 📡 API Endpoints

| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| `GET` | `/tasks` | Retorna todas as tarefas |
| `POST` | `/tasks` | Adiciona uma nova tarefa |
| `PUT` | `/tasks/:id` | Atualiza uma tarefa existente |
| `DELETE` | `/tasks/:id` | Remove uma tarefa |

-----

## 🧹 Limpar Dados

Para reiniciar o arquivo de tarefas e zerar o contador de IDs:

```bash
# Pare o backend (CTRL + C)
cd ../backend
rm tasks.json
go run main.go
```

-----

## 📝 Observações

  - O projeto utiliza persistência local via `tasks.json`, sem banco de dados externo.
  - O contador de IDs é automaticamente resetado ao apagar o arquivo.
  - O frontend se comunica com o backend por requisições HTTP REST.

-----

## 👨‍💻 Autor

Desenvolvido com 💙 por Leonardo Antonio
