import { FC, useMemo } from 'react'

import { CreatorTwitchType, ECreatorSocialType } from '@/types'

import styles from './TwitchList.module.scss'

export type TwitchListProps = {
  creators: CreatorTwitchType[]
  onSelect: (creator: CreatorTwitchType) => void
}

const getCreatorImage = (creator: CreatorTwitchType) => {
  if(creator.avatar) return creator.avatar
  return `https://unavatar.io/github/${creator.social.find((social) => social.type === ECreatorSocialType.Github)?.userName}`
}

export const TwitchList: FC<TwitchListProps> = ({ creators, onSelect }) => {

  const handleOnClick = (creator: CreatorTwitchType) => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    onSelect(creator)
  }

  return (
    <div className={styles.twitchList}>
      <div className={styles.twitchList_title}>
        <h2>Descubre otros creadores en directo en este momento</h2>
      </div>
      <div className={styles.twitchList_content}>
        { creators.map(creator => (
            <div key={creator._id} className={styles.twitchList_item} onClick={() => handleOnClick(creator)}>
              <img src={getCreatorImage(creator)} alt={creator.twitchUserName} />
              <div className={styles.twitchList_itemData}>
                <h2 className={styles.twitchList_itemName}>{ creator.name }</h2>
                <p className={styles.twitchList_itemUserName}>{creator.twitchUserName}</p>
              </div>
            </div>
          )) }
      </div>
    </div>
  )
}
