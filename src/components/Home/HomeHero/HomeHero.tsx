import Link from 'next/link'
import { FC } from 'react'

import styles from './HomeHero.module.scss'

import { useMouseFollowerMethods } from '@/ui'

export const HomeHero: FC = () => {

  const mouseFollowerMethods = useMouseFollowerMethods()

  return (
    <section className={styles.homeHero}>
      {/* <h1 className={styles.homeHero_title}>Education4DEV</h1> */}
      {/* <div style={{ height: '600px' }}></div> */}

      <div className={styles.homeHero_wavy}>
        {/* <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat quo temporibus ullam, asperiores qui alias laborum nostrum consectetur repellendus exercitationem iure sapiente facere aliquid suscipit nihil aliquam magni odio non. Nulla, temporibus. Laboriosam unde tempora, quasi explicabo excepturi sapiente possimus aliquam aperiam minima voluptatibus temporibus, consequatur eveniet consectetur totam saepe ut quia nisi vero accusamus. Aperiam voluptate est mollitia placeat quod temporibus quam qui error alias expedita officiis optio laborum voluptas, distinctio animi sed consectetur vel! Ratione exercitationem voluptatibus vitae, suscipit ullam ad? Assumenda necessitatibus cum veritatis, ea beatae deserunt consequatur asperiores exercitationem, quam laborum illo sapiente architecto voluptas aliquid.
        </p> */}
      <p className={styles.homeHero_paragraph}>Descubre los mejores creadores de contenido sobre programación de habla hispana </p>
      </div>

      {/* <Link 
        className={styles.homeHero_button} 
        href="/twitch" 
        { ...mouseFollowerMethods }
      >En directo</Link> */}
    </section>
  )
}
