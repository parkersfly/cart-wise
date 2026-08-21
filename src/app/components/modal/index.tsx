interface ModalProps {
  title: string
  children: React.ReactNode
}

export function Modal({ title, children }: ModalProps) {
  return (
    <div className="absolute min-h-screen w-full inset-0 bg-zinc-900/80 flex items-center justify-center px-8!">
      <div className="bg-zinc-100 min-w-3xs w-full p-8! rounded-xl flex flex-col gap-4">
        <h1 className="text-xl font-medium text-zinc-950">{title}</h1>

        <form className="space-y-4!">
          {children}
        </form>
      </div>
    </div>
  )
}