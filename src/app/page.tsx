// Página inicial — estrutura inspirada no Luna Budgeting
// Seç��es: Hero → Funcionalidades Básicas → Funcionalidades Avançadas → Sobre o Criador → Bastidores → CTA

import Container from '@/componentes/comuns/Container'
import ChamadaAcao from '@/componentes/cta/ChamadaAcao'
import Funcionalidades from '@/componentes/funcionalidades/Funcionalidades'
import Heroi from '@/componentes/heroi/Heroi'

const PaginaInicial: React.FC = () => {
  return (
    <>
      <Heroi />
      <Container className="hidden">
        <Funcionalidades />
      </Container>
      {/* <FuncionalidadesAvancadas  />
      <Bastidores /> */}
      <Container className="hidden">
        <ChamadaAcao />
      </Container>
    </>
  )
}

export default PaginaInicial
