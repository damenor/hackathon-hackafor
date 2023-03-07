import { FC } from 'react'

import styles from './SpinnerGradient.module.scss'

export type SpinnerGradientProps = {
  text?: string
}

export const SpinnerGradient: FC<SpinnerGradientProps> = ({ text }) => {
  return (
    <div className={styles.spinnerGradient}>
      <div className={styles.spinnerGradient_loader}>
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
      { text && <p className={styles.spinnerGradient_text}>{text}</p> }
    </div>
  )
}
