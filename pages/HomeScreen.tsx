import React, {FC} from 'react'
import AppoinmentMain from '../components/AppoinmentMain'
import Auth from '../components/PinPanel/Auth'
import {useAppSelector} from '../hooks/useSelector'
import {useLogin} from '../http/query/login'

const HomeScreen: FC = () => {
  const {isAuth} = useAppSelector(state => state.persistedAuthReducer)
  const login = useLogin()

  const pinEnter = (pin: string) => {
    login.mutate({password: pin})
  }

  return (
    <>
      {isAuth ? (
        <AppoinmentMain />
      ) : (
        <Auth
          pinLength={6}
          func={pinEnter}
          isError={login.isError}
          isLoading={login.isLoading}
        />
      )}
    </>
  )
}

export default HomeScreen
