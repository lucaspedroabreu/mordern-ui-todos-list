import { PlusCircle } from "phosphor-react"
import { useRef } from "react"
import { useTodoContext } from "../contexts/todoContext"

export function CreateTodoForm() {
  const todos = useTodoContext()
  const inputRef = useRef<HTMLInputElement>(null)

  function handleSubmitNewTodo(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (inputRef.current?.value) {
      const todo = {
        id: crypto.randomUUID(),
        title: inputRef.current.value,
        completed: false,
        created_at: new Date(),
      }
      todos.addNewTodo(todo)
      inputRef.current.value = ""
    }
  }

  return (
    <div className="absolute -top-7 w-full">
      <form className="flex gap-4 h-14" onSubmit={handleSubmitNewTodo}>
        <input
          type="text"
          name="title"
          ref={inputRef}
          placeholder="Adicione uma nova tarefa"
          className="flex-grow bg-base-gray-500 text-base-gray-200 placeholder-base-gray-300 border border-base-gray-700 rounded-lg p-4"
        />
        <button
          type="submit"
          className="flex justify-center items-center rounded-lg gap-2 bg-product-blueDark text-base-gray-100 p-4"
        >
          Criar <PlusCircle size={20} />
        </button>
      </form>
    </div>
  )
}
