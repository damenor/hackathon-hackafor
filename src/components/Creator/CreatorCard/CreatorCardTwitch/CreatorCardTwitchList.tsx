import { FC } from 'react'

import styles from './CreatorCardTwitch.module.scss'

import { CreatorCardTwitchData } from './CreatorCardTwitchData'

export type CreatorCardTwitchListProps = {
  creators: any[]
  onSelect: (creator: any) => void
}

export const CreatorCardTwitchList: FC<CreatorCardTwitchListProps> = ({ creators, onSelect }) => {
  return (
    <div className={styles.creatorCardTwitch_list}>
      <h3 style={{
        textAlign: 'center',
        padding: 'clamp(16px, 5vw, 72px) 0',
        fontSize: 'clamp(1.5rem, 5vw, 3rem)',
        fontWeight: 'bold'
      }}>Otros creadores en directo</h3>
      <div className={styles.creatorCardTwitch_listContent}>
        {/* { creators.map(creator => (
          <CreatorCardTwitchData creator={creator} onClick={onSelect} />
        )) } */}
      </div>
    </div>
  )
}
