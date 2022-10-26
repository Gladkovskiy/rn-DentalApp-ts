import {configureStore} from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import updateApi from './reducers/updateApi'
import authReducer from './reducers/asyncStorageReducer'

//привязуем к asyncStorage (можно использовать localStorage)
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedAuthReducer = persistReducer(persistConfig, authReducer)

const rootReducer = {
  updateApi,
  persistedAuthReducer,
}

//middleware для срощения reduxToolKit с redux-persister
export const store = configureStore({
  reducer: {...rootReducer},
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
