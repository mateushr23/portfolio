import {
  LinkedinLogo,
  ArrowUpRight,
  GithubLogo,
  EnvelopeSimple,
} from "@phosphor-icons/react"

export function Contacts() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-purple text-xl font-inconsolata ">Contato</h1>
      <h2 className="text-gray600 text-2xl font-bold font-asap mt-2">
        Gostou do meu trabalho?
      </h2>
      <p className="text-base font-maven text-gray500 mt-2">
        Entre em contato ou acompanhe as minhas redes sociais!
      </p>
      <div className="grid grid-cols-1 gap-4 mt-12">
        <a
          className="bg-gray300 p-5 rounded-lg w-[400px] flex justify-between items-center"
          href="https://www.linkedin.com/in/mateushr23/"
          target="_blank"
        >
          <div className="flex items-center gap-3">
            <LinkedinLogo className="text-gray400" size={28} />
            <p className="text-gray500 font-maven text-base font-medium">
              Linkedin
            </p>
          </div>
          <ArrowUpRight className="text-blue" size={20} />
        </a>
        <a
          className="bg-gray300 p-5 rounded-lg w-[400px] flex justify-between items-center"
          href="https://github.com/mateushr23"
          target="_blank"
        >
          <div className="flex items-center gap-3">
            <GithubLogo className="text-gray400" size={28} />
            <p className="text-gray500 font-maven text-base font-medium">
              GitHub
            </p>
          </div>
          <ArrowUpRight className="text-blue" size={20} />
        </a>
        <a
          className="bg-gray300 p-5 rounded-lg w-[400px] flex justify-between items-center"
          href="mailto:mateushr23@gmail.com?subject=Pedido%20de%20Informações&body=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20serviços."
          target="_blank"
        >
          <div className="flex items-center gap-3">
            <EnvelopeSimple className="text-gray400" size={28} />
            <p className="text-gray500 font-maven text-base font-medium">
              E-mail
            </p>
          </div>
          <ArrowUpRight className="text-blue" size={20} />
        </a>
      </div>
    </div>
  )
}
