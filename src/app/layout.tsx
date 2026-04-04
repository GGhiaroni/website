// Layout raiz do site Diaum

import type { Metadata } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Source_Sans_3, Manrope } from 'next/font/google'

import Cabecalho from '@/componentes/comuns/Cabecalho'
import Rodape from '@/componentes/comuns/Rodape'
import { detalhesSite } from '@/dados/detalhesSite'

import './globals.css'

const manrope = Manrope({ subsets: ['latin'] })
const sourceSans = Source_Sans_3({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: detalhesSite.metadata.titulo,
  description: detalhesSite.metadata.descricao,
  keywords: [
    `${detalhesSite.nomeSite}`,
    'app',
    'bloqueio',
    'conteudo',
    'pornografia',
    'habitos',
    'foco',
    'controle',
    'vida',
  ],
  authors: [{ name: detalhesSite.nomeSite }],
  creator: detalhesSite.nomeSite,
  publisher: detalhesSite.nomeSite,
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/images/diaum-logo.png', type: 'image/png' },
    ],
    apple: [{ url: '/images/diaum-logo.png' }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: detalhesSite.metadata.titulo,
    description: detalhesSite.metadata.descricao,
    url: detalhesSite.urlSite,
    type: 'website',
    locale: detalhesSite.locale,
    siteName: detalhesSite.nomeSite,
    images: [
      {
        url: '/images/diaum-logo.png',
        width: 1200,
        height: 630,
        alt: `${detalhesSite.metadata.titulo}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: detalhesSite.metadata.titulo,
    description: detalhesSite.metadata.descricao,
    images: ['/images/diaum-logo.png'],
  },
  alternates: {
    canonical: detalhesSite.urlSite,
  },
}

export default function LayoutRaiz({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${manrope.className} ${sourceSans.className} antialiased`}>
        {detalhesSite.googleAnalyticsId && (
          <GoogleAnalytics gaId={detalhesSite.googleAnalyticsId} />
        )}
        <Cabecalho />
        <main>{children}</main>
        <Rodape />
      </body>
    </html>
  )
}
