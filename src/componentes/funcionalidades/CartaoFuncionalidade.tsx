// Cartão individual de funcionalidade

'use client'

import { motion } from 'framer-motion'
import { IFuncionalidade } from '@/tipos'

interface Props {
  funcionalidade: IFuncionalidade
  indice: number
}

const CartaoFuncionalidade: React.FC<Props> = ({ funcionalidade, indice }) => {
  return (
    <motion.div
      className="cartao-funcionalidade text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: indice * 0.1 }}
    >
      <div className="flex justify-center mb-4 text-foreground">
        {funcionalidade.icone}
      </div>
      <h3 className="text-xl font-semibold mb-2">{funcionalidade.titulo}</h3>
      <p className="text-foreground-accent text-base">{funcionalidade.descricao}</p>
    </motion.div>
  )
}

export default CartaoFuncionalidade
