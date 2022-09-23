import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import styled from 'styled-components/native'
import AppRouter from './components/AppRouter'

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
      <GestureHandlerRootView style={{flex: 1}}>
        <Continer>
          <AppRouter />
        </Continer>
      </GestureHandlerRootView>
    </QueryClientProvider>
  )
}

const Continer = styled.View`
  flex: 1;
  margin-top: 50px;
`
