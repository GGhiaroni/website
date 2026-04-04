// Componente de seção com título e descrição

import TituloSecao from './TituloSecao'

interface Props {
  id: string
  titulo: string
  descricao: string
}

const Secao: React.FC<React.PropsWithChildren<Props>> = ({ id, titulo, descricao, children }) => {
  return (
    <section id={id} className="py-10 lg:py-20">
      <TituloSecao>
        <h2 className="text-center mb-4">{titulo}</h2>
      </TituloSecao>
      <p className="mb-12 text-center">{descricao}</p>
      {children}
    </section>
  )
}

export default Secao
