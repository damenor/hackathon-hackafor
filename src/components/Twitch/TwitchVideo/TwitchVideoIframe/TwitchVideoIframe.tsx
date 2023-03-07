import { FC, useMemo } from 'react'

import { TWITCH_PARENT } from '@/constants'
import { VideoIframe } from '@/ui'
import { CreatorTwitchType } from '@/types'

import styles from './TwitchVideoIframe.module.scss'
import { TwitchVideoData } from '../TwitchVideoData'

export type TwitchVideoIframeProps = {
  creator: CreatorTwitchType
}

export const TwitchVideoIframe: FC<TwitchVideoIframeProps> = ({ creator }) => {

  const twitchSrc = useMemo(() => {
    return `https://player.twitch.tv/?channel=${creator?.twitchUserName}&parent=${TWITCH_PARENT}&muted=true` || ''
  }, [creator])

  return (
    <div className={styles.twitchVideoIframe}>
      <div className={styles.twitchVideoIframe_content}>
        {creator ? (
          <VideoIframe src={twitchSrc} />
        ) : (
          <div>
            <h2>¡Vaya! parece que no hay nadie en directo</h2>
            <img src="https://i.gifer.com/7VE.gif" />
          </div>
        )}
      </div>
      {creator && <TwitchVideoData creator={creator} />}
    </div>
  )
}
