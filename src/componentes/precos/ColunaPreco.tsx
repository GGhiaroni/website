// Coluna individual de plano de preço

import clsx from 'clsx'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { IPreco } from '@/tipos'

interface Props {
  plano: IPreco
}

const ColunaPreco: React.FC<Props> = ({ plano }) => {
  const { nome, preco, periodo, funcionalidades, destaque, nota } = plano

  return (
    <div
      className={clsx(
        'w-full max-w-sm mx-auto bg-white rounded-xl border border-gray-200 lg:max-w-full',
        { 'shadow-lg ring-2 ring-foreground': destaque },
      )}
    >
      <div className="p-6 border-b border-gray-200 rounded-t-xl">
        <h3 className="text-2xl font-semibold mb-4">{nome}</h3>
        <p className="text-3xl md:text-5xl font-bold mb-2">
          <span className={clsx({ 'text-foreground': destaque })}>
            {typeof preco === 'number' ? `R$${preco.toFixed(2).replace('.', ',')}` : preco}
          </span>
        </p>
        {periodo && (
          <p className="text-lg text-foreground-accent mb-6">{periodo}</p>
        )}
        <button
          className={clsx('w-full py-3 px-4 rounded-full transition-colors', {
            'bg-foreground text-white hover:bg-primary-accent': destaque,
            'bg-hero-background hover:bg-gray-200 text-foreground': !destaque,
          })}
        >
          Comecar Agora
        </button>
      </div>
      <div className="p-6 mt-1">
        <p className="font-bold mb-0">FUNCIONALIDADES</p>
        <p className="text-foreground-accent mb-5">Tudo incluso no plano</p>
        <ul className="space-y-4 mb-4">
          {funcionalidades.map((func, index) => (
            <li key={index} className="flex items-center">
              <BsFillCheckCircleFill className="h-5 w-5 text-foreground mr-2 flex-shrink-0" />
              <span className="text-foreground-accent">{func}</span>
            </li>
          ))}
        </ul>
        {nota && (
          <p className="text-sm text-foreground-accent mt-4 italic">{nota}</p>
        )}
      </div>
    </div>
  )
}

export default ColunaPreco
