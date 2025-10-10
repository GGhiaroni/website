import { IFAQ } from '@/types'
import { siteDetails } from './siteDetails'

export const faqs: IFAQ[] = [
  {
    question: `O ${siteDetails.siteName} é seguro?`,
    answer:
      'Absolutamente. Usamos criptografia de nível bancário para proteger seus dados e nunca armazenamos suas informações de login.',
  },
  {
    question: `Posso usar o ${siteDetails.siteName} em múltiplos dispositivos?`,
    answer:
      'Absolutamente! Sua conta do diaum sincroniza perfeitamente em todos os seus dispositivos - smartphone, tablet e computador.',
  },
  {
    question: 'Posso bloquear todos os tipos de conteúdo?',
    answer: `Sim! O ${siteDetails.siteName} oferece bloqueio completo de conteúdo inadequado e sites de pornografia.`,
  },
  {
    question: 'Preciso de experiência para usar os recursos de bloqueio?',
    answer:
      'Não! Nossos recursos são intuitivos e fáceis de usar, independentemente do seu nível de experiência.',
  },
  {
    question: 'E se eu precisar de ajuda usando o app?',
    answer:
      'Nossa equipe de suporte dedicada está disponível 24/7 via chat ou email. Além disso, oferecemos tutoriais extensivos no app para ajudá-lo a aproveitar ao máximo o diaum.',
  },
]
