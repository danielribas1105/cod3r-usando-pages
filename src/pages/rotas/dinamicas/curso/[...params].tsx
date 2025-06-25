import Pagina from '@/components/pagina'
import { useRouter } from 'next/router'

export default function PaginaCurso() {
  const router = useRouter()
  const [curso, aula] = (router.query.params ?? []) as string[]
  return (
    <Pagina>
      <div className="flex flex-col gap-2">
        <p>Curso: {curso}</p>
        <p>Aula: {aula}</p>
      </div>
    </Pagina>
  )
}
