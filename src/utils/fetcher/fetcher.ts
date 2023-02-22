type FetcherArgs = {
  url: string
  authorization?: string
  formData?: { [key: string]: any }
  headers?: { [key: string]: any }
  method?: 'DELETE' | 'GET' | 'POST' | 'PUT'
}

export async function fetcher<T>({ url, authorization, formData, headers, method = 'GET' }: FetcherArgs) {
  const response = await fetch(url, {
    body: JSON.stringify(formData),
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(authorization ? { Authorization: authorization } : {}),
      ...headers,
    },
  })
  return (await response.json()) as { status: boolean; statusCode: number; data: T; error?: any }
}
