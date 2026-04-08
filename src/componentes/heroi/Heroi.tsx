'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import { dadosHeroi } from '@/dados/heroi'

const Heroi: React.FC = () => {
  const [enviado, setEnviado] = useState(false)
  const [emailJaCadastrado, setEmailJaCadastrado] = useState(false)

  useEffect(() => {
    const statusCadastro = localStorage.getItem('waitlist_status')
    if (statusCadastro === 'sucesso') {
      setEnviado(true)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const emailDigitado = formData.get('email') as string

    const emailSalvo = localStorage.getItem('waitlist_email')
    if (emailSalvo === emailDigitado) {
      setEmailJaCadastrado(true)
      return
    }

    formData.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_KEY as string)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setEnviado(true)
        setEmailJaCadastrado(false)
        localStorage.setItem('waitlist_status', 'sucesso')
        localStorage.setItem('waitlist_email', emailDigitado)
      } else {
        alert('Ops! Tivemos um problema interno. Tente novamente mais tarde.')
      }
    } catch (error) {
      alert(`${error} Erro de conexão. Verifique sua internet e tente novamente.`)
    }
  }

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
        {/* SÊNIOR: Reduzi o gap de 'lg:gap-20' para 'lg:gap-16' para aproximar os blocos */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
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

            <h1 className="text-4xl md:text-5xl lg:text-6xl lg:leading-tight font-bold text-foreground max-w-lg md:max-w-xl mx-auto lg:mx-0">
              {dadosHeroi.titulo}
            </h1>
            <p className="mt-4 text-foreground-accent max-w-lg text-lg mx-auto lg:mx-0">
              Inscreva-se na nossa lista de espera e seja um dos primeiros a transformar seus
              hábitos. Vagas limitadas para o acesso antecipado.
            </p>

            {/* Nova Seção: Formulário de Waitlist */}
            <div className="mt-8 w-full max-w-md mx-auto lg:mx-0">
              {enviado ? (
                <div className="p-4 rounded-2xl bg-green-50 border border-green-200 text-green-800 text-center lg:text-left animate-in fade-in zoom-in duration-300">
                  <p className="font-semibold text-lg">🎉 Você está na lista!</p>
                  <p className="text-sm mt-1">
                    Fique de olho no seu e-mail, em breve entraremos em contato.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Seu melhor e-mail"
                    required
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all placeholder:text-gray-400 text-foreground shadow-sm"
                  />

                  {emailJaCadastrado && (
                    <p className="text-sm text-amber-600 font-medium text-center lg:text-left">
                      Este e-mail já foi adicionado à lista de espera!
                    </p>
                  )}

                  <button
                    type="submit"
                    className="w-full px-6 py-3.5 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 focus:ring-4 focus:ring-gray-200 transition-all active:scale-[0.98] flex justify-center items-center gap-2 shadow-lg"
                  >
                    Garantir meu lugar na fila
                  </button>
                  <p className="text-xs text-gray-500 text-center lg:text-left mt-1">
                    Não enviamos spam. Cancele quando quiser.
                  </p>
                </form>
              )}
            </div>
          </div>
          <div className="flex-1 flex justify-center">
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
