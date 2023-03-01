import { FC, useEffect, useMemo, useState } from 'react'

import { useMouseFollowerContext } from '@/ui'
import { CreatorTwitchType, ECreatorSocialType } from '@/types'

import styles from './TwitchVideo.module.scss'
import { useTmi } from '@/utils'

export type TwitchVideoProps = {
  creator: CreatorTwitchType
}

const VideoIframe = ({ src }: any) => {
  const { setSize } = useMouseFollowerContext()
  return (
    <div className={styles.twitchVideo_iframe}>
      <iframe
        src={src}
        height="100%"
        width="100%"
        allowFullScreen
        onMouseOver={() => setSize('hide')}
        onMouseLeave={() => setSize('normal')}
      ></iframe>
    </div>
  )
}

export const TwitchVideoChat: FC<TwitchVideoProps> = ({ creator }) => {
  const { messages } = useTmi(creator.twitchUserName)

  return (
    <div>
      { messages.map(message => (
        <div>
          <p>{message.text}</p>
        </div>
      )) }
    </div>
  )

}

export const TwitchVideo: FC<TwitchVideoProps> = ({ creator }) => {
  const [showChat, setShowChat] = useState(false)
  const image = useMemo(() => {
    if(creator.avatar) return creator.avatar
    return `https://unavatar.io/github/${creator.social.find((social) => social.type === ECreatorSocialType.Github)?.userName}`
  }, [creator])

  useEffect(() => {
    if(showChat) setShowChat(false)
  }, [creator])

  return (
    <>
      <div className={styles.twitchVideo}>
        <VideoIframe src={`https://player.twitch.tv/?channel=${creator.twitchUserName}&parent=${process.env.WEB_DOMAIN}&muted=true`} />
        <div className={styles.twitchVideo_data}>
          <div className={styles.twitchVideo_logo}>
            <img style={{ width: '100%', height: '100%', borderRadius: '50%' }} src={image} />
          </div>
          <div className={styles.twitchVideo_content}>
            <h2 className={styles.twitchVideo_name}>{creator.name}</h2>
            <p className={styles.twitchVideo_userName}>{creator.twitchUserName}</p>
            <div className={styles.twitchVideo_tags}>
              {creator.categories.map((category: string) => (
                <div className={styles.twitchVideo_tag}>{category}</div>
              ))}
            </div>
          </div>
          <button onClick={() => setShowChat(true)} style={{ backgroundColor: 'red', padding: '8px', fontSize: '1.5rem' }}>Ver chat</button>
        </div>
      </div>
      { showChat && <TwitchVideoChat creator={creator} /> }
    </>
  )
}
