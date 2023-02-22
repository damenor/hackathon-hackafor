import { useEffect } from 'react'
import tmi from 'tmi.js'

// const tmiClient = new tmi.Client({
//   options: { debug: false },
//   // channels: ['illojuan', 'rivers_gg']
//   channels: ['afor_digital']
// })

// const chatClient = new ChatClient({ channels: ['afor_digital'] });


export const useTmi = () => {

  useEffect(() => {
    (async () => {
      // await tmiClient.connect()
      // await chatClient.connect()
      // const eventOnMessage = chatClient.onMessage((channel: string, user: string, text: string, msg: PrivateMessage) => {
      //   console.log({ user, msg, text, channel })
      // })
      // return chatClient.removeListener(eventOnMessage)
    })()
    // tmiClient.on('message', (channel, tags, message, self) => {
    //   // console.log({ channel, displayName: tags['display-name'], message })
    //   console.log({ displayName: tags['display-name'], tags })
    // })
    // tmiClient.on('disconnected', console.log)
    // return () => {
    //   tmiClient.removeAllListeners()
    // }
  }, [])

  const onAdd = async () => {
    // await tmiClient.join('illojuan')
  }

  const onExit = async () => {
    // await tmiClient.part('illojuan')
  }

  return { onAdd, onExit }

}
