import { Contacts } from "./components/Contacts"
import { Header } from "./components/Header"
import { Projects } from "./components/Projects"
import { Services } from "./components/Services"
import { Tech } from "./components/Tech"
import { CaretDoubleDown } from "@phosphor-icons/react"
import CSS from "../assets/CSS.svg"
import Typescript from "../assets/typescript.svg"
import HTML from "../assets/HTML.svg"
import JavaScript from "../assets/JavaScript.svg"
import React from "../assets/React.svg"
import Node from "../assets/node.svg"

function scrollDown() {
  window.scrollBy({
    top: window.innerHeight,
    behavior: "smooth",
  })
}

export function App() {
  return (
    <div>
      <div className="lg:bg-background1 flex flex-col items-center text-center min-h-screen pt-32 bg-no-repeat bg-cover">
        <Header />
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 mt-20 text-gray500 font-asap text-base ">
          <Tech src={HTML} text={"HTML"} />
          <Tech src={CSS} text={"CSS"} />
          <Tech src={JavaScript} text={"Javascript"} />
          <Tech src={Typescript} text={"Typescript"} />
          <Tech src={React} text={"React"} />
          <Tech src={Node} text={"NodeJS"} />
        </div>
        <CaretDoubleDown
          className="mt-24 size-8 text-gray400 cursor-pointer"
          onClick={scrollDown}
        />
      </div>
      <div className="flex flex-col items-center text-center min-h-screen bg-gray200 pb-20">
        <Projects />
      </div>
      <div className="flex flex-col items-center text-center bg-gray100 h-[480px]">
        <Services />
      </div>
      <div className="lg:bg-background2 flex flex-col items-center justify-center text-center min-h-screen bg-no-repeat bg-cover">
        <Contacts />
      </div>
    </div>
  )
}
