import { useMouseFollowerContext } from '@/ui/MouseFollower'
import { FC } from 'react'

import styles from './VideoIframe.module.scss'

export type VideoIframeProps = {
  src: string
}

export const VideoIframe: FC<VideoIframeProps> = ({ src }) => {
  const { setSize } = useMouseFollowerContext()
  return (
    <div className={styles.videoIframe}>
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
