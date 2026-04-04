// Seção de download — botões Apple e Google Play em destaque

import BotaoAppStore from '@/componentes/botoes/BotaoAppStore'
import BotaoPlayStore from '@/componentes/botoes/BotaoPlayStore'
import { dadosHeroi } from '@/dados/heroi'

const SecaoDownload: React.FC = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-5 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold mb-4">Baixe agora</h2>
        <p className="text-foreground-accent text-lg mb-8 max-w-xl mx-auto">
          {dadosHeroi.textoAuxiliar}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center sm:gap-4">
          <BotaoAppStore escuro />
          <BotaoPlayStore escuro />
        </div>
      </div>
    </section>
  )
}

export default SecaoDownload
