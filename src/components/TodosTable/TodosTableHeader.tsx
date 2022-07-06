interface TodosTableHeaderProps {
  todos: number
  completedTodos: number
}

export function TodosTableHeader({
  todos,
  completedTodos,
}: TodosTableHeaderProps) {
  return (
    <header className="flex flex-grow w-full justify-between items-center text-white">
      <h1 className="text-product-blue">
        Tarefas criadas{" "}
        <span className="bg-base-gray-400 py-1 px-2 rounded-full text-gray-200">
          {todos}
        </span>
      </h1>
      <h1 className="text-product-purple">
        Concluídas{" "}
        <span className="bg-base-gray-400 py-1 px-2 rounded-full text-gray-200">
          {completedTodos} de {todos}
        </span>
      </h1>
    </header>
  )
}
