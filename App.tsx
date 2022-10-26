import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import styled from 'styled-components/native'
import AppRouter from './components/AppRouter'
import {persistor, store} from './store/index'

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
    <Provider store={store}>
      {/* для preloading persist redux */}
      <PersistGate persistor={persistor} loading={null}>
        <QueryClientProvider client={client}>
          <ReactQueryDevtools initialIsOpen={false} />
          <GestureHandlerRootView style={{flex: 1}}>
            <Continer>
              <AppRouter />
            </Continer>
          </GestureHandlerRootView>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  )
}

const Continer = styled.View`
  flex: 1;
  margin-top: 50px;
`
