import type { AppProps } from 'next/app'

import { Header } from '@/components/Header'
import { Player } from '@/components/Player'
import { PlayerContextProvider } from '@/contexts/PlayerContexts'

import '../styles/global.scss'

import styles from '../styles/app.module.scss'


export default function App({ Component, pageProps }: AppProps) {

  return (
      <PlayerContextProvider>
        <div className={styles.Wrapper}>
          <main>
            <Header />
            <Component {...pageProps} />
          </main>
          <Player />
        </div>
      </PlayerContextProvider>
  )
}
