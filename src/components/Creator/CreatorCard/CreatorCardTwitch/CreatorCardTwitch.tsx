import { FC } from 'react'

import styles from './CreatorCardTwitch.module.scss'

import { useMouseFollowerContext } from '@/ui'
import { CreatorCardTwitchData } from './CreatorCardTwitchData'

export type CreatorCardTwitchProps = {
  creator: any
}

export const CreatorCardTwitch: FC<CreatorCardTwitchProps> = ({ creator }) => {
  const { setSize } = useMouseFollowerContext()
  return (
    <div className={styles.creatorCardTwitch}>
      <div className={styles.creatorCardTwitch_iframe}>
        <iframe
          src={`https://player.twitch.tv/?channel=${creator.twitchUserName}&parent=${process.env.WEB_DOMAIN}&muted=true`}
          height="100%"
          width="100%"
          allowFullScreen
          onMouseOver={() => setSize('hide')}
          onMouseLeave={() => setSize('normal')}
        ></iframe>
      </div>
      <CreatorCardTwitchData creator={creator} />
    </div>
  )
}
