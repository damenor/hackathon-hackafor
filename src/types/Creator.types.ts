export type CreatorType = {
  _id: string
  active: boolean
  categories: string[]
  description: string
  name: string
  social: CreatorSocial[]
  avatar?: string
  youtubeChannelId?: string
  web?: string
}

export type CreatorTwitchType = CreatorType & {
  twitchUserName: string
  online: boolean
  rawUptime?: string
}

export type CreatorSocial = {
  type: ECreatorSocialType
  userName: string
}

export enum ECreatorSocialType {
  Discord = 'discord',
  Github = 'github',
  Instagram = 'instagram',
  Tiktok = 'tiktok',
  Twitch = 'twitch',
  Twitter = 'twitter',
  Youtube = 'youtube',
}
