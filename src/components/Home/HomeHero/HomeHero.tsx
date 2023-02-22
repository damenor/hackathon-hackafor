import Link from 'next/link'
import { FC } from 'react'

import styles from './HomeHero.module.scss'

import { useMouseFollowerMethods } from '@/ui'

export const HomeHero: FC = () => {

  const mouseFollowerMethods = useMouseFollowerMethods()

  return (
    <section className={styles.homeHero}>
      <h1 className={styles.homeHero_title}>Education4DEV</h1>
      <p className={styles.homeHero_paragraph}>Descubre los mejores creadores de contenido sobre programación de habla hispana </p>
      <Link 
        className={styles.homeHero_button} 
        href="/twitch" 
        { ...mouseFollowerMethods }
      >En directo</Link>
    </section>
  )
}
