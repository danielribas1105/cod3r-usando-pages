import Pagina from '@/components/pagina'
import textos from '@/data/textos'
import { useRouter } from 'next/router'

export default function PaginaSaldacao() {
   const router = useRouter()

   return (
      <Pagina>
         <div>{textos[router.locale ?? 'pt'].saudacao}</div>
      </Pagina>
   )
}
