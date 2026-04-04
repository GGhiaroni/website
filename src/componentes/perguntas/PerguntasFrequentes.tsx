// Seção de perguntas frequentes com accordion

'use client'

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { BiMinus, BiPlus } from 'react-icons/bi'

import TituloSecao from '@/componentes/comuns/TituloSecao'
import { perguntasFrequentes } from '@/dados/perguntasFrequentes'

const PerguntasFrequentes: React.FC = () => {
  return (
    <section id="faq" className="py-10 lg:py-20">
      <div className="flex flex-col lg:flex-row gap-10">
        <div>
          <p className="hidden lg:block text-foreground-accent">FAQ&apos;S</p>
          <TituloSecao>
            <h2 className="my-3 !leading-snug lg:max-w-sm text-center lg:text-left">
              Perguntas Frequentes
            </h2>
          </TituloSecao>
          <p className="lg:mt-10 text-foreground-accent text-center lg:text-left">
            Entre em contato conosco:
          </p>
          <a
            href="mailto:contato@diaum.app"
            className="mt-3 block text-xl lg:text-4xl text-foreground font-semibold hover:underline text-center lg:text-left"
          >
            contato@diaum.app
          </a>
        </div>

        <div className="w-full lg:max-w-2xl mx-auto border-b">
          {perguntasFrequentes.map((faq, index) => (
            <div key={index} className="mb-7">
              <Disclosure>
                {({ open }) => (
                  <>
                    <DisclosureButton className="flex items-center justify-between w-full px-4 pt-7 text-lg text-left border-t">
                      <span className="text-2xl font-semibold">{faq.pergunta}</span>
                      {open ? (
                        <BiMinus className="w-5 h-5 text-foreground" />
                      ) : (
                        <BiPlus className="w-5 h-5 text-foreground" />
                      )}
                    </DisclosureButton>
                    <DisclosurePanel className="px-4 pt-4 pb-2 text-foreground-accent">
                      {faq.resposta}
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PerguntasFrequentes
