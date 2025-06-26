import Filme from '@/components/filme'
import Pagina from '@/components/pagina'
import filmes from '@/data/filmes'

export function getStaticProps() {
   return {
      props: {
         filme: filmes[0],
         data: new Date().toLocaleTimeString('pt-BR'),
      },
   }
}

export default function PaginaFilme(props: any) {
   return (
      <Pagina>
         <h1 className="text-4xl">Página Filme</h1>
         <h2 className="text-2xl">Hora de Geração: {props.data}</h2>
         <Filme
            id={props.filme.id}
            titulo={props.filme.Titulo}
            subtitulo={props.filme.Subtitulo}
            imagem={props.filme.Imagem}
            descricao={props.filme.Descricao}
         />
      </Pagina>
   )
}
