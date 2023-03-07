import Link from 'next/link'
import { FC } from 'react'

import styles from './HomeInLive.module.scss'

export type HomeInLiveProps = { }

export const HomeInLive: FC<HomeInLiveProps> = (props) => {
  return (
    <article className={styles.homeInLive}>
      <h2>Comprueba quién hay ahora mismo en directo</h2>
      <Link className={styles.homeInLive_link} href="/twitch">Ver en directo</Link>
    </article>
  )
}
