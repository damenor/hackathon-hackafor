import { FC, useMemo } from 'react'

import { CreatorTwitchType, ECreatorSocialType } from '@/types'

import styles from './TwitchVideoData.module.scss'

export type TwitchVideoDataProps = {
  creator: CreatorTwitchType
}

export const TwitchVideoData: FC<TwitchVideoDataProps> = ({ creator }) => {

  const image = useMemo(() => {
    if (creator.avatar) return creator.avatar
    return `https://unavatar.io/github/${creator.social.find(social => social.type === ECreatorSocialType.Github)?.userName}`
  }, [creator])

  return (
    <div className={styles.twitchVideoData}>
      <div className={styles.twitchVideoData_logo}>
        <img style={{ width: '100%', height: '100%', borderRadius: '50%' }} src={image} />
      </div>
      <div className={styles.twitchVideoData_content}>
        <h2 className={styles.twitchVideoData_name}>{creator.name}</h2>
        <p className={styles.twitchVideoData_userName}>{creator.twitchUserName}</p>
        <div className={styles.twitchVideoData_tags}>
          {creator.categories.map((category: string) => (
            <div className={styles.twitchVideoData_tag}>{category}</div>
          ))}
        </div>
      </div>
    </div>
  )
}
