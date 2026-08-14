import logo from "@/../public/logo.svg"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Register(){
  return (
    <div className={`flex min-h-screen bg-[url('/bg-pattern.png')]`}>
      <div className="mx-auto! w-full max-w-80 text-center flex flex-col py-3!">
        <div className="flex flex-col justify-center my-auto!">
            <Image 
          src={logo}
          width={200}
          height={200}
          alt="logo"
          className="mx-auto!"
          />

        <form className="mt-9! mb-3!">
          <div className="flex flex-col gap-3 mb-6!">
            <input 
              className="w-full h-11 pl-5! text-sm shadow rounded-md border-gray-200 border-solid border placeholder:text-xs"
              type="text" 
              placeholder="Nome" 
            />

            <input 
              className="w-full h-11 pl-5! text-sm shadow rounded-md border-gray-200 border-solid border placeholder:text-xs"
              type="text" 
              placeholder="E-mail" 
            />

            <input 
              className="w-full h-11 pl-5! shadow rounded-md border-gray-200 border-solid border placeholder:text-xs" 
              type="password" 
              placeholder="Senha" 
            />
          </div>

          <button 
          className="w-full h-11 relative flex justify-center items-center shadow text-sm font-bold bg-amber-400 text-white rounded-lg hover:cursor-pointer"
          >
            Criar conta
            <ArrowRight size={16} className="absolute right-4" />
          </button>
        </form>

        <Link href="/login" className="text-sm font-medium text-gray-400">Voltar para o início</Link>
        </div>

          <p className="text-xs text-gray-400">
          <Link href="#">Termos de serviço</Link> | Todos os direitos reservados @2026
          </p>
      </div>
    </div>
  )
}