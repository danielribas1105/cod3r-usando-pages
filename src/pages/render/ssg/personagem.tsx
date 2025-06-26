import Pagina from '@/components/pagina'

export async function getStaticProps() {
   const resposta = await fetch('https://swapi.dev/api/people/1')
   const personagem = await resposta.json()

   return {
      props: { personagem },
   }
}

export default function PaginaPersonagem(props: any) {
   return (
      <Pagina>
         <div>{props.personagem.name}</div>
         <div>{props.personagem.birth_year}</div>
      </Pagina>
   )
}
