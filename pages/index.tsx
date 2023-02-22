import type { GetServerSidePropsContext, NextPage } from 'next'

import { HomeHero, HomeCreators, AppLayout } from '@/components'
import { fetcher } from '@/utils'
import { API_URL } from '@/services'

type HomePageProps = {
  creators: any[]
}

const HomePage: NextPage<HomePageProps> = ({ creators }) => {
  return (
    <AppLayout>
      <HomeHero />
      <HomeCreators creators={creators} />
    </AppLayout>
  )
}

export default HomePage

export const getCreatorsActives = async () => {
  const response = await fetcher({ url: `${API_URL}/creator` })
  return response.data
}

export const getServerSideProps = async ({ res, ...props }: GetServerSidePropsContext) => {
  res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59')
  const creators = await getCreatorsActives()
  return { props: { creators } }
}
