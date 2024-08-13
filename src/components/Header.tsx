export function Header() {
  return (
    <div className="flex flex-col items-center">
      <img
        className="size-36 rounded-full mb-14 border-4 border-red custom-border "
        src="https://github.com/mateushr23.png"
        alt=""
      />
      <div className="lg:w-[680px]">
        <h2 className="text-xl text-gray500 font-inconsolata mb-2">
          Hello World! Meu nome é{" "}
          <span className="text-red">Mateus Ribeiro</span> e sou
        </h2>
        <h1 className="text-6xl text-gray600 font-bold font-asap mb-5">
          Desenvolvedor Fullstack
        </h1>
        <p className="text-sm text-gray400 font-maven mx-4">
          Transformo necessidades em aplicações reais, envolventes e funcionais.
          Desenvolvo sistemas através da minha paixão pela tecnologia,
          contribuindo com soluções inovadoras e eficazes para desafios
          complexos.
        </p>
      </div>
    </div>
  )
}
