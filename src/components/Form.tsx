import { useState } from "react"
import { useTodoStore } from "../store/todoStore"

export default function Form() {
  const { addTodo } = useTodoStore()
  const [text, setText] = useState('')

  const handleSubmit = (e: any) => {
    e.preventDefault()
    addTodo({
      id: Date.now(),
      text,
    })
    setText('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        style={
          {
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            marginRight: '10px',
            width: '300px',
            marginBottom: '20px',
          }
        }
        type="text"
        value={text}
        name="text"
        onChange={e => setText(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  )
}
