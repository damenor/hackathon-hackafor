import { ButtonHTMLAttributes, FC } from 'react'
import { IconType } from 'react-icons'

import { ColorsType } from '@/types'

import styles from './ButtonIcon.module.scss'

export type ButtonIconProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  Icon: IconType
  className?: string
  iconSize?: number
  color?: ColorsType
}

export const ButtonIcon: FC<ButtonIconProps> = ({ Icon, className, iconSize = 28, color = 'bg-contrast', ...buttonProps }) => {
  return (
    <button className={`${styles.buttonIcon} ${className}`} {...buttonProps}>
      <Icon size={iconSize} color={`var(--color-${color})`} />
    </button>
  )
}
