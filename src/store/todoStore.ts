import { create } from "zustand";
import { Todo } from "../interfaces/todo.interface";

interface TodoStore {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  removeTodo: (todo: Todo) => void;
}

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  removeTodo: (todo) => set((state) => ({ todos: state.todos.filter(t => t.id !== todo.id) })),
}))
