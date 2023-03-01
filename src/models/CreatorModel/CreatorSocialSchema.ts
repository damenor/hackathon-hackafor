import { Schema } from 'mongoose'

import { CreatorSocial } from '@/types'

export const CreatorSocialSchema = new Schema<CreatorSocial>({
  type: { type: String, required: true },
  userName: { type: String, required: true },
})
