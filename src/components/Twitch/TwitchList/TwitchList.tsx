import { FC, useRef } from 'react'
import { CgUserList } from 'react-icons/cg'

import { CreatorTwitchType, ECreatorSocialType } from '@/types'
import { ButtonIcon, Modal, ModalHandle } from '@/ui'

import styles from './TwitchList.module.scss'
import { TwitchListCreator } from './TwitchListCreator'

export type TwitchListProps = {
  creators: CreatorTwitchType[]
  creatorsNotOnline: CreatorTwitchType[]
  onSelect: (creator: CreatorTwitchType) => void
}

const getCreatorImage = (creator: CreatorTwitchType) => {
  if (creator.avatar) return creator.avatar
  return `https://unavatar.io/github/${creator.social.find(social => social.type === ECreatorSocialType.Github)?.userName}`
}

export const TwitchList: FC<TwitchListProps> = ({ creators, creatorsNotOnline, onSelect }) => {
  const modalRef = useRef<ModalHandle>()
  const closeModal = () => modalRef.current?.close()
  const openModal = () => modalRef.current?.open()

  const onClickOnline = (creator: CreatorTwitchType) => {
    closeModal()
    onSelect(creator)
  }

  return (
    <>
      <div className={styles.twitchList}>
        {/* <div className={styles.twitchList_content}>
          {creators.map(creator => (
            <div key={creator._id} className={styles.twitchList_item} onClick={() => handleOnClick(creator)}>
              <img src={getCreatorImage(creator)} alt={creator.twitchUserName} />
              <div className={styles.twitchList_itemData}>
                <h2 className={styles.twitchList_itemName}>{creator.name}</h2>
                <p className={styles.twitchList_itemUserName}>{creator.twitchUserName}</p>
              </div>
            </div>
          ))}
        </div> */}
      </div>

      <div className={styles.twitchList_button}>
        <ButtonIcon Icon={CgUserList} onClick={openModal} />
      </div>

      <Modal classNameParent={styles.twitchList_modal} ref={modalRef as any} type="right">
        {creators.length > 0 && (
          <>
            <h3 className={styles.twitchList_modalTitle}>EN DIRECTO</h3>
            {creators.map(cre => (
              <TwitchListCreator creator={cre} isOnline onClick={() => onClickOnline(cre)} />
            ))}
          </>
        )}
        <h3 className={styles.twitchList_modalTitle}>OTROS CREADORES</h3>
        {creatorsNotOnline.map(cre => (
          <TwitchListCreator creator={cre} onClick={closeModal} />
        ))}
      </Modal>
    </>
  )
}
