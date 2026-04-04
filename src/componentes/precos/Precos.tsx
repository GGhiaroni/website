// Componente de grid de preços

import ColunaPreco from './ColunaPreco'
import { planos } from '@/dados/precos'

const Precos: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-3xl mx-auto">
      {planos.map(plano => (
        <ColunaPreco key={plano.nome} plano={plano} />
      ))}
    </div>
  )
}

export default Precos
