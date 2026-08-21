import { Modal } from "../"
import { Plus } from "lucide-react"

export function CreateNewMarketModal() {
  return (
    <Modal title="Novo mercado">
        <div className="flex flex-col gap-2">
          <label htmlFor="marketName" className="text-xs text-zinc-500">Nome do mercado</label>
          <input
            id="marketName"
            className="w-full h-11 pl-5! shadow rounded-md border-zinc-200 border-solid border placeholder:text-xs placeholder:italic"
            type="text"
            placeholder="Ex: Atacadão"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="marketAddress" className="text-xs text-zinc-500">Endereço</label>
          <input
            id="marketAddress"
            className="w-full h-11 pl-5! shadow rounded-md border-zinc-200 border-solid border placeholder:text-xs placeholder:italic"
            type="text"
            placeholder="Ex: Atacadão"
          />
        </div>

        <button className="w-full relative mt-8! max-w-80 h-11 flex justify-center items-center shadow text-sm font-bold bg-amber-400 text-white rounded-lg hover:cursor-pointer"
          >
            Cadastrar
            <Plus size={16} className="absolute right-4"/>
        </button>
      </Modal>
  )
}