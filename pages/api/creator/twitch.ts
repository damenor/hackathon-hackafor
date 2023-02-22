import { apiHandler } from '@damenor/tools-nextjs'

import { CreatorModel, ECreatorSocialType } from '@/models'
import { apiHandlerWithDB, fetcher } from '@/utils'

const createMockCreator = () => ({
  categories: ['frontend', 'backend', 'database'],
  description: 'creator.description',
  name: 'LecheroFett',
  social: [{ type: ECreatorSocialType.Twitch, userName: 'LecheroFett' }],
})

type CheckIsLiveReturn = Promise<{ creator: any; online: boolean; rawUptime: string; twitchUserName: string }>
const checkIsLive = async (creator: any): CheckIsLiveReturn => {
  const twitchUserName = creator.social.find((red: any) => red.type === 'twitch').userName
  const response = (await fetcher({ url: `https://midudev-apis.midudev.workers.dev/uptime/${twitchUserName}` })) as any
  return { twitchUserName, ...(response.online ? { ...response } : { online: false }) }
}

const getCreatorTwitchOnline = async () => {
  const creatorsInDB: any = await CreatorModel.findWithTwitch()
  const creatorsInLive = await Promise.all(creatorsInDB.map(checkIsLive))
  const creatorsConnected = creatorsInLive.filter(creator => creator.online).map(cre => cre.twitchUserName)
  return creatorsInDB.filter((creator: any) => {
    const twitchUserName = creator.social.find((red: any) => red.type === 'twitch').userName
    return creatorsConnected.includes(twitchUserName)
  })
}

const creatorTwitchController = {
  get: getCreatorTwitchOnline,
}

export default apiHandlerWithDB(creatorTwitchController)