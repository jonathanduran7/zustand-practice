import { create } from "zustand";
import { Todo } from "../interfaces/todo.interface";

interface TodoStore {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
}

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [{ id: 1, text: 'Buy milk' }],
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
}))
