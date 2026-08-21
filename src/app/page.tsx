'use client'

import logo from "@/../public/logo.svg"
import avatar from "@/../public/avatar.png"
import { LogOut, Plus } from "lucide-react"
import Image from "next/image"
import { Modal } from "./components/modal"

export default function Home() {
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

      <div className="h-full flex flex-col justify-center items-center space-y-3! flex-1">
        <p className="text-lg font-medium text-zinc-400">Nenhum mercado cadastrado ainda :/</p>

        <button className="w-full max-w-80 h-11 relative flex justify-center items-center shadow text-sm font-bold bg-amber-400 text-white rounded-lg hover:cursor-pointer"
        >
          Cadastrar mercado
          <Plus size={16} className="absolute right-4" />
        </button>
      </div>

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
            Criar
            <Plus size={16} className="absolute right-4"/>
        </button>
      </Modal>
    </div>
  )
}