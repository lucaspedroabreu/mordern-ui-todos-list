export type ITodo = {
  id: string
  title: string
  completed: boolean
  created_at: Date
  completed_at?: Date
}

export type TodoContextType = {
  todos: ITodo[]
  addNewTodo: (todo: ITodo) => void
  updateTodo: (todoId: string) => void
  deleteTodo: (todoId: string) => void
}
