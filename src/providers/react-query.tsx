import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import React from 'react'

function ReactQueryProvider({children}: React.PropsWithChildren) {
  const [client] = React.useState(
    new QueryClient({
      defaultOptions: {queries: {staleTime: 5000, refetchOnWindowFocus: false}},
    }),
  )

  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default ReactQueryProvider
