import { FC } from 'react'
import { CgMenuLeft } from 'react-icons/cg'
import { HiOutlineHome } from 'react-icons/hi'

import styles from './AppHeader.module.scss'

export type AppHeaderProps = {}

export const AppHeader: FC<AppHeaderProps> = (props) => {
  return (
    <header className={styles.appHeader}>
      <CgMenuLeft size={32} />
      {/* <HiOutlineHome size={32} />
      <HiOutlineHome size={32} />
      <HiOutlineHome size={32} />
      <HiOutlineHome size={32} /> */}
    </header>
  )
}
