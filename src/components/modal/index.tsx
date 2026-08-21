'use client'

import { ModalContext } from "@/context/modal"
import { X } from "lucide-react"
import { useContext } from "react"
import Form from 'next/form'

interface ModalProps {
  title: string
  children: React.ReactNode
}

export function Modal({ title, children }: ModalProps) {
  const { openModal, setOpenModal } = useContext(ModalContext)

  return (
    <div className="absolute min-h-screen w-full inset-0 bg-zinc-900/80 flex items-center justify-center px-8!">
      <div className="bg-zinc-100 min-w-3xs w-full p-8! rounded-xl flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-medium text-zinc-950">{title}</h1>
          <button onClick={() => setOpenModal(!openModal)}>
            <X size={16}/>
          </button>
        </div>

        <Form action="" className="space-y-4!">
          {children}
        </Form>
      </div>
    </div>
  )
}