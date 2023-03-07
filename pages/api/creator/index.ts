import { CreatorModel } from '@/models'
import { apiHandlerWithDB } from '@/utils'

export default apiHandlerWithDB({
  get: async () => CreatorModel.findActives(true),
})
