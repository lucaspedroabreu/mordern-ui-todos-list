import { TodoApp } from "./components/TodoAppComponent"
import { TodoProvider } from "./contexts/todoContext"

function App() {
  return (
    <div className="w-full h-[100vh] bg-base-gray-600">
      <TodoProvider>
        <TodoApp />
      </TodoProvider>
    </div>
  )
}

export default App
