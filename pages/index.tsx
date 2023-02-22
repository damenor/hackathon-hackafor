import type { GetServerSidePropsContext, NextPage } from 'next'

import { HomeHero, HomeCreators, AppLayout } from '@/components'
import { fetcher } from '@/utils'
import { CreatorModelType } from '@/models'

type HomePageProps = {
  creators: CreatorModelType
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

const API_URL = `${process.env.VERCEL_URL}/api`
export const getCreatorsActives = async () => {
  const response = await fetcher({ url: `${API_URL}/creator` })
  return response.data
}

export const getServerSideProps = async ({ res, req }: GetServerSidePropsContext) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  const creators = await getCreatorsActives()
  return { props: { creators } }
}
