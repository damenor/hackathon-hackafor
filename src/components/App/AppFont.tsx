import { FC } from 'react'
import { Montserrat } from '@next/font/google'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900']
})

export const AppFont: FC = () => {
  return (
    <style jsx global>{`
      html {
        font-family: ${montserrat.style.fontFamily};
      }
    `}</style>
  )
}
