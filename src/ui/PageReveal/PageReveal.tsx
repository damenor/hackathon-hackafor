import { FC } from 'react'

import styles from './PageReveal.module.scss'

export const PageReveal: FC = () => {
  return (
    <div className={styles.pageReveal}>
      <div className={styles.pageReveal_title}>
        <h1 >Education4DEV</h1>
        <div className="loader">
          <i></i><i></i><i></i><i></i><i></i><i></i>
          <i></i><i></i><i></i><i></i><i></i><i></i>
          <i></i><i></i><i></i><i></i><i></i><i></i>
          <i></i><i></i><i></i><i></i><i></i><i></i>
          <i></i><i></i><i></i><i></i><i></i><i></i>
          <i></i><i></i><i></i><i></i><i></i><i></i>
          <i></i><i></i><i></i><i></i><i></i><i></i>
          <i></i><i></i><i></i><i></i><i></i><i></i>
          <i></i><i></i><i></i><i></i><i></i><i></i>
          <i></i><i></i><i></i><i></i><i></i><i></i>
          <i></i><i></i><i></i><i></i><i></i><i></i>
          <i></i><i></i><i></i><i></i><i></i><i></i>
        </div>
      </div>
      <div className={`${styles.pageReveal_element} ${styles.pageReveal_element__first}`}></div>
      <div className={`${styles.pageReveal_element} ${styles.pageReveal_element__second}`}></div>
      <div className={`${styles.pageReveal_element} ${styles.pageReveal_element__third}`}></div>
      <div className={`${styles.pageReveal_element} ${styles.pageReveal_element__four}`}></div>
    </div>
  )
}
