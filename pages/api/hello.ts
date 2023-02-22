import { apiHandler } from '@damenor/tools-nextjs'

import { CreatorModel } from '@/models'
import { dbConnect } from '@/utils'
import { DATA_CREATORS } from '@/data'


async function get() {
  await dbConnect()

  const creatorsToDB = DATA_CREATORS.map(creator => ({
    categories: creator.categories,
    description: creator.description,
    name: creator.name,
    social: creator.social.filter(({id}) => id !== 'blog').filter(({id}) => id !== 'discord').map(s => {
      const userNameSplitted = s.url.split('/')
      const userName = userNameSplitted[userNameSplitted.length - 1]
      return { type: s.id, userName }
    }),
    web: creator.social.filter(({id}) => id === 'blog')[0]?.url,
    active: true,
  }))
  return creatorsToDB

  // const creator = CreatorModel.create({
  //   categories: ['frontend'],
  //   description: 'Programo cosas y las vemos en directo',
  //   name: 'David Huertas',
  //   social: [
  //     { type: 'github', userName: 'ikurotime' },
  //     { type: 'twitch', userName: 'ikurotime' },
  //   ],
  //   active: true,
  // })

  // return creator

  // const creatorsToDB = DATA_CREATORS.map(creator => ({
  //   categories: creator.categories,
  //   description: creator.description,
  //   name: creator.name,
  //   social: creator.social.filter(({id}) => id !== 'blog').filter(({id}) => id !== 'discord').map(s => {
  //     const userNameSplitted = s.url.split('/')
  //     const userName = userNameSplitted[userNameSplitted.length - 1]
  //     return { type: s.id, userName }
  //   }),
  //   web: creator.social.filter(({id}) => id === 'blog')[0]?.url,
  //   active: true,
  // }))

  // const creators: any = []
  // creatorsToDB.map(async data => {
  //   const creator = await CreatorModel.create(data)
  //   creators.push(creator)
  // })

  // const creators = await CreatorModel.find()

  // creators.map(async creator => {
  //   await CreatorModel.findByIdAndDelete({ _id: creator._id })
  // })

  // const user = await UserModel.create({ 
  //   name: 'PEPE', 
  //   email: 'pepe3@email.com', 
  //   avatar: 'asdf', 
  //   password: '12345678', 
  //   role: EUserRole.ADMIN
  // })
  // const users = await UserModel.find({}, { __v: 0, password: 0 })
  // const usersDeleted: any = []
  // users.map(async user => {
  //   const userDeleted = await UserModel.remove({ _id: user._id })
  //   usersDeleted.push(userDeleted)
  // })

  // return await CreatorModel.findActives()

  // return []
}

export default apiHandler({ get })
