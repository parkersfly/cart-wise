import { useContext, useState } from "react"
import { Modal } from "../"
import { ImageUp, Plus } from "lucide-react"
import { ModalContext } from "@/context/modal"

export function CreateNewMarketModal({ superMarketsRegistered, setSuperMarketsRegistered }: any) {
  const [newSuperMarketName, setNewSuperMarketName] = useState("")
  const [newSuperMarketAddress, setNewSuperMarketAddress] = useState("")
  const { openModal, setOpenModal } = useContext(ModalContext)

  function registerNewSuperMarket(){
    const newSuperMarket = {
      name: newSuperMarketName,
      address: newSuperMarketAddress
    }

    setSuperMarketsRegistered([...superMarketsRegistered, newSuperMarket])

    setOpenModal(!openModal)
  }

  return (
    <Modal title="Novo mercado">
        <div className="flex flex-col gap-2">
          <label htmlFor="marketName" className="text-xs text-zinc-500">Nome do mercado</label>
          <input
            id="marketName"
            className="w-full h-11 pl-5! shadow rounded-md border-zinc-200 border-solid border placeholder:text-xs placeholder:italic"
            type="text"
            onChange={(e) => setNewSuperMarketName(e.target.value)}
            placeholder="Ex: Atacadão"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="marketAddress" className="text-xs text-zinc-500">Endereço</label>
          <input
            id="marketAddress"
            className="w-full h-11 pl-5! shadow rounded-md border-zinc-200 border-solid border placeholder:text-xs placeholder:italic"
            type="text"
            onChange={(e) => setNewSuperMarketAddress(e.target.value)}
            placeholder="Ex: Atacadão"
          />
        </div>

        <div className="mt-5!">
            <label 
            htmlFor="marketPicture" 
            className="relative text-xs text-zinc-500 flex justify-center items-center w-auto h-11 pl-5! shadow rounded-md border-zinc-200 border-solid border"
            >
              <ImageUp size={16} className="absolute left-4"/>
              Adicionar uma foto
            </label>
            <input
              id="marketPicture"
              className="hidden"
              type="file"
            />
        </div>

        <button 
        type="submit"
        className="w-full relative mt-8! max-w-80 h-11 flex justify-center items-center shadow text-sm font-bold bg-amber-400 text-white rounded-lg hover:cursor-pointer"
        onClick={() => registerNewSuperMarket()}
        >
          Cadastrar
          <Plus size={16} className="absolute right-4"/>
        </button>
      </Modal>
  )
}