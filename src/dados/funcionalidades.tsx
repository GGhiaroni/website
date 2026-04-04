// Dados das funcionalidades do app Diaum
// Seção 1: Funcionalidades básicas (3 cards - inspirado em Luna "The basics, but better")
// Seção 2: Funcionalidades avançadas (6 items em grid - inspirado em Luna "Simple, but powerful")

import { FiShield, FiEye, FiBell, FiLock, FiTarget, FiBarChart2, FiZap, FiSettings, FiActivity } from 'react-icons/fi'
import { IFuncionalidade } from '@/tipos'

// Funcionalidades básicas — exibidas como 3 cards na home
export const funcionalidadesBasicas: IFuncionalidade[] = [
  {
    titulo: 'Bloqueio Inteligente',
    descricao: 'Tecnologia avancada que bloqueia conteudo inadequado automaticamente, sem complicacoes.',
    icone: <FiShield size={32} />,
  },
  {
    titulo: 'Monitoramento',
    descricao: 'Acompanhe seu progresso diario e veja sua evolucao ao longo do tempo.',
    icone: <FiEye size={32} />,
  },
  {
    titulo: 'Lembretes',
    descricao: 'Receba notificacoes motivacionais para manter o foco nos seus objetivos.',
    icone: <FiBell size={32} />,
  },
]

// Funcionalidades avançadas — exibidas em grid 2x3 ou 3x2
export const funcionalidadesAvancadas: IFuncionalidade[] = [
  {
    titulo: 'Bloqueio Total',
    descricao: 'Bloqueie sites, apps e conteudos especificos com controle granular.',
    icone: <FiLock size={28} />,
  },
  {
    titulo: 'Rastreamento de Habitos',
    descricao: 'Crie e acompanhe novos habitos saudaveis no seu dia a dia.',
    icone: <FiTarget size={28} />,
  },
  {
    titulo: 'Relatorios',
    descricao: 'Visualize estatisticas detalhadas sobre seu progresso e padroes de uso.',
    icone: <FiBarChart2 size={28} />,
  },
  {
    titulo: 'Modo Foco',
    descricao: 'Ative o modo foco para eliminar distrações nos momentos importantes.',
    icone: <FiZap size={28} />,
  },
  {
    titulo: 'Notificacoes Inteligentes',
    descricao: 'Alertas personalizados baseados nos seus padroes de comportamento.',
    icone: <FiActivity size={28} />,
  },
  {
    titulo: 'Personalizacao',
    descricao: 'Ajuste cada funcionalidade ao seu nivel de necessidade e conforto.',
    icone: <FiSettings size={28} />,
  },
]
