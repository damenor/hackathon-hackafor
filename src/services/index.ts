export const API_URL =
  process.env.ENV === 'development'
    ? `http://${process.env.NEXT_PUBLIC_VERCEL_URL}/api`
    : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api`
