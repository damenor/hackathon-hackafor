import { CSSProperties, FC, ReactNode } from 'react'

import styles from './ContainerInfiniteScroll.module.scss'

export type ContainerInfiniteScrollProps = {
  children: ReactNode
  className?: string
  style?: CSSProperties
}

export const ContainerInfiniteScroll: FC<ContainerInfiniteScrollProps> = ({ children, className, style }) => {
  return (
    <div style={style} className={styles.containerInfiniteScroll}>
      <div>{children}</div>
    </div>
  )
}
