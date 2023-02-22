import { CSSProperties, FC, ReactNode } from 'react'
import Head from 'next/head'

import { PageReveal } from '@/ui'
import { AppHeader } from './AppHeader'

const HEAD_TITLE = 'Education4DEV'
const HEAD_DESCRIPTION = 'Descubre los mejores creadores de contenido sobre programación de habla hispana'

export type AppLayoutProps = {
  children: ReactNode
  description?: string
  title?: string
  subtitle?: string
  mainClassName?: string
  mainStyle?: CSSProperties
  extraMeta?: ReactNode
}

export const AppLayout: FC<AppLayoutProps> = ({
  children,
  description = HEAD_DESCRIPTION,
  title = HEAD_TITLE,
  subtitle,
  mainClassName,
  mainStyle,
  extraMeta
}) => {
  return (
    <>
      <Head>
        <title>{`${title}${ subtitle ? ` - ${subtitle}`: '' }`}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        { extraMeta }
      </Head>
      <PageReveal />
      <AppHeader />
      <main className={mainClassName} style={mainStyle}>
        {children}
      </main>
    </>
  )
}
