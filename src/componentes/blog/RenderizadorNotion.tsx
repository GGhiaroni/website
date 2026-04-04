// Renderizador de blocos do Notion para o blog

import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import Image from 'next/image'

interface Props {
  blocos: BlockObjectResponse[]
}

export function RenderizadorNotion({ blocos }: Props) {
  return (
    <div className="space-y-6">
      {blocos.map(bloco => (
        <BlocoNotion key={bloco.id} bloco={bloco} />
      ))}
    </div>
  )
}

function BlocoNotion({ bloco }: { bloco: BlockObjectResponse }) {
  switch (bloco.type) {
    case 'paragraph':
      return (
        <p className="text-gray-700 leading-relaxed">
          {bloco.paragraph.rich_text.map((texto, index) => (
            <span key={index} className={obterEstilosTexto(texto.annotations)}>
              {texto.plain_text}
            </span>
          ))}
        </p>
      )

    case 'heading_1':
      return (
        <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
          {bloco.heading_1.rich_text.map((texto, index) => (
            <span key={index} className={obterEstilosTexto(texto.annotations)}>
              {texto.plain_text}
            </span>
          ))}
        </h1>
      )

    case 'heading_2':
      return (
        <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-3">
          {bloco.heading_2.rich_text.map((texto, index) => (
            <span key={index} className={obterEstilosTexto(texto.annotations)}>
              {texto.plain_text}
            </span>
          ))}
        </h2>
      )

    case 'heading_3':
      return (
        <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">
          {bloco.heading_3.rich_text.map((texto, index) => (
            <span key={index} className={obterEstilosTexto(texto.annotations)}>
              {texto.plain_text}
            </span>
          ))}
        </h3>
      )

    case 'bulleted_list_item':
      return (
        <li className="text-gray-700 ml-4">
          {bloco.bulleted_list_item.rich_text.map((texto, index) => (
            <span key={index} className={obterEstilosTexto(texto.annotations)}>
              {texto.plain_text}
            </span>
          ))}
        </li>
      )

    case 'numbered_list_item':
      return (
        <li className="text-gray-700 ml-4">
          {bloco.numbered_list_item.rich_text.map((texto, index) => (
            <span key={index} className={obterEstilosTexto(texto.annotations)}>
              {texto.plain_text}
            </span>
          ))}
        </li>
      )

    case 'code':
      return (
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
          <code className="text-sm text-gray-800">
            {bloco.code.rich_text.map(texto => texto.plain_text).join('')}
          </code>
        </pre>
      )

    case 'quote':
      return (
        <blockquote className="border-l-4 border-gray-900 pl-4 italic text-gray-600">
          {bloco.quote.rich_text.map((texto, index) => (
            <span key={index} className={obterEstilosTexto(texto.annotations)}>
              {texto.plain_text}
            </span>
          ))}
        </blockquote>
      )

    case 'image': {
      const urlImagem =
        bloco.image.type === 'external' ? bloco.image.external.url : bloco.image.file.url

      return (
        <div className="my-6">
          <Image
            src={urlImagem}
            alt="Imagem do artigo"
            width={800}
            height={400}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      )
    }

    case 'divider':
      return <hr className="my-8 border-gray-300" />

    case 'callout':
      return (
        <div className="bg-gray-50 border-l-4 border-gray-900 p-4 rounded-r-lg my-4">
          <div className="flex items-start">
            <span className="text-gray-700 mr-2">💡</span>
            <div className="text-gray-700">
              {bloco.callout.rich_text.map((texto, index) => (
                <span key={index} className={obterEstilosTexto(texto.annotations)}>
                  {texto.plain_text}
                </span>
              ))}
            </div>
          </div>
        </div>
      )

    default:
      return null
  }
}

// Retorna classes CSS baseadas nas anotações de texto do Notion
function obterEstilosTexto(anotacoes: {
  bold?: boolean
  italic?: boolean
  strikethrough?: boolean
  underline?: boolean
  code?: boolean
  color?: string
}): string {
  let estilos = ''
  if (anotacoes.bold) estilos += ' font-bold'
  if (anotacoes.italic) estilos += ' italic'
  if (anotacoes.strikethrough) estilos += ' line-through'
  if (anotacoes.underline) estilos += ' underline'
  if (anotacoes.code) estilos += ' bg-gray-100 px-1 py-0.5 rounded text-sm font-mono'
  return estilos
}
