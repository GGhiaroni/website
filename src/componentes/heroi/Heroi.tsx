// Seção Hero — apresentação principal com título, subtítulo e botões de download

import React from 'react'
import Image from 'next/image'

import BotaoAppStore from '@/componentes/botoes/BotaoAppStore'
import BotaoPlayStore from '@/componentes/botoes/BotaoPlayStore'
import { dadosHeroi } from '@/dados/heroi'

const Heroi: React.FC = () => {
  return (
    <section
      id="heroi"
      className="relative flex items-center justify-center pb-0 pt-32 md:pt-40 px-5"
    >
      {/* Fundo com grid sutil */}
      <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
        <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
      </div>

      {/* Gradiente de transição inferior */}
      <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-40 bg-gradient-to-b from-transparent via-[rgba(245,245,245,0.5)] to-[rgba(229,229,229,0.5)]" />

      <div className="text-center">
        <h1 className="text-4xl md:text-6xl md:leading-tight font-bold text-foreground max-w-lg md:max-w-2xl mx-auto">
          {dadosHeroi.titulo}
        </h1>
        <p className="mt-4 text-foreground-accent max-w-lg mx-auto">{dadosHeroi.subtitulo}</p>
        <div className="mt-6 flex flex-col sm:flex-row items-center sm:gap-4 w-fit mx-auto">
          <BotaoAppStore escuro />
          <BotaoPlayStore escuro />
        </div>
        <p className="mt-4 text-sm text-foreground-accent">{dadosHeroi.textoAuxiliar}</p>
        <Image
          src={dadosHeroi.imagemCentral}
          width={384}
          height={340}
          quality={100}
          sizes="(max-width: 768px) 100vw, 384px"
          priority={true}
          unoptimized={true}
          alt="mockup do app diaum"
          className="relative mt-12 md:mt-16 mx-auto z-10"
        />
      </div>
    </section>
  )
}

export default Heroi
