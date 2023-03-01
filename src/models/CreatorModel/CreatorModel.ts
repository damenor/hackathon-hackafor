import { Model, model, models, Schema } from 'mongoose'

import { CreatorType, ECreatorSocialType } from '@/types'

import { CreatorSocialSchema } from './CreatorSocialSchema'

export interface CreatorStatic extends Model<CreatorType> {
  findActives: (isDesactivated: boolean) => CreatorType[]
  findWithSocial: (socialType: ECreatorSocialType) => CreatorType[]
  findWithTwitch: () => CreatorType[]
  findWithYTChannelId: () => CreatorType[]
}

const CreatorSchema = new Schema<CreatorType, CreatorStatic>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  active: { type: Boolean, default: false },
  avatar: { type: String, nullable: true },
  youtubeChannelId: { type: String, nullable: true },
  categories: [{ type: String }],
  web: { type: String, nullable: true },
  social: [{ type: CreatorSocialSchema }]
}, {
  timestamps: true,
  versionKey: false
})


CreatorSchema.static('findWithYTChannelId', function() {
  return this.find({ $nor: [{ youtubeChannelId: null }] })
})

CreatorSchema.static('findActives', function(isDesactivated = false) {
  return this.find({ $nor: [{ isDesactivated }] })
})

CreatorSchema.static('findWithTwitch', function() {
  return this.findWithSocial(ECreatorSocialType.Twitch)
})

CreatorSchema.static('findWithSocial', function(socialType: ECreatorSocialType) {
  return this.find({ 'social.type': socialType })
})

export const CreatorModel = models.Creator as CreatorStatic || model<CreatorType, CreatorStatic>('Creator', CreatorSchema)
