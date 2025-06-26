import Pagina from '@/components/pagina'

export async function getStaticProps() {
   const resposta = await fetch('http://localhost:3000/api/produtos')
   const produtos = await resposta.json()
   return {
      props: { produtos },
   }
}

export default function PaginaProdutos(props: any) {
   const { produtos } = props
   function renderizarProduto(produto: any) {
      return (
         <div className="flex gap-2" key={produto.id}>
            <div>{produto.id}</div>
            <div>{produto.nome}</div>
            <div>{produto.preco}</div>
         </div>
      )
   }

   return (
      <Pagina>
         <div className="flex flex-col text-xl">
            {produtos.map(renderizarProduto)}
         </div>
      </Pagina>
   )
}
