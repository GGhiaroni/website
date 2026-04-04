// Dados da seção de estatísticas

import { BsBarChartFill, BsFillStarFill } from 'react-icons/bs'
import { PiGlobeFill } from 'react-icons/pi'

import { IEstatistica } from '@/tipos'

export const estatisticas: IEstatistica[] = [
  {
    titulo: '10K+',
    icone: <BsBarChartFill size={34} className="text-gray-700" />,
    descricao: 'Usuarios ativos transformando seus habitos diariamente.',
  },
  {
    titulo: '5.0',
    icone: <BsFillStarFill size={34} className="text-gray-700" />,
    descricao: 'Avaliacao mantida consistentemente nas lojas de apps.',
  },
  {
    titulo: '50+',
    icone: <PiGlobeFill size={34} className="text-gray-700" />,
    descricao: 'Paises com usuarios ativos, ajudando pessoas ao redor do mundo.',
  },
]
