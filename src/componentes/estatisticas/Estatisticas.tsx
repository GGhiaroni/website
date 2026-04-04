// Seção de estatísticas de impacto

import { estatisticas } from '@/dados/estatisticas'

const Estatisticas: React.FC = () => {
  return (
    <section id="estatisticas" className="py-10 lg:py-20">
      <div className="grid sm:grid-cols-3 gap-8">
        {estatisticas.map(stat => (
          <div key={stat.titulo} className="text-center sm:text-left max-w-md sm:max-w-full mx-auto">
            <h3 className="mb-5 flex items-center gap-2 text-3xl font-semibold justify-center sm:justify-start">
              {stat.icone}
              {stat.titulo}
            </h3>
            <p className="text-foreground-accent">{stat.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Estatisticas
