import styled from 'styled-components/native'
import AppRouter from './components/AppRouter'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'

const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
})

export default function App() {
  return (
    <QueryClientProvider client={client}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Continer>
        <AppRouter />
      </Continer>
    </QueryClientProvider>
  )
}

const Continer = styled.View`
  flex: 1;
  margin-top: 50px;
`
