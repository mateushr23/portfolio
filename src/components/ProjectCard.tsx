interface DynamicProjectCard {
  src: string
  title: string
  description: string
  link: string
}

export function ProjectCard({
  src,
  title,
  description,
  link,
}: DynamicProjectCard) {
  return (
    <a
      className="bg-gray300 p-3 rounded-xl cursor-pointer"
      href={link}
      target="_blank"
    >
      <img className="rounded-lg" src={src} />
      <h2 className="text-gray600 text-base mt-5 text-start font-asap font-bold">
        {title}
      </h2>
      <p className="text-gray500 text-sm mt-2 text-start font-maven">
        {description}
      </p>
    </a>
  )
}
