import { CreatorModel } from '@/models'
import { apiHandlerWithDB, fetcher } from '@/utils'
import { CreatorTwitchType, CreatorType, ECreatorSocialType } from '@/types'

const DEFAULT_CREATORS = [
  {
    categories: ['frontend', 'backend', 'database'],
    description: 'creator.description',
    name: 'rubius',
    social: [{ type: ECreatorSocialType.Twitch, userName: 'rubius' }],
    web: 'https://bluuweb.github.io',
    active: true,
    _id: '63f65b1b2128836cb0ef86fbdsfasdf',
  },
  {
    categories: ['frontend', 'backend', 'database'],
    description: 'creator.description',
    name: 'yomolotakowapo',
    social: [{ type: ECreatorSocialType.Twitch, userName: 'yomolotakowapo' }],
    web: 'https://bluuweb.github.io',
    active: true,
    _id: '63f65b1b2128836cb0ef86fbdsfasdf1',
  },
  {
    categories: ['frontend', 'backend', 'database'],
    description: 'creator.description',
    name: 'niv3k_el_pato',
    social: [{ type: ECreatorSocialType.Twitch, userName: 'niv3k_el_pato' }],
    web: 'https://bluuweb.github.io',
    active: true,
    _id: '63f65b1b2128836cb0ef86fbdsfasdf2',
  },
]

const getTwitchUserName = (creator: CreatorType) => creator.social.find((red) => red.type === ECreatorSocialType.Twitch)?.userName

type CheckIsLiveReturn = {
  online: boolean
  twitchUserName: string
  rawUptime?: string
}
const checkIsLive = async (creator: CreatorType): Promise<CheckIsLiveReturn> => {
  const twitchUserName = getTwitchUserName(creator)
  if (!twitchUserName) return { online: false, twitchUserName: '' }
  const response = (await fetcher({ url: `https://midudev-apis.midudev.workers.dev/uptime/${twitchUserName}` })) as any
  return { twitchUserName, ...(response.online ? { ...response } : { online: false }) }
}

const getCreatorsTwitchStatus = async ({ creators }: { creators: CreatorType[] }): Promise<CreatorTwitchType[]> => {
  const creatorsLive = await Promise.all(creators.map(checkIsLive))
  return creators.map(creator => {
    const twitchUserName = getTwitchUserName(creator)
    const creatorOnlineData = creatorsLive.find(cre => cre.twitchUserName === twitchUserName)
    return { ...JSON.parse(JSON.stringify(creator)), ...creatorOnlineData }
  })
}

const getCreatorWithTwitch = async () => {
  const creators = await CreatorModel.findWithTwitch()
  DEFAULT_CREATORS.map(c => creators.push(c))
  const creatorStatus = await getCreatorsTwitchStatus({ creators })
  return { online: creatorStatus.filter(creator => creator.online), disconnected: creatorStatus.filter(creator => !creator.online) }
}

export default apiHandlerWithDB({
  get: getCreatorWithTwitch,
})
