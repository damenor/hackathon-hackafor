import { useState } from 'react'
import type { GetServerSidePropsContext, NextPage } from 'next'

import { AppLayout, CreatorCardTwitch, CreatorCardTwitchList } from '@/components'
import { CreatorModel } from '@/models'
import { fetcher } from '@/utils'

type TwitchPageProps = {
  creators: any[]
  users: any[]
}

const TwitchPage: NextPage<TwitchPageProps> = ({ creators }) => {

  const [creator, setCreator] = useState(creators[0])
  
  return (
    <AppLayout subtitle="Directo en twitch">
      { creators.length > 0 ? (
        <>
          <CreatorCardTwitch creator={creator} />
          <CreatorCardTwitchList creators={creators} onSelect={setCreator} />
        </>
      ) : (
        <h2>Ups! parece que no hay nadie online ahora mismo</h2>
      ) }
    </AppLayout>
  )
}

export default TwitchPage

type GetServerSideDataArgs = {
  serverSideProps: GetServerSidePropsContext
  promises: Promise<any>[]
}

const getServerSideData = async ({ serverSideProps, promises }: GetServerSideDataArgs) => {
  serverSideProps.res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59')
  const promisesResponse = await Promise.all(promises)
  return promisesResponse.map((data: any) => JSON.parse(JSON.stringify(data)))
}

const checkIsLive = async (creator: any): Promise<{ creator: any; online: boolean; rawUptime: string; twitchUserName: string }> => {
  const twitchUserName = creator.social.find((red: any) => red.type === 'twitch').userName
  const response = (await fetcher({ url: `https://midudev-apis.midudev.workers.dev/uptime/${twitchUserName}` })) as any
  return { ...creator, twitchUserName, ...(response.online ? { ...response } : { online: false }) }
}

export const getServerSideProps = async (serverSideProps: GetServerSidePropsContext) => {
  const [creators] = await getServerSideData({
    serverSideProps,
    promises: [CreatorModel.findWithTwitch()],
  })
  creators.push({
    categories: ['frontend', 'backend', 'database'],
    description: 'creator.description',
    name: 'LecheroFett',
    social: [{ type: 'twitch', userName: 'LecheroFett' }],
  })
  creators.push({
    categories: ['frontend', 'backend', 'cloud', 'database'],
    description: 'creator.description',
    name: 'Matias Baldanza',
    social: [{ type: 'twitch', userName: 'matiasbaldanza' }],
  })
  const creatorsIsLive = await Promise.all(creators.map(checkIsLive))
  const creatorsConnected = creatorsIsLive.filter(creator => creator.online)
  return { props: { creators: [...creatorsConnected, ...creatorsConnected, ...creatorsConnected, ...creatorsConnected, ] } }
}
