import { CreatorModel } from '@/models'
import { apiHandlerWithDB } from '@/utils'

const creatorIndexController = {
  get: async () => CreatorModel.findActives(true),
}

export default apiHandlerWithDB(creatorIndexController)
