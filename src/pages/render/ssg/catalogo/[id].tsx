import BtnLink from '@/components/btnLink'
import Filme from '@/components/filme'
import Pagina from '@/components/pagina'
import filmes from '@/data/filmes'

export function getStaticPaths() {
   const paths = filmes.slice(0, 5).map((filme) => {
      return { params: { id: filme.id } }
   })
   return { paths, fallback: true } //com fallback true gera o conteúdo sobre demanda
}

export function getStaticProps({ params }: any) {
   const i = filmes.findIndex((filme) => filme.id === params.id)

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

   if (!filme) return null

   return (
      <Pagina>
         <Filme
            id={filme.id}
            titulo={filme.Titulo}
            subtitulo={filme.Subtitulo}
            imagem={filme.Imagem}
            descricao={filme.Descricao}
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
