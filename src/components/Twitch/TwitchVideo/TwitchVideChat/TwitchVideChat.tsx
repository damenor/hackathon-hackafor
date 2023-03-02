import { FC } from 'react'
import { motion } from 'framer-motion'

import { useTmi } from '@/utils'
import { CreatorTwitchType } from '@/types'

import styles from './TwitchVideChat.module.scss'

export type TwitchVideoChatProps = {
  creator: CreatorTwitchType
}

export const TwitchVideoChat: FC<TwitchVideoChatProps> = ({ creator }) => {
  const { messages } = useTmi(creator.twitchUserName)

  const { innerWidth: width, innerHeight: height } = window || { innerHeight: null, innerWidth: null }

  return (
    <motion.div 
      className={styles.twitchVideoChat} 
      drag 
      dragConstraints={{ left: -150, top: - 50, bottom: height - 150, right: width -150 }}
      dragElastic={0.2}
    >
      { messages.length === 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
          <h2 className={styles.twitchVideoChat_titleLoading}>Conectando...</h2>
        </div>
      ) : (
        <>
          <h2 className={styles.twitchVideoChat_title}>{messages[0].channel}</h2>
          <div className={styles.twitchVideoChat_content}>
            { messages.map(message => (
              <div className={styles.twitchVideoChat_message} key={message.id}>
                <h3 style={{ color: message.color }}>{message.userName}:</h3>
                <p>{message.text}</p>
              </div>
            )) }
          </div>
        </>
      ) }
    </motion.div>
  )

}