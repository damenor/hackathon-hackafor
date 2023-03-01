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

  return (
    <motion.div 
      className={styles.twitchVideoChat} 
      drag 
      dragConstraints={{ left: 0, top: 0 }}
      dragElastic={0.2}
    >
      { messages[0] && <h2 className={styles.twitchVideoChat_title}>{messages[0].channel}</h2> }
      <div className={styles.twitchVideoChat_content}>
        { messages.map(message => (
          <div className={styles.twitchVideoChat_message}>
            <h3 style={{ color: message.color }}>{message.userName}:</h3>
            <p>{message.text}</p>
          </div>
        )) }
      </div>
    </motion.div>
  )

}