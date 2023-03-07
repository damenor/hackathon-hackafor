import { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { getClassName } from '@/styles'

import styles from './AppHeader.module.scss'

export type AppHeaderMenuLinkProps = {
  href: string
  label: string
  onClick?: () => void
}

export const AppHeaderMenuLink: FC<AppHeaderMenuLinkProps> = ({ href, label, onClick }) => {

  const { pathname } = useRouter()
 
  const className = getClassName({
    styles,
    parent: 'appHeader_link',
    variants: { active: pathname === href }
  })

  return (
    <Link className={className} onClick={onClick} href={href}>
      { label }
    </Link>
  )
}
