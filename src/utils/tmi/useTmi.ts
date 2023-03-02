import { useEffect, useRef, useState } from 'react'
import tmi from 'tmi.js'

export type TmiMessage = {
  id: string
  channel: string
  userName?: string
  color?: string
  isMod?: boolean
  isSubscriber?: boolean
  emotes?: { [key: string]: string[] }
  isEmoteOnly?: boolean
  text: string
}

export const useTmi = (channel: string) => {
  const tmiClient = useRef<tmi.Client>()
  const [messages, setMessages] = useState<TmiMessage[]>([])

  useEffect(() => {
    connectListener()
    return () => {
      tmiClient.current?.removeAllListeners()
    }
  }, [])

  const connectListener = async () => {
    tmiClient.current = new tmi.Client({ options: { debug: false }, channels: [channel] })
    await tmiClient.current?.connect()
    tmiClient.current?.on('message', (channel, tags, text) => {
      const nextMessage: TmiMessage = {
        id: crypto.randomUUID(),
        channel,
        userName: tags.username || tags['display-name'],
        color: tags.color,
        emotes: tags.emotes,
        isEmoteOnly: tags['emote-only'],
        isMod: tags.mod,
        isSubscriber: tags.subscriber,
        text,
      }
      setMessages(prevState => [...prevState, nextMessage])
    })
  }

  return { messages }
}
