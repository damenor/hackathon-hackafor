import { FC } from 'react'

import styles from './CreatorCardTwitch.module.scss'

export type CreatorCardTwitchDataProps = {
  creator: any
  twitchUserName: string
  onClick?: (creator: any) => void
}

export const CreatorCardTwitchData: FC<CreatorCardTwitchDataProps> = ({ creator, twitchUserName, onClick }) => {
  const image = `https://unavatar.io/github/${creator.social.find((social: any) => social.type === 'github')?.userName}`

  const handleOnClick = () => {
    if (!onClick) return
    window.scrollTo({ top: 0, behavior: 'smooth' })
    onClick(creator)
  }
  return (
    <>
      <div className={styles.creatorCardTwitch_data} onClick={handleOnClick}>
        <div className={styles.creatorCardTwitch_logo}>
          <img style={{ width: '100%', height: '100%', borderRadius: '50%' }} src={image} />
        </div>
        <div className={styles.creatorCardTwitch_content}>
          <h2 className={styles.creatorCardTwitch_name}>{creator.name}</h2>
          <p className={styles.creatorCardTwitch_userName}>{twitchUserName}</p>
          <div className={styles.creatorCardTwitch_tags}>
            {creator.categories.map((category: string) => (
              <div className={styles.creatorCardTwitch_tag}>{category}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
