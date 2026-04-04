// Definições de tipos do projeto Diaum

export interface IItemMenu {
  texto: string
  url: string
}

export interface IFuncionalidade {
  titulo: string
  descricao: string
  icone: JSX.Element
}

export interface IBeneficio {
  titulo: string
  descricao: string
  imagemSrc: string
  itens: IItemBeneficio[]
}

export interface IItemBeneficio {
  titulo: string
  descricao: string
  icone: JSX.Element
}

export interface IPreco {
  nome: string
  preco: number | string
  periodo?: string
  funcionalidades: string[]
  destaque?: boolean
  nota?: string
}

export interface IPerguntaFrequente {
  pergunta: string
  resposta: string
}

export interface IDepoimento {
  nome: string
  cargo: string
  mensagem: string
  avatar: string
}

export interface IEstatistica {
  titulo: string
  icone: JSX.Element
  descricao: string
}

export interface IRedesSociais {
  facebook?: string
  github?: string
  instagram?: string
  linkedin?: string
  threads?: string
  twitter?: string
  youtube?: string
  x?: string
  [key: string]: string | undefined
}
