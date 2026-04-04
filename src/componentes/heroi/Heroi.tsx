// Seção Hero — badges, título e subtítulo à esquerda, mockup iPhone à direita

import React from 'react'
import Image from 'next/image'

import BotaoAppStore from '@/componentes/botoes/BotaoAppStore'
import BotaoPlayStore from '@/componentes/botoes/BotaoPlayStore'
import { dadosHeroi } from '@/dados/heroi'

const Heroi: React.FC = () => {
  return (
    <section
      id="heroi"
      className="relative min-h-screen flex items-center pb-0 pt-20 md:pt-24 px-5"
    >
      {/* Fundo com grid sutil */}
      <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
        <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
      </div>

      {/* Gradiente de transição inferior */}
      <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-40 bg-gradient-to-b from-transparent via-[rgba(245,245,245,0.5)] to-[rgba(229,229,229,0.5)]" />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          {/* Lado esquerdo — conteúdo */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badges — acima do título */}
            <div className="mb-5 flex flex-row items-center justify-center lg:justify-start gap-10">
              <Image
                src="/images/app-of-the-day.avif"
                alt="App of the Day"
                width={240}
                height={60}
                className="h-[60px] w-auto"
              />
              <Image
                src="/images/reviews-badge.svg"
                alt="Nota na App Store"
                width={146}
                height={34}
                className="h-[34px] w-auto"
              />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl lg:leading-tight font-bold text-foreground max-w-lg md:max-w-xl">
              {dadosHeroi.titulo}
            </h1>
            <p className="mt-4 text-foreground-accent max-w-lg text-lg">
              {dadosHeroi.subtitulo}
            </p>

            {/* Botões de download */}
            <div className="mt-6 flex flex-col sm:flex-row items-center lg:items-start sm:gap-4 w-fit mx-auto lg:mx-0">
              <BotaoAppStore escuro />
              <BotaoPlayStore escuro />
            </div>
          </div>

          {/* Lado direito — mockup iPhone */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <Image
              src={dadosHeroi.imagemCentral}
              width={320}
              height={640}
              quality={100}
              sizes="(max-width: 768px) 260px, 320px"
              priority={true}
              unoptimized={true}
              alt="mockup do app diaum"
              className="w-72 lg:w-80 drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Heroi
