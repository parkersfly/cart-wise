'use client'

import { createContext, useState } from "react";

// interface ModalValueProps {
//   openModal: boolean
//   setOpenModal: () => {}
// }

export const ModalContext = createContext<any>({})

export function ModalProvider({children}: {children: React.ReactNode}){
  const [openModal, setOpenModal] = useState(false)

  return (
    <ModalContext.Provider value={{openModal, setOpenModal}}>
      {children}
    </ModalContext.Provider>
  )
}