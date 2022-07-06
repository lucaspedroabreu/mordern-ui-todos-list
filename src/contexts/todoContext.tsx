import {
  createContext,
  FC,
  ReactComponentElement,
  ReactElement,
  ReactNode,
  useContext,
  useState,
} from "react"
import { TodoContextType, ITodo } from "../@types/todo"
import { TODOS } from "../@consts/todos"

const TodoContext = createContext<TodoContextType | null>(null)

interface TodoProviderProps {
  children: ReactNode
}

const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todos, setTodos] = useState<ITodo[]>(TODOS)

  const addNewTodo = (todo: ITodo) => {
    setTodos((prevTodos) => [...prevTodos, todo])
  }

  const updateTodo = (todoId: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) =>
        prevTodo.id === todoId
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    )
  }

  const deleteTodo = (todoId: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId))
  }

  return (
    <TodoContext.Provider value={{ todos, addNewTodo, updateTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  )
}

function useTodoContext() {
  const context = useContext(TodoContext)
  if (context === null) {
    throw new Error("useTodoContext must be used within a TodoProvider")
  }
  return context
}

export { TodoProvider, useTodoContext }
