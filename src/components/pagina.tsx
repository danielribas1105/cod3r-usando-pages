import React from 'react'
import Menu from './menu'

interface PaginaProps {
   children?: any
}

export default function Pagina(props: PaginaProps) {
   return (
      <div className="flex flex-col min-h-screen text-5xl bg-gradient-to-r from-zinc-800 to-black">
         <nav className="bg-black border border-zinc-900 p-3">
            <Menu />
         </nav>
         <main className="flex flex-col flex-1 justify-center items-center">
            {props.children}
         </main>
      </div>
   )
}
