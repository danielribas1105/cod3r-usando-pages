import Image from 'next/image'

interface FilmeProps {
   id: string
   titulo: string
   subtitulo: string
   imagem: string
   descricao: string
}

export default function Filme(props: FilmeProps) {
   return (
      <div className="flex gap-5 w-3/5 p-5 bg-black border border-zinc-500 rounded-lg">
         <Image
            src={props.imagem}
            alt="Imagem do filme"
            width={150}
            height={150}
            className="self-start rounded-full"
         />
         <div className="flex flex-col">
            <div className="text-2xl">{props.titulo}</div>
            <div className="text-lg text-zinc-500">{props.subtitulo}</div>
            <div className="text-sm text-justify font-light text-zinc-300">
               {props.descricao}
            </div>
         </div>
      </div>
   )
}
