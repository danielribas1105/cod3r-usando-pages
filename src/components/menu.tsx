import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Menu() {
   const router = useRouter()

   function renderizarItem(url: string, texto: string, locale: string) {
      const ativo = router.asPath === url

      return (
         <li
            className={`${
               ativo ? 'bg-purple-800' : 'bg-purple-500'
            } px-3 py-2 rounded-lg text-lg`}
         >
            <Link href={url} locale={locale}>
               {texto}
            </Link>
         </li>
      )
   }
   return (
      <ul className="flex flex-wrap gap-3 justify-center">
         {renderizarItem('/rotas/basicas', 'Rota Básica', 'pt')}
         {renderizarItem('/rotas/basicas/aninhada', 'Rota Aninhada', 'pt')}
         {renderizarItem('/rotas/dinamicas/produto/3', 'Produto #3', 'pt')}
         {renderizarItem('/rotas/dinamicas/2025/06/25/agenda', 'Agenda', 'pt')}
         {renderizarItem(
            '/rotas/dinamicas/curso/react/123',
            'Curso React',
            'pt',
         )}
         {renderizarItem(
            '/rotas/dinamicas/consulta/html/css/ts',
            'Consultas',
            'pt',
         )}
         {renderizarItem('/rotas/i18n/saudacao', 'Saudação PT', 'pt')}
         {renderizarItem('/rotas/i18n/saudacao', 'Saudação EN', 'en')}
         {renderizarItem('/render/ssg/simples', 'SSG Simples', 'pt')}
         {renderizarItem('/render/ssg/filme', 'SSG Filme', 'pt')}
         {renderizarItem('/render/ssg/personagem', 'Personagem', 'pt')}
         {renderizarItem('/render/ssg/produtos', 'Produtos SSG', 'pt')}
         {renderizarItem('/render/isr', 'Produtos ISR', 'pt')}
         {renderizarItem('/render/ssr', 'Produtos SSR', 'pt')}
         {renderizarItem('/render/ssg/id', 'Catálogo', 'pt')}
      </ul>
   )
}
