import { GetServerSidePropsContext } from 'next'

type GetServerSideDataArgs = {
  serverSideProps: GetServerSidePropsContext
  promises: Promise<any>[]
}

export const getServerSideData = async ({ serverSideProps, promises }: GetServerSideDataArgs) => {
  serverSideProps.res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59')
  const promisesResponse = await Promise.all(promises)
  return promisesResponse.map((data: any) => JSON.parse(JSON.stringify(data)))
}

