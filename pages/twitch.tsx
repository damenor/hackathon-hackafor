import { useState } from 'react'
import type { GetServerSidePropsContext, NextPage } from 'next'

import { AppLayout, TwitchList, TwitchVideo } from '@/components'
import { fetcher, getRandomInt, useTmi } from '@/utils'
import { API_URL } from '@/services'
import { CreatorTwitchType } from '@/types'

type TwitchPageProps = {
  creatorsOnline: CreatorTwitchType[]
  creatorsDisconnected: CreatorTwitchType[]
}

const TwitchPage: NextPage<TwitchPageProps> = ({ creatorsOnline, creatorsDisconnected }) => {
  const initialCreator = getRandomInt({ max: creatorsOnline.length })
  const [creator, setCreator] = useState(creatorsOnline[initialCreator])
  const creatorToList = creatorsOnline.filter(cre => cre._id !== creator._id)

  const onSelectCreator = async (newCreator: CreatorTwitchType) => {
    setCreator(newCreator)
  }

  return (
    <AppLayout subtitle="Directo en twitch">
      <div>
        {creatorsOnline.length > 0 ? (
          <>
            <TwitchVideo creator={creator} />
            <TwitchList creators={creatorToList} onSelect={onSelectCreator} />
          </>
        ) : (
          <h2>Ups! parece que no hay nadie online ahora mismo</h2>
        )}
      </div>
    </AppLayout>
  )
}

export default TwitchPage

export const getCreatorsWithTwitch = async () => {
  const response = await fetcher({ url: `${API_URL}/creator/twitch` })
  return response.data
}

export const getServerSideProps = async ({ res }: GetServerSidePropsContext) => {
  res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59')
  const { online, disconnected } = (await getCreatorsWithTwitch()) as any
  return { props: { creatorsOnline: online, creatorsDisconnected: disconnected } }
}
