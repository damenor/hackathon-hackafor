import Link from 'next/link'
import { FC, useRef } from 'react'
import { CgMenuLeft, CgClose } from 'react-icons/cg'

import { ButtonIcon, Modal, ModalHandle } from '@/ui'

import styles from './AppHeader.module.scss'
import { AppHeaderMenuLink } from './AppHeaderMenuLink'

const MENU_LINKS = [
  { label: 'Inicio', href: '/' },
  { label: 'Ver en directo', href: '/twitch' },
  // { label: 'Últimos videos', href: '/youtube' },
]

export type AppHeaderProps = {}

export const AppHeader: FC<AppHeaderProps> = () => {
  const modalRef = useRef<ModalHandle>()

  const onOpenModal = () => modalRef.current?.open()
  const onCloseModal = () => modalRef.current?.close()

  return (
    <>
      <header className={styles.appHeader}>
        <div className={styles.appHeader_content}>
          <div className={styles.appHeader_left}>
            <ButtonIcon Icon={CgMenuLeft} onClick={onOpenModal} />
          </div>

          <Link href="/">
            <h1 className={styles.appHeader_title}>Education4DEV</h1>
          </Link>

          <div className={styles.appHeader_right}></div>
        </div>
      </header>
      <Modal classNameParent={styles.appHeader_modal} className={styles.appHeader_modalContent} type="left" ref={modalRef as any}>
        <ButtonIcon className={styles.appHeader_close} Icon={CgClose} color="danger" onClick={onCloseModal} />
        {MENU_LINKS.map(link => (
          <AppHeaderMenuLink key={link.href} {...link} onClick={onCloseModal} />
        ))}
      </Modal>
    </>
  )
}
