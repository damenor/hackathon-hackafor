import type { AppProps } from 'next/app'

import '@/styles/globals.scss'

import { AppFont } from '@/components'
import { MouseFollowerProvider } from '@/ui'

const App = ({ Component, pageProps }: AppProps) => {

  return (
    <>
      <AppFont />
      <MouseFollowerProvider>
        <Component {...pageProps} />
      </MouseFollowerProvider>
    </>
  )
}

export default App
