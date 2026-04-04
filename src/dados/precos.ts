// Dados dos planos de preços

import { IPreco } from '@/tipos'

export const planos: IPreco[] = [
  {
    nome: 'Mensal',
    preco: 14.90,
    periodo: '/mes',
    funcionalidades: [
      'Bloqueio inteligente',
      'Monitoramento de progresso',
      'Rastreamento de habitos',
      'Relatorios basicos',
      'Widgets e lembretes',
      'Notificacoes inteligentes',
    ],
  },
  {
    nome: 'Vitalicio',
    preco: 299.90,
    periodo: 'pagamento unico',
    destaque: true,
    funcionalidades: [
      'Acesso a todas as funcionalidades',
      'Todas as atualizacoes futuras',
      'Suporte prioritario',
      'Modo foco avancado',
      'Relatorios detalhados',
      'Personalizacao completa',
    ],
    nota: '*Se uma funcionalidade de importacao automatica for adicionada no futuro, membros vitalicios poderao adquiri-la separadamente.',
  },
]

// Texto do banner de teste gratuito
export const bannerTesteGratis = 'Todas as novas contas vem com 7 dias de teste gratis, sem cartao de credito'
