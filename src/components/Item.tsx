import { Todo } from "../interfaces/todo.interface"
import { useTodoStore } from "../store/todoStore"

interface Props {
  todo: Todo
}

export default function Item({ todo }: Props) {

  const { removeTodo } = useTodoStore()

  return (
    <div key={todo.id} style={{
      border: '1px solid #fff',
      borderRadius: '5px',
      marginBottom: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px',
    }}>
      <span>{todo.text}</span>
      <button
        onClick={() => removeTodo(todo)}
        style={{
          padding: '10px',
          borderRadius: '5px',
          backgroundColor: 'red',
          marginLeft: '10px',
        }}
      >Remover</button>
    </div>

  )
}
