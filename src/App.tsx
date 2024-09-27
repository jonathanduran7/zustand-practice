import './App.css'
import Form from './components/Form'
import { useTodoStore } from './store/todoStore'

function App() {

  const { todos, addTodo } = useTodoStore()

  return (
    <div>
      <h1>Tareas</h1>

      {
        todos.length > 0 && <h2>Tareas pendientes: {todos.length}</h2>
      }

      <Form />

      {todos.length === 0 && <p>No hay tareas</p>}

      {
        todos.map(todo => (
          <div key={todo.id} style={{
            border: '1px solid #fff',
            borderRadius: '5px',
            marginBottom: '20px',
          }}>
            <span>{todo.text}</span>
          </div>
        ))
      }
    </div>
  )
}

export default App
