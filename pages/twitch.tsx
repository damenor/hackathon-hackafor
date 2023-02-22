import { useState } from 'react'
import type { GetServerSidePropsContext, NextPage } from 'next'

import { AppLayout, CreatorCardTwitch, CreatorCardTwitchList } from '@/components'
import { fetcher } from '@/utils'
import { API_URL } from '@/services'

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

export const getCreatorsActives = async () => {
  const response = await fetcher({ url: `${API_URL}/creator/twitch` })
  return response.data
}

export const getServerSideProps = async ({ res }: GetServerSidePropsContext) => {
  res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59')
  const creators = await getCreatorsActives()
  return { props: { creators } }
}
