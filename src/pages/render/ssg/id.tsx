import BtnLink from '@/components/btnLink'
import Filme from '@/components/filme'
import Pagina from '@/components/pagina'
import filmes from '@/data/filmes'

export function getStaticProps() {
   const i = 1
   return {
      props: {
         filme: filmes[i],
         numero: i + 1,
         total: filmes.length,
         idAnterior: filmes[i - 1]?.id ?? null,
         proximoId: filmes[i + 1]?.id ?? null,
      },
   }
}

export default function PaginaCatalogo(props: any) {
   const { filme, numero, total, idAnterior, proximoId } = props
   return (
      <Pagina>
         <Filme
            id={filme.id}
            titulo={filme.titulo}
            subtitulo={filme.subtitulo}
            imagem={filme.imagem}
            descricao={filme.descricao}
         />
         <div className="flex gap-3 mt-4">
            {idAnterior && (
               <BtnLink href={`/render/ssg/catalogo/${idAnterior}`}>
                  Anterior
               </BtnLink>
            )}
            <div className="flex gap-2 text-lg items-center">
               <span>{numero}</span>
               <span className="text-base text-zinc-500">de</span>
               <span>{total}</span>
            </div>
            {proximoId && (
               <BtnLink href={`/render/ssg/catalogo/${proximoId}`}>
                  Próximo
               </BtnLink>
            )}
         </div>
      </Pagina>
   )
}
