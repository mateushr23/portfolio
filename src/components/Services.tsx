import { Devices, HardDrives, Infinity } from "@phosphor-icons/react"

export function Services() {
  return (
    <div>
      <h1 className="text-red text-xl font-inconsolata mt-20">Meus serviços</h1>
      <h2 className="text-gray600 text-2xl font-bold font-asap mt-2">
        Como posso ajudar o seu negócio
      </h2>
      <div className="grid grid-cols-3 mt-14 gap-6">
        <div className="border-gray200 border rounded-xl p-5">
          <Devices className="text-purple" size={55} />
          <h2 className="text-gray600 text-base mt-5 text-start font-asap font-bold">
            Websites e Aplicativos
          </h2>
          <p className="text-gray500 text-sm mt-2 text-start font-maven ">
            Desenvolvimento de interfaces
          </p>
        </div>
        <div className="border-gray200 border rounded-xl p-5">
          <HardDrives className="text-yellow" size={55} />
          <h2 className="text-gray600 text-base mt-5 text-start font-asap font-bold">
            API e banco de dados
          </h2>
          <p className="text-gray500 text-sm mt-2 text-start font-maven ">
            Criação de serviços do sistema
          </p>
        </div>
        <div className="border-gray200 border rounded-xl p-5">
          <Infinity className="text-green" size={55} />
          <h2 className="text-gray600 text-base mt-5 text-start font-asap font-bold">
            DevOps
          </h2>
          <p className="text-gray500 text-sm mt-2 text-start font-maven ">
            Gestão e infraestrutura da aplicação
          </p>
        </div>
      </div>
    </div>
  )
}
