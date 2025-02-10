interface DynamicTechs {
  src: string
  text: string
}

export function Tech({ src, text }: DynamicTechs) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray300">
      <img className="w-8" src={src} />
      <p>{text}</p>
    </div>
  )
}
