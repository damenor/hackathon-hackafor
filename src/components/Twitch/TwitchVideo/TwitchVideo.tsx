import { FC } from 'react'

import { CreatorTwitchType } from '@/types'

import styles from './TwitchVideo.module.scss'
import { TwitchVideoChat } from './TwitchVideoChat'
import { TwitchVideoIframe } from './TwitchVideoIframe'

export type TwitchVideoProps = {
  creator: CreatorTwitchType
}

export const TwitchVideo: FC<TwitchVideoProps> = ({ creator }) => {
  console.log({creator})
  return (
    <div className={styles.twitchVideo}>
      <TwitchVideoIframe creator={creator} />
      {creator && <TwitchVideoChat creator={creator} />}
    </div>
  )
}
