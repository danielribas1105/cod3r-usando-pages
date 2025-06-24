import React from 'react'

interface PaginaProps {
  children?: any
}

export default function Pagina(props: PaginaProps) {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-5xl bg-gradient-to-r from-zinc-800 to-black">
      {props.children}
    </div>
  )
}
