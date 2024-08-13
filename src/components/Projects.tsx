import { ProjectCard } from "./ProjectCard"

export function Projects() {
  return (
    <div>
      <h1 className="text-red text-xl font-inconsolata mt-20">Meu trabalho</h1>
      <h2 className="text-gray600 text-2xl font-bold font-asap mt-2">
        Veja os projetos em destaque
      </h2>
      <div className="mt-14 grid grid-cols-3 gap-6 w-[1040px]">
        <ProjectCard
          src="./assets/Thumbnail01.png"
          title="Trip Planner"
          description="Planejador de viagens onde é possível selecionar data e destino, além de enviar convites por e-mail e cadastrar atividades."
          link="https://github.com/mateushr23/trip-planner"
        />
        <ProjectCard
          src="./assets/Thumbnail02.png"
          title="ToDo List"
          description="Lista de afazeres, onde é possível adicionar atividades, marcá-las como concluídas ou excluí-las."
          link="https://github.com/mateushr23/todo-list"
        />

        <ProjectCard
          src="./assets/Thumbnail03.png"
          title="Expert Notes"
          description="Quadro de notas em que as notas podem ser gravadas manualmente em forma de texto ou em áudio transcrito."
          link="https://github.com/mateushr23/nlw-expert-notes"
        />
      </div>
    </div>
  )
}
