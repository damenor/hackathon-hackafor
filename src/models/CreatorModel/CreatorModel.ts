import { getModelForClass, modelOptions, prop, ReturnModelType } from '@typegoose/typegoose'
import { models } from 'mongoose'

import { defaultExcludeDb, defaultSchemaOptions } from '@/utils'
import { CreatorSocial, CreatorSocialSchema, ECreatorSocialType } from './CreatorSocialSchema'

@modelOptions({
  schemaOptions: {
    ...defaultSchemaOptions,
    collection: 'creators',
  },
})
class CreatorSchema {
  @prop({ type: String, required: true })
  name: string

  @prop({ type: String, required: true })
  description: string

  @prop({ type: () => [String], required: true })
  categories: string[]

  @prop({ type: () => [CreatorSocialSchema] })
  social: CreatorSocial[]

  @prop({ type: Boolean, default: false })
  active: boolean

  @prop({ type: String, nullable: true })
  avatar?: string

  @prop({ type: String, nullable: true })
  youtubeChannelId?: string

  @prop({ type: String, nullable: true })
  web?: string

  static async findWithYTChannelId(this: CreatorModelType) {
    return this.find({ $nor: [{ youtubeChannelId: null }] }, defaultExcludeDb)
  }

  static async findActives(this: CreatorModelType, isDesactivated = false) {
    return this.find({ $nor: [{ isDesactivated }] }, defaultExcludeDb)
  }

  static async findWithTwitch(this: CreatorModelType) {
    return this.findWithSocial(ECreatorSocialType.Twitch)
  }

  static async findWithSocial(this: CreatorModelType, socialType: ECreatorSocialType) {
    return this.find({ 'social.type': socialType }, defaultExcludeDb)
  }
}

const CreatorModel = getModelForClass(CreatorSchema)
export type CreatorModelType = ReturnModelType<typeof CreatorSchema>

export type Creator = {
  categories: string[]
  description: string
  name: string
  social: CreatorSocial[]
  web?: string
  active: boolean
}

export default (models.CreatorModel as CreatorModelType) || CreatorModel
