import { Todo } from "../interfaces/todo.interface"
import { useTodoStore } from "../store/todoStore"

interface Props {
  todo: Todo
}

export default function Item({ todo }: Props) {

  const { removeTodo } = useTodoStore()

  return (
    <div key={todo.id} className="item">
      <span>{todo.text}</span>
      <button onClick={() => removeTodo(todo)} className="cleaner">Remover</button>
    </div>

  )
}
