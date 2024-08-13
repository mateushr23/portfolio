interface DynamicTechs {
  src: string
  text: string
}

export function Tech({ src, text }: DynamicTechs) {
  return (
    <div className="flex items-center gap-2  px-4 py-2 rounded-full back bg-gray300">
      <img src={src} />
      <p>{text}</p>
    </div>
  )
}
