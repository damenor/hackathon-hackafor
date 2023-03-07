import type { GetServerSidePropsContext, NextPage } from 'next'

import { HomeCreators, AppLayout, HomeInLive } from '@/components'
import { fetcher } from '@/utils'
import { API_URL } from '@/services'

type HomePageProps = {
  creators: any[]
}

const HomePage: NextPage<HomePageProps> = ({ creators }) => {
  return (
    <AppLayout mainClassName="mainWithHeaderPadding">
      <HomeCreators creators={creators} />
      <HomeInLive />
    </AppLayout>
  )
}

export default HomePage

export const getCreatorsActives = async () => {
  const response = await fetcher<any[]>({ url: `${API_URL}/creator` })
  return response.data
}

export const getServerSideProps = async ({ res, ...props }: GetServerSidePropsContext) => {
  res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59')
  const creators = await getCreatorsActives()
  return { props: { creators: creators.sort(() => Math.random() > 0.5 ? -1 : 1) } }
}
