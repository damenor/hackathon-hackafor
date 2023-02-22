import { FC } from 'react'

import styles from './MouseFollower.module.scss'

import { getClassName } from '@/styles'
import { useMouseFollowerContext } from './hooks'

export const MouseFollower: FC = () => {
  const { position, size } = useMouseFollowerContext()

  const className = getClassName({ styles, parent: 'mouseFollower', variants: { [size]: true } })

  return (
    <div className={className} style={{ transform: `translate(${position.x}px, ${position.y}px)` }}>
      <img style={{ width: '100%' }} src="/pato.png" />
    </div>
  )
}
