import Link from 'next/link'
import { FC } from 'react'
import { CgMenuLeft } from 'react-icons/cg'
import { FiTwitch, FiYoutube } from 'react-icons/fi'
import { HiOutlineHome } from 'react-icons/hi'
import { RiSettings3Line } from 'react-icons/ri'

import { useMouseFollowerMethods } from '@/ui'

import styles from './AppHeader.module.scss'

export type AppHeaderProps = {}

export const AppHeader: FC<AppHeaderProps> = () => {

  const mouseFollowerMethods = useMouseFollowerMethods()

  return (
    <header className={styles.appHeader}>

      <div className={styles.appHeader_content}>
        
        
        <div className={styles.appHeader_left}>
          {/* <CgMenuLeft size={24} /> */}

          <Link className={styles.appHeader_button} href="/twitch" { ...mouseFollowerMethods }>
            Ver en directo
          </Link>

          <Link href="/twitch" { ...mouseFollowerMethods }>
            Videos
          </Link>

        </div>

        <Link href="/">
          <h1 className={styles.appHeader_title}>Education4DEV</h1>
        </Link>

        <div className={styles.appHeader_right}>
          {/* <Link href="/" { ...mouseFollowerMethods }>
            <HiOutlineHome size={24}  />
          </Link> */}
          <Link href="/" { ...mouseFollowerMethods }>
            <RiSettings3Line size={24}  />
          </Link>
          {/* <Link href="/twitch">
            <FiTwitch size={24} />
          </Link>
          <Link href="/youtube">
            <FiYoutube size={24} />
          </Link> */}
        </div>
      </div>

    </header>
  )
}
