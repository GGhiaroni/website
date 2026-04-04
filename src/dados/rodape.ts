// Dados do rodapé

import { IItemMenu, IRedesSociais } from '@/tipos'

export const dadosRodape: {
  subtitulo: string
  linksRapidos: IItemMenu[]
  email: string
  telefone: string
  redesSociais: IRedesSociais
} = {
  subtitulo: 'Um app para bloqueio de conteudo adulto e criacao de novos habitos.',
  linksRapidos: [
    {
      texto: 'Funcionalidades',
      url: '#funcionalidades',
    },
    {
      texto: 'Precos',
      url: '/precos',
    },
    {
      texto: 'Blog',
      url: '/blog',
    },
    {
      texto: 'Sobre',
      url: '/sobre',
    },
  ],
  email: 'contato@diaum.app',
  telefone: '',
  redesSociais: {
    github: 'https://github.com/Diaum',
    linkedin: 'https://www.linkedin.com',
    instagram: 'https://www.instagram.com/diaum.app',
  },
}
