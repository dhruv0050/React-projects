import { useState, useEffect } from 'react'
import {TodoProvider} from './contexts'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])
  const addTodo = (todo) =>{
    setTodos((prev) => [{id: Date.now(),...todo},...prev])
  }
  const updateTodo = (id,todo) =>{
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))
  }
  const deleteTodo = (id) =>{
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }
  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="todo-container">
        <div className="todo-wrapper">
          <h1>MANAGE  YOUR  TASKS</h1>
          <div className="todo-form">
            <TodoForm />
          </div>
          <div className="todo-list">
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
  
}

export default App
