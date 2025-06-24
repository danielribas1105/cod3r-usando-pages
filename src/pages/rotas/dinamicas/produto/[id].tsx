import Pagina from '@/components/pagina'
import { useRouter } from 'next/router'

export default function PaginaProdutoPorId() {
  const router = useRouter()

  return (
    <Pagina>
      <div>
        <p>Produto: {router.query.id}</p>
      </div>
    </Pagina>
  )
}
