// Página inicial — estrutura inspirada no Luna Budgeting
// Seç��es: Hero → Funcionalidades Básicas → Funcionalidades Avançadas → Sobre o Criador → Bastidores → CTA

import Heroi from '@/componentes/heroi/Heroi'
import Funcionalidades from '@/componentes/funcionalidades/Funcionalidades'
import FuncionalidadesAvancadas from '@/componentes/funcionalidades/FuncionalidadesAvancadas'
import SobreCriador from '@/componentes/cta/SobreCriador'
import Bastidores from '@/componentes/cta/Bastidores'
import ChamadaAcao from '@/componentes/cta/ChamadaAcao'
import Container from '@/componentes/comuns/Container'

const PaginaInicial: React.FC = () => {
  return (
    <>
      <Heroi />
      <Container>
        <Funcionalidades />
      </Container>
      <FuncionalidadesAvancadas />
      <SobreCriador />
      <Bastidores />
      <Container>
        <ChamadaAcao />
      </Container>
    </>
  )
}

export default PaginaInicial
