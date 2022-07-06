import { CreateTodoForm } from "./CreateTodoForm"
import { TodoAppHeader } from "./TodoAppHeader"
import { TodosTable } from "./TodosTable"

export function TodoApp() {
  return (
    <div className="flex flex-grow flex-col justify-center items-center">
      <TodoAppHeader />
      <div className="w-[736px] relative">
        <CreateTodoForm />
        <TodosTable />
      </div>
    </div>
  )
}
