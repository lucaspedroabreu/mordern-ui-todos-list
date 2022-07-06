import { Trash } from "phosphor-react"
import { ITodo } from "../../@types/todo"
import { useTodoContext } from "../../contexts/todoContext"

interface TodoItemProps {
  todo: ITodo
}

export function TodoItem({ todo }: TodoItemProps) {
  const { deleteTodo, updateTodo } = useTodoContext()
  return (
    <div className="bg-base-gray-500 rounded-lg border w-full border-base-gray-400 p-4 flex justify-between items-center">
      <div className="flex justify-start gap-3 items-center">
        <input
          type="checkbox"
          name="complete"
          checked={todo.completed}
          onChange={() => updateTodo(todo.id)}
          className="rounded-full outline outline-2 outline-product-blue bg-base-gray-400 border border-product-blue checked:bg-product-purpleDark checked:outline-product-purpleDark"
        />
        <h2
          className={
            todo.completed ? "text-base-gray-300" : "text-base-gray-100"
          }
        >
          {todo.completed ? <del>{todo.title}</del> : todo.title}
        </h2>
      </div>
      <button onClick={() => deleteTodo(todo.id)}>
        <Trash />
      </button>
    </div>
  )
}
