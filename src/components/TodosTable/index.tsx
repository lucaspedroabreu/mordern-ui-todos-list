import { TodosTableHeader } from "./TodosTableHeader"
import { TodosList } from "./TodosList"
import { useTodoContext } from "../../contexts/todoContext"
import { TodoItem } from "./TodosItem"

import clipboard from "../../assets/Clipboard.png"

export function TodosTable() {
  const todos = useTodoContext().todos
  const unfinishedTodos = todos.filter((todo) => !todo.completed)
  const completedTodos = todos.filter((todo) => todo.completed)
  return (
    <div className="flex flex-grow flex-col w-full justify-center items-start text-white mt-24">
      <TodosTableHeader
        todos={todos.length}
        completedTodos={todos.filter((todo) => todo.completed).length}
      />
      {completedTodos.length === 0 && unfinishedTodos.length === 0 ? (
        <div className="w-full flex flex-col items-center justify-center py-16 border-t border-t-base-gray-400 mt-4 rounded-lg">
          <img src={clipboard} alt="" className="m-4" />
          <h3 className="text-base-gray-300 font-bold">
            Você ainda não tem tarefas cadastradas
          </h3>
          <p className="text-base-gray-300">
            Crie tarefas e organize seus itens a fazer
          </p>
        </div>
      ) : todos.length > 0 && unfinishedTodos.length === 0 ? (
        ""
      ) : (
        <TodosList title="Tarefas a serem concluídas">
          {todos
            .filter((todo) => !todo.completed)
            .map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
        </TodosList>
      )}
      {completedTodos.length > 0 && (
        <TodosList title="Tarefas Concluídas">
          {completedTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </TodosList>
      )}
    </div>
  )
}
