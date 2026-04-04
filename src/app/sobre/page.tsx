// Página Sobre — inspirada em Luna /about
// Seções: Por que o app existe → História do criador → Bastidores

import Image from 'next/image'
import Container from '@/componentes/comuns/Container'
import Bastidores from '@/componentes/cta/Bastidores'
import { dadosCriador } from '@/dados/sobreCriador'

export const metadata = {
  title: 'Sobre - diaum',
  description: 'Conhea a historia por tras do diaum e por que esse app existe.',
}

export default function PaginaSobre() {
  return (
    <div className="min-h-screen">
      <div className="pt-32 md:pt-40">
        <Container>
          {/* Título principal */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">Por que esse app existe</h1>
          </div>

          {/* História do criador */}
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col items-center mb-10">
              <Image
                src={dadosCriador.imagemSrc}
                alt={dadosCriador.nome}
                width={120}
                height={120}
                className="rounded-full mb-6"
              />
              <h2 className="text-2xl font-bold">{dadosCriador.saudacao} 👋</h2>
            </div>

            <div className="space-y-6 text-foreground-accent text-lg leading-relaxed">
              <p>{dadosCriador.bioCompleta}</p>
              <p>{dadosCriador.motivacao}</p>
            </div>
          </div>
        </Container>
      </div>

      {/* Bastidores */}
      <div className="mt-16">
        <Bastidores />
      </div>
    </div>
  )
}
