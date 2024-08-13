interface DynamicProjectCard {
  src: string
  title: string
  description: string
}

export function ProjectCard({ src, title, description }: DynamicProjectCard) {
  return (
    <div className="bg-gray300 p-3 rounded-xl">
      <img className="rounded-lg" src={src} />
      <h2 className="text-gray600 text-base mt-5 text-start font-asap font-bold">
        {title}
      </h2>
      <p className="text-gray500 text-sm mt-2 text-start font-maven">
        {description}
      </p>
    </div>
  )
}
