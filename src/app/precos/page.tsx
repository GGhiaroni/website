// Página de preços — inspirada em Luna /pricing
// Seções: Banner de teste grátis → Planos → FAQ

import Precos from '@/componentes/precos/Precos'
import PerguntasFrequentes from '@/componentes/perguntas/PerguntasFrequentes'
import Container from '@/componentes/comuns/Container'
import { bannerTesteGratis } from '@/dados/precos'

export const metadata = {
  title: 'Precos - diaum',
  description: 'Confira os planos e precos do diaum. Teste gratis por 7 dias.',
}

export default function PaginaPrecos() {
  return (
    <div className="min-h-screen pt-32 md:pt-40">
      <Container>
        {/* Banner de teste grátis */}
        <div className="text-center mb-12">
          <div className="inline-block bg-hero-background px-6 py-3 rounded-full mb-8">
            <p className="text-foreground-accent">{bannerTesteGratis} ✌️</p>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">Precos</h1>
          <p className="text-foreground-accent text-lg max-w-xl mx-auto">
            Simples, transparente e sem surpresas.
          </p>
        </div>

        {/* Planos */}
        <Precos />

        {/* FAQ */}
        <div className="mt-20">
          <PerguntasFrequentes />
        </div>
      </Container>
    </div>
  )
}
