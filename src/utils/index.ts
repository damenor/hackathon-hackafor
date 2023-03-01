export * from './fetcher'
export * from './moongose'
export * from './nextjs'
export * from './tmi'
export * from './validations'

type GetRandomIntArgs = { min?: number, max: number }
export const getRandomInt = ({ max, min = 0 }: GetRandomIntArgs) =>  Math.floor(Math.random() * (max - min) + min)
