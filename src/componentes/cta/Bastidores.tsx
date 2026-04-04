// Seção "Bastidores" — inspirada em Luna "Behind the scenes"

import { FaYoutube, FaInstagram } from 'react-icons/fa6'
import { dadosBastidores } from '@/dados/sobreCriador'

const Bastidores: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-hero-background">
      <div className="max-w-4xl mx-auto px-5 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold mb-4">
          {dadosBastidores.titulo} 👀
        </h2>
        <p className="text-foreground-accent text-lg mb-8 max-w-xl mx-auto">
          {dadosBastidores.descricao}
        </p>
        <div className="flex items-center justify-center gap-6">
          {dadosBastidores.youtube && (
            <a
              href={dadosBastidores.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-foreground text-white px-6 py-3 rounded-full hover:bg-primary-accent transition-colors"
            >
              <FaYoutube size={20} />
              YouTube
            </a>
          )}
          {dadosBastidores.instagram && (
            <a
              href={dadosBastidores.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-foreground text-white px-6 py-3 rounded-full hover:bg-primary-accent transition-colors"
            >
              <FaInstagram size={20} />
              Instagram
            </a>
          )}
        </div>
      </div>
    </section>
  )
}

export default Bastidores
