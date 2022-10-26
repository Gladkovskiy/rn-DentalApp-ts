import React, {FC} from 'react'
import AppoinmentMain from '../components/AppoinmentMain'
import Auth from '../components/PinPanel/Auth'
import {useAppSelector} from '../hooks/useSelector'

const HomeScreen: FC = () => {
  const {isAuth} = useAppSelector(state => state.persistedAuthReducer)

  const pinEnter = (pin: string) => console.log(pin)

  return (
    <>{isAuth ? <AppoinmentMain /> : <Auth pinLength={6} func={pinEnter} />}</>
  )
}

export default HomeScreen
