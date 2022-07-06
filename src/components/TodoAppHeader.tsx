import { RocketLogo } from "../assets/RocketLogo"

export function TodoAppHeader() {
  return (
    <header className="flex flex-grow h-[200px] w-full bg-base-gray-700 items-center justify-center gap-3">
      <RocketLogo />
      <h1>
        <span className="text-product-blue text-4xl font-bold">to</span>
        <span className="text-product-purpleDark text-4xl font-bold">do</span>
      </h1>
    </header>
  )
}
