import { FC, useMemo } from 'react'

import { CreatorTwitchType, ECreatorSocialType } from '@/types'

import styles from './TwitchListCreator.module.scss'

export type TwitchListCreatorProps = {
  creator: CreatorTwitchType
  onClick: () => void
  isOnline?: boolean
}

export const TwitchListCreator: FC<TwitchListCreatorProps> = ({ creator, isOnline, onClick }) => {
  const image = useMemo(() => {
    if (creator.avatar) return creator.avatar
    return `https://unavatar.io/github/${creator.social.find(social => social.type === ECreatorSocialType.Github)?.userName}`
  }, [creator])

  const handleOnClick = () => {
    if(isOnline) return onClick()
    window.open(`https://www.twitch.tv/${creator.twitchUserName}`)
  }

  return (
    <div className={styles.twitchListCreator} onClick={handleOnClick}>
      <img src={image} alt={creator.name} />
      <div className={styles.twitchListCreator_data}>
        <p>{creator.name}</p>
        <span>{creator.twitchUserName}</span>
      </div>
    </div>
  )
}
