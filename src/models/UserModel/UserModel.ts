import { getModelForClass, modelOptions, prop, ReturnModelType } from '@typegoose/typegoose'
import { models } from 'mongoose'

import { defaultSchemaOptions, regEmail } from '@/utils'

export enum EUserRole {
  ADMIN = 'admin',
  COLLABORATOR = 'collaborator',
  USER = 'user',
}

@modelOptions({ 
  schemaOptions: { 
    ...defaultSchemaOptions,
    collection: 'users', 
  } 
})
class UserSchema {
  @prop({ type: String, required: true })
  name: string

  @prop({ type: String, required: true, unique: true, lowercase: true, trim: true, match: regEmail })
  email: string

  @prop({ type: String, required: true, lowercase: true })
  avatar: string

  @prop({ type: String, required: true, minlength: 8 })
  password: string

  @prop({ type: Boolean, default: true })
  active: boolean

  @prop({ enum: EUserRole, default: EUserRole.USER })
  role: EUserRole

  static async findByEmail(this: ReturnModelType<typeof UserSchema>, email: string) {
    return this.find({ email })
  }

}

const UserModel = getModelForClass(UserSchema)

export default (models.UserModel as typeof UserModel) || UserModel
