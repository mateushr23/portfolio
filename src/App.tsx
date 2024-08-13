import { Header } from "./components/Header"
import { Projects } from "./components/Projects"
import { Tech } from "./components/Tech"
import { CaretDoubleDown } from "@phosphor-icons/react"

export function App() {
  return (
    <div>
      <div className="bg-[url('./assets/background1.png')] flex flex-col items-center text-center min-h-screen pt-32 bg-no-repeat bg-cover">
        <Header />
        <div className="flex gap-4 mt-20 text-gray500 font-asap text-base">
          <Tech src={"./assets/GitHub.svg"} text={"Github"} />
          <Tech src={"./assets/HTML.svg"} text={"HTML"} />
          <Tech src={"./assets/CSS.svg"} text={"CSS"} />
          <Tech src={"./assets/JavaScript.svg"} text={"Javascript"} />
          <Tech src={"./assets/React.svg"} text={"React"} />
          <Tech src={"./assets/Node.js.svg"} text={"Node.js"} />
        </div>
        <CaretDoubleDown className="mt-24 size-8 text-gray400" />
      </div>
      <div className="flex flex-col items-center text-center min-h-screen bg-gray200">
        <Projects />
      </div>
    </div>
  )
}
