import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
   res.status(200).json([
      { id: 1, nome: 'Caneta', preco: 9.99 },
      { id: 2, nome: 'Caderno', preco: 19.99 },
      { id: 3, nome: 'Borracha', preco: 5.99 },
      { id: 4, nome: 'Lápis', preco: 1.99 },
      { id: 5, nome: 'Tesoura', preco: 4.99 },
      { id: 6, nome: 'Cola', preco: 2.99 },
      { id: 7, nome: 'Apontador', preco: 3.99 },
      { id: 8, nome: 'Mochila', preco: 59.99 },
      { id: 9, nome: 'Estojo', preco: 9.99 },
      { id: 10, nome: 'Lapiseira', preco: 7.99 },
   ])
}
