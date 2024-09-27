import './App.css'
import Form from './components/Form'
import Item from './components/Item'
import { useTodoStore } from './store/todoStore'

function App() {

  const { todos } = useTodoStore()

  return (
    <div>
      <h1>Tareas</h1>

      {
        todos.length > 0 && <h2>Tareas pendientes: {todos.length}</h2>
      }

      <Form />

      {todos.length === 0 && <p>No hay tareas</p>}

      {
        todos.map(todo => <Item key={todo.id} todo={todo} />)
      }
    </div>
  )
}

export default App
