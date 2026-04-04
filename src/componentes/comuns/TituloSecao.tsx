// Componente que estiliza títulos de seção

import React from 'react'

interface Props {
  children: React.ReactElement
}

const TituloSecao: React.FC<Props> = ({ children }) => {
  return React.cloneElement(children, {
    className: children.props.className + ' text-3xl lg:text-5xl lg:leading-tight font-bold',
  })
}

export default TituloSecao
