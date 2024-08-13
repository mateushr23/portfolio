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
          title="Travelgram"
          description="Rede social onde as pessoas mostram os registros de suas viagens
            pelo mundo"
        />
        <ProjectCard
          src="./assets/Thumbnail02.png"
          title="Tech News"
          description="Homepage de um portal de notícias sobre a área de tecnologia"
        />
        <ProjectCard
          src="./assets/Thumbnail03.png"
          title="Página de receita"
          description="Página com o passo a passo de uma receita para cupcakes"
        />
        <ProjectCard
          src="./assets/Thumbnail04.png"
          title="Zingen"
          description="Landing Page completa e responsiva de um aplicativo de Karaokê"
        />
        <ProjectCard
          src="./assets/Thumbnail05.png"
          title="Refund"
          description="Um sistema para pedido e acompanhamento de reembolso "
        />
        <ProjectCard
          src="./assets/Thumbnail06.png"
          title="Página de turismo"
          description="Página com as principais informações para quem quer viajar para Busan"
        />
      </div>
    </div>
  )
}
