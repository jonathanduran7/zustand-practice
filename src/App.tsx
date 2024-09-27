import './App.css'
import { create, useStore } from 'zustand';

const useCountStore = create((set) => ({
  count: 2,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}))

function App() {

  const { count, increment, decrement } = useStore(useCountStore)

  return (
    <div>
      <h1>Hola {count}</h1>

      <button onClick={increment}>Increment</button>

      <button onClick={decrement}>Decrement </button>
    </div>
  )
}

export default App
