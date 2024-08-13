import { Header } from "./components/Header"
import { Tech } from "./components/Tech"

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
      </div>
    </div>
  )
}
