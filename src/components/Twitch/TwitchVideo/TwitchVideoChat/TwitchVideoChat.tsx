import { FC } from 'react'

import { useTmi } from '@/utils'
import { SpinnerGradient } from '@/ui'
import { CreatorTwitchType } from '@/types'

import styles from './TwitchVideoChat.module.scss'

export type TwitchVideoChatProps = {
  creator: CreatorTwitchType
}

export const TwitchVideoChat: FC<TwitchVideoChatProps> = ({ creator }) => {
  const { messages } = useTmi(creator.twitchUserName)

  return (
    <div className={styles.twitchVideoChat}>
      {messages.length === 0 ? (
        <div className={styles.twitchVideoChat_contentLoading}>
          <SpinnerGradient text="Conectando..." />
        </div>
      ) : (
        <div className={styles.twitchVideoChat_content}>
          {messages.map(message => (
            <div className={styles.twitchVideoChat_message} key={message.id}>
              <p>
                <span style={{ color: message.color, width: 'auto' }}>{message.userName}:</span> {message.text}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
