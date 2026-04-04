// Seção "Sobre o Criador" — inspirada em Luna "Hi, I'm Chris"

import Image from 'next/image'
import { dadosCriador } from '@/dados/sobreCriador'

const SobreCriador: React.FC = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-5">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-shrink-0">
            <Image
              src={dadosCriador.imagemSrc}
              alt={dadosCriador.nome}
              width={120}
              height={120}
              className="rounded-full"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              {dadosCriador.saudacao} 👋
            </h2>
            <p className="text-foreground-accent text-lg leading-relaxed">
              {dadosCriador.bio}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SobreCriador
