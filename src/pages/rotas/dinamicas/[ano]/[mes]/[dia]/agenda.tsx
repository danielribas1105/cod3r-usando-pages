import Pagina from '@/components/pagina'
import { useRouter } from 'next/router'

export default function Agenda() {
  const router = useRouter()
  const { dia, mes, ano } = router.query
  return (
    <Pagina>
      <div>
        {dia}/{mes}/{ano}
      </div>
    </Pagina>
  )
}
