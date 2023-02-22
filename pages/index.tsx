import { useEffect } from 'react'
import type { GetServerSidePropsContext, NextPage } from 'next'

import { HomeHero, HomeCreators, AppLayout } from '@/components'
import { fetcher, getServerSideData } from '@/utils'
import { CreatorModel, CreatorModelType } from '@/models'

type HomePageProps = {
  creators: CreatorModelType
}

const getData = async () => {
  const response = await fetcher({ url: `https://midudev-apis.midudev.workers.dev/uptime/matiasbaldanza` })
  return response
}

const HomePage: NextPage<HomePageProps> = ({ creators }) => {

  useEffect(() => {
    getData().then(console.log).catch(console.error)
  }, [])

  return (
    <AppLayout>
      <HomeHero />
      <HomeCreators creators={creators} />
    </AppLayout>
  )
}

export default HomePage

const API_URL = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api`
export const getCreatorsActives = async () => {
  try {
    const response = await fetcher({ url: `${API_URL}/creator` })
    return response.data
  } catch (error) {
    console.error({ error })
  }
}

export const getServerSideProps = async ({ res, ...props }: GetServerSidePropsContext) => {
  res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59')

  // const [creators] = await getServerSideData({
  //   serverSideProps: { res, ...props },
  //   promises: [CreatorModel.findActives()],
  // })

  // const creators = await getCreatorsActives()
  const creators = await CreatorModel.findActives()
  return { props: { creators: creators.map((data: any) => JSON.parse(JSON.stringify(data))) } }
}
