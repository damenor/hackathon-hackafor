import { useEffect, useRef, useState } from 'react'
import tmi from 'tmi.js'

export const useTmi = (channel: string) => {

  const tmiClient = useRef<tmi.Client>()
  const [messages, setMessages] = useState<any[]>([])

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
      console.log({ channel, displayName: tags['display-name'], tags, text })
      const nextMessage = { channel, displayName: tags['display-name'], tags, text }
      setMessages(prevState => [...prevState, nextMessage])
    })
  }

  return { messages }

}
