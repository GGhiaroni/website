// Seção de funcionalidades avançadas — grid 2x3 (inspirado em Luna "Simple, but powerful")

'use client'

import { motion } from 'framer-motion'
import { funcionalidadesAvancadas } from '@/dados/funcionalidades'

const FuncionalidadesAvancadas: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-hero-background">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">Simples, mas poderoso 😤</h2>
          <p className="text-foreground-accent max-w-2xl mx-auto">
            Quase todas as funcionalidades podem ser ligadas ou desligadas, para voce
            deixar o app tao simples (ou poderoso) quanto precisar
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {funcionalidadesAvancadas.map((func, index) => (
            <motion.div
              key={func.titulo}
              className="flex flex-col items-center text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div className="mb-4 text-foreground">{func.icone}</div>
              <h3 className="text-lg font-semibold mb-2">{func.titulo}</h3>
              <p className="text-foreground-accent text-base">{func.descricao}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FuncionalidadesAvancadas
