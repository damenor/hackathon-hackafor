import { FC, useEffect, useRef } from 'react'

import styles from './CreatorCardTwitch.module.scss'

import { useMouseFollowerContext } from '@/ui'
import { CreatorCardTwitchData } from './CreatorCardTwitchData'

export type CreatorCardTwitchProps = {
  creator: any
}

export const CreatorCardTwitch: FC<CreatorCardTwitchProps> = ({ creator }) => {
  const { setSize } = useMouseFollowerContext()
  const twitchUserName = creator.social.find((red: any) => red.type === 'twitch').userName

  const videoRef = useRef<any>()

  useEffect(() => {
    // if (!videoRef.current) return
    // setTimeout(() => {
    //   // videoRef.current.muted = false
    //   videoRef.current.play()
    //   videoRef.current.volume = 1
    // }, 3000)
  }, [])

  return (
    <div className={styles.creatorCardTwitch}>
      <div className={styles.creatorCardTwitch_iframe}>
        {/* <video
          ref={videoRef as any}
          height="100%"
          width="100%"
          loop
          src="https://production.assets.clips.twitchcdn.net/hwYe63nVMZi2id5wW2EPWQ/AT-cm%7ChwYe63nVMZi2id5wW2EPWQ-360.mp4?sig=6a9fb36f31ba36e8410e272579b8456b26c19ee1&token=%7B%22authorization%22%3A%7B%22forbidden%22%3Afalse%2C%22reason%22%3A%22%22%7D%2C%22clip_uri%22%3A%22https%3A%2F%2Fproduction.assets.clips.twitchcdn.net%2FhwYe63nVMZi2id5wW2EPWQ%2FAT-cm%257ChwYe63nVMZi2id5wW2EPWQ.mp4%22%2C%22device_id%22%3A%224bd4ee5f78ffc61f%22%2C%22expires%22%3A1677164862%2C%22user_id%22%3A%2282599367%22%2C%22version%22%3A2%7D"
        /> */}
        <iframe
          src={`https://player.twitch.tv/?channel=${twitchUserName}&parent=${process.env.WEB_DOMAIN}&muted=true`}
          height="100%"
          width="100%"
          allowFullScreen
          onMouseOver={() => setSize('hide')}
          onMouseLeave={() => setSize('normal')}
        ></iframe>
      </div>
      <CreatorCardTwitchData creator={creator} twitchUserName={twitchUserName} />
    </div>
  )
}
