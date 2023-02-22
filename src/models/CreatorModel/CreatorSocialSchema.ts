import { modelOptions, prop } from '@typegoose/typegoose'

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

@modelOptions({ schemaOptions: { _id: false } })
export class CreatorSocialSchema {
  @prop({ enum: ECreatorSocialType, required: true })
  type: ECreatorSocialType

  @prop({ type: String, required: true })
  userName: string
}
