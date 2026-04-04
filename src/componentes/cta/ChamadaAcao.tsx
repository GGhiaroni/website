// Seção CTA (chamada para ação) — download do app

import { dadosChamadaAcao } from '@/dados/chamadaAcao'
import BotaoAppStore from '@/componentes/botoes/BotaoAppStore'
import BotaoPlayStore from '@/componentes/botoes/BotaoPlayStore'

const ChamadaAcao: React.FC = () => {
  return (
    <section id="cta" className="mt-10 mb-5 lg:my-20">
      <div className="relative h-full w-full z-10 mx-auto py-12 sm:py-20">
        <div className="h-full w-full">
          {/* Fundo escuro com grid */}
          <div className="rounded-3xl opacity-95 absolute inset-0 -z-10 h-full w-full bg-[#050505] bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:6rem_4rem]">
            <div className="rounded-3xl absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_600px_at_50%_500px,#1a1a1a,transparent)]" />
          </div>

          <div className="h-full flex flex-col items-center justify-center text-white text-center px-5">
            <h2 className="text-2xl sm:text-3xl md:text-5xl md:leading-tight font-semibold mb-4 max-w-2xl">
              {dadosChamadaAcao.titulo}
            </h2>
            <p className="mx-auto max-w-xl md:px-5">{dadosChamadaAcao.subtitulo}</p>
            <div className="mt-4 flex flex-col sm:flex-row items-center sm:gap-4">
              <BotaoAppStore />
              <BotaoPlayStore />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChamadaAcao
