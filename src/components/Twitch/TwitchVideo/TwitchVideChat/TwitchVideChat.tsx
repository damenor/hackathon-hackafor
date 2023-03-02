import { FC, useState } from 'react'
import { motion } from 'framer-motion'

import { useTmi } from '@/utils'
import { CreatorTwitchType } from '@/types'

import styles from './TwitchVideChat.module.scss'

export type TwitchVideoChatProps = {
  creator: CreatorTwitchType
}

export const TwitchVideoChat: FC<TwitchVideoChatProps> = ({ creator }) => {
  const { messages } = useTmi(creator.twitchUserName)
  const [isDraggable, setIsDraggable] = useState(false)

  const { innerWidth: width, innerHeight: height } = window || { innerHeight: null, innerWidth: null }

  const toggleDraggable = () => setIsDraggable(prevState => !prevState)

  return (
    <motion.div 
      className={styles.twitchVideoChat} 
      drag={isDraggable}
      dragConstraints={{ left: -150, top: - 50, bottom: height - 150, right: width -150 }}
      dragElastic={0.6}
    >
      {/* <button onClick={toggleDraggable}>Draggable</button> */}
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
          {/* <h2 className={styles.twitchVideoChat_title}>{messages[0].channel}</h2> */}
          <div className={styles.twitchVideoChat_content}>
            { messages.map(message => (
              <div className={styles.twitchVideoChat_message} key={message.id}>
                <p><span style={{ color: message.color,  width: 'auto' }}>{message.userName}:</span> {message.text}</p>
              </div>
            )) }
          </div>
        </>
      ) }
    </motion.div>
  )

}