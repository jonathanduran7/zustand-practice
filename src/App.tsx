import './App.css'
import { useTodoStore } from './store/todoStore'

function App() {

  const { todos, addTodo } = useTodoStore()

  return (
    <div>
      <h1>Tareas</h1>

      {todos.length === 0 && <p>No hay tareas</p>}

      {
        todos.map(todo => (
          <div key={todo.id}>
            <span>{todo.text}</span>
          </div>
        ))
      }
    </div>
  )
}

export default App
