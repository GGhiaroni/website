// Seção de depoimentos de usuários

import React from 'react'
import Image from 'next/image'
import { depoimentos } from '@/dados/depoimentos'

const Depoimentos: React.FC = () => {
  return (
    <div className="grid gap-14 max-w-lg w-full mx-auto lg:gap-8 lg:grid-cols-3 lg:max-w-full">
      {depoimentos.map((depoimento, index) => (
        <div key={index}>
          <div className="flex items-center mb-4 w-full justify-center lg:justify-start">
            <Image
              src={depoimento.avatar}
              alt={`${depoimento.nome} avatar`}
              width={50}
              height={50}
              className="rounded-full shadow-md"
            />
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-foreground">{depoimento.nome}</h3>
              <p className="text-sm text-foreground-accent">{depoimento.cargo}</p>
            </div>
          </div>
          <p className="text-foreground-accent text-center lg:text-left">
            &quot;{depoimento.mensagem}&quot;
          </p>
        </div>
      ))}
    </div>
  )
}

export default Depoimentos
