// Componente do rodapé com links, contato e redes sociais

import Link from 'next/link'
import Script from 'next/script'
import React from 'react'
import Image from 'next/image'
import { FaEnvelope } from 'react-icons/fa'

import { detalhesSite } from '@/dados/detalhesSite'
import { dadosRodape } from '@/dados/rodape'
import { obterIconePlataforma } from '@/utilidades'

// Tipos para dados estruturados (JSON-LD)
type PontoContatoLD = {
  '@type': 'ContactPoint'
  email?: string
  telephone?: string
  contactType: 'customer support' | string
}

type OrganizacaoLD = {
  '@context': 'https://schema.org'
  '@type': 'Organization'
  name: string
  url: string
  logo?: string
  sameAs?: string[]
  contactPoint?: PontoContatoLD[]
}

// Constrói os dados estruturados da organização para SEO
function construirJsonLdOrganizacao(): string {
  const mesmasContas = Object.values(dadosRodape.redesSociais ?? {}).filter(
    (v): v is string => Boolean(v),
  )

  const pontosContato: PontoContatoLD[] = []

  if (dadosRodape.email) {
    pontosContato.push({
      '@type': 'ContactPoint',
      email: dadosRodape.email,
      contactType: 'customer support',
    })
  }

  if (dadosRodape.telefone) {
    pontosContato.push({
      '@type': 'ContactPoint',
      telephone: dadosRodape.telefone,
      contactType: 'customer support',
    })
  }

  const org: OrganizacaoLD = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: detalhesSite.nomeSite,
    url: detalhesSite.urlSite,
    logo: detalhesSite.logoSite,
    sameAs: mesmasContas.length ? mesmasContas : undefined,
    contactPoint: pontosContato.length ? pontosContato : undefined,
  }

  return JSON.stringify(org)
}

const Rodape: React.FC = () => {
  return (
    <footer className="bg-[var(--footer-background)] text-[var(--footer-text)]">
      <div
        className="h-[2px] w-full opacity-70"
        style={{ backgroundImage: 'var(--footer-divider)' }}
        aria-hidden="true"
      />

      <Script id="org-schema" type="application/ld+json">
        {construirJsonLdOrganizacao()}
      </Script>

      <div className="py-10 max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Coluna 1: Logo e descrição */}
        <div>
          <Link
            href="/"
            className="flex items-center gap-2"
            aria-label={`${detalhesSite.nomeSite} home`}
          >
            <Image
              width={40}
              height={40}
              src="/images/diaum-logo.png"
              alt={detalhesSite.nomeSite}
              className="h-8 w-auto"
              priority
            />
            <h3 className="manrope text-xl font-semibold cursor-pointer hover:text-[var(--footer-link)] transition-colors">
              {detalhesSite.nomeSite}
            </h3>
          </Link>
          <p className="mt-3.5 text-[var(--footer-muted)]">{dadosRodape.subtitulo}</p>
        </div>

        {/* Coluna 2: Links rápidos */}
        <nav aria-label="Links rapidos">
          <h4 className="text-lg font-semibold mb-4 text-[var(--footer-link)]">Links Rapidos</h4>
          <ul className="text-[var(--footer-text)]" role="list">
            {dadosRodape.linksRapidos.map(link => (
              <li key={link.texto} className="mb-2">
                <Link
                  href={link.url}
                  className="hover:text-[var(--footer-link)] transition-colors"
                >
                  {link.texto}
                </Link>
              </li>
            ))}
            <li className="mb-2">
              <Link
                href="/termos-de-servico"
                className="hover:text-[var(--footer-link)] transition-colors"
              >
                Termos de Servico
              </Link>
            </li>
          </ul>
        </nav>

        {/* Coluna 3: Contato e redes sociais */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[var(--footer-link)]">Contato</h4>

          {dadosRodape.email && (
            <a
              href={`mailto:${dadosRodape.email}`}
              className="flex items-center gap-2 text-[var(--footer-text)] hover:text-[var(--footer-link)] transition-colors"
              aria-label={`Enviar e-mail para ${dadosRodape.email}`}
            >
              <FaEnvelope className="w-5 h-5" aria-hidden="true" />
              <span>{dadosRodape.email}</span>
            </a>
          )}

          {dadosRodape.telefone && (
            <a
              href={`tel:${dadosRodape.telefone}`}
              className="block mt-2 text-[var(--footer-text)] hover:text-[var(--footer-link)] transition-colors"
              aria-label={`Ligar para ${dadosRodape.telefone}`}
            >
              Telefone: {dadosRodape.telefone}
            </a>
          )}

          {dadosRodape.redesSociais && (
            <nav aria-label="Redes sociais" className="mt-5">
              <ul className="flex items-center gap-5 flex-wrap" role="list">
                {Object.entries(dadosRodape.redesSociais).map(
                  ([nomePlataforma, url]) =>
                    url && (
                      <li key={nomePlataforma}>
                        <a
                          href={url}
                          target="_blank"
                          rel="me noopener noreferrer"
                          aria-label={nomePlataforma}
                          className="text-2xl text-[var(--footer-text)] hover:text-[var(--footer-link)] transition-colors"
                          title={nomePlataforma}
                        >
                          {obterIconePlataforma(nomePlataforma)}
                        </a>
                      </li>
                    ),
                )}
              </ul>
            </nav>
          )}
        </div>
      </div>

      <div className="md:text-center text-[var(--footer-muted)] px-6 pb-8">
        <p>
          Copyright &copy; {new Date().getFullYear()} {detalhesSite.nomeSite}. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  )
}

export default Rodape
