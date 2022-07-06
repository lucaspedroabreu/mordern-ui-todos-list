import { ReactNode } from "react"

interface TodosListProps {
  children: ReactNode
  title: string
}

export function TodosList({ children, title }: TodosListProps) {
  return (
    <div className="flex flex-col mt-6 gap-3 w-full">
      <h2 className="text-center text-base-gray-300">{title}</h2>
      {children}
    </div>
  )
}
