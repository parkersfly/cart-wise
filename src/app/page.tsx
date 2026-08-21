'use client'

import logo from "@/../public/logo.svg"
import avatar from "@/../public/avatar.png"
import supermarket from "@/../public/supermarket.png"
import { LogOut, Plus, ShoppingBag } from "lucide-react"
import Image from "next/image"
import { CreateNewMarketModal } from "../components/modal/createNewMarketModal"
import { useContext, useState } from "react"
import { ModalContext } from "@/context/modal"

export default function Home() {
  const [superMarketsRegistered, setSuperMarketsRegistered] = useState([])
  const { openModal, setOpenModal } = useContext(ModalContext)

  return (
    <div className="flex flex-col p-10! min-h-screen relative">
      <div className="w-full h-24 rounded-lg shadow flex items-center justify-between p-4!">
        <Image
          src={logo}
          width={132}
          height={132}
          alt="logo"
        />

        <div>
          <Image
            src={avatar}
            width={48}
            height={48}
            alt=""
            className="rounded-full"
          />
        </div>

        <button className="cursor-pointer">
          <LogOut />
        </button>
      </div>

      <p className="text-center mt-6! font-semibold text-xl text-zinc-800">
        Bem-vindo(a), Letícia!
        <br /> Vamos as compras?
      </p>

      {superMarketsRegistered.length === 0 ?
        <div className="h-full flex flex-col justify-center items-center space-y-3! flex-1">
          <p className="text-lg font-medium text-zinc-400">Nenhum mercado cadastrado ainda :/</p>

          <button
            className="w-full max-w-80 h-11 relative flex justify-center items-center shadow text-sm font-bold bg-amber-400 text-white rounded-lg hover:cursor-pointer"
            onClick={() => setOpenModal(!openModal)}
          >
            Cadastrar mercado
            <Plus size={16} className="absolute right-4" />
          </button>

          {openModal && <CreateNewMarketModal setSuperMarketsRegistered={setSuperMarketsRegistered} superMarketsRegistered={superMarketsRegistered} />}
        </div>
        :
        <div className="mt-8! flex flex-col justify-center items-center">
          <p className="text-lg font-medium mb-10!">Para onde vamos hoje?</p>

          {
            superMarketsRegistered.map((superMarket) => (
              <div className="max-w-80 shadow-xl rounded-lg">
                <Image src={supermarket} width={320} height={140} alt="" className="rounded-ss-lg rounded-se-lg object-cover"/>

                <div className="flex flex-col gap-6 p-6!">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-zinc-800">{superMarket.name}</span>
                    <ShoppingBag size={20}/>
                  </div>

                  <div className="flex justify-between">
                    <button className="w-fit bg-amber-400 text-sm text-white px-4! py-2! rounded-full shadow">
                    Últimas compras
                  </button>

                  <button className="w-fit bg-amber-400 text-sm text-white px-4! py-2! rounded-full shadow">
                    Ir as compras
                  </button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      }
    </div>
  )
}