import { ErrorProps } from 'next/error'

function Error({ statusCode, error }: any) {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'
      }
      { error }
    </p>
  )
}

Error.getInitialProps = ({ res, error }: any) => {
  const statusCode = res ? res.statusCode : error ? error.statusCode : 404
  return { statusCode, error }
}

export default Error