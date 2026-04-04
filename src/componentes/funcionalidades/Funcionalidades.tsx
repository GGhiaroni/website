// Seção de funcionalidades básicas — 3 cards (inspirado em Luna "The basics, but better")

'use client'

import { funcionalidadesBasicas } from '@/dados/funcionalidades'
import CartaoFuncionalidade from './CartaoFuncionalidade'

const Funcionalidades: React.FC = () => {
  return (
    <section id="funcionalidades" className="py-16 lg:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-5xl font-bold mb-4">O basico, so que melhor ✨</h2>
        <p className="text-foreground-accent max-w-xl mx-auto">
          Feito para voce abrir todo dia e manter o foco na sua jornada
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {funcionalidadesBasicas.map((func, index) => (
          <CartaoFuncionalidade key={func.titulo} funcionalidade={func} indice={index} />
        ))}
      </div>
    </section>
  )
}

export default Funcionalidades
