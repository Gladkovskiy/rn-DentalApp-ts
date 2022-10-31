import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React, {FC} from 'react'
import {useAppSelector} from '../hooks/useSelector'
import AddAppoinmentScreen from '../pages/AddAppoinmentScreen'
import HomeScreen from '../pages/HomeScreen'
import PacientScreen from '../pages/PacientScreen'
import {IUser} from '../types/user'
import HeaderButton from './HeaderButton'
import {TabNavigation, TabParamList} from './SettingsTabRouter'

//параметры страниц описываются
export type RootStackParamList = {
  HomeScreen: undefined
  PacientScreen: {patient: IUser}
  Settings: NavigatorScreenParams<TabParamList>
  AddAppoinment: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const AppRouter: FC = () => {
  const {isAuth} = useAppSelector(state => state.persistedAuthReducer)
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerTintColor: '#2AB6FF',
          headerTitleAlign: 'left',
          headerStyle: {backgroundColor: 'white'},
        }}
      >
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: isAuth ? 'Приёмы' : 'Авторизация',
            headerRight: ({tintColor}) =>
              isAuth && <HeaderButton tintColor={tintColor} />,
          }}
        />
        <Stack.Screen
          name="PacientScreen"
          component={PacientScreen}
          options={{
            title: 'Карта пациента',
          }}
        />
        <Stack.Screen
          name="Settings"
          component={TabNavigation}
          options={{
            title: 'Настройки',
          }}
        />
        <Stack.Screen
          name="AddAppoinment"
          component={AddAppoinmentScreen}
          options={{
            title: 'Добавить приём',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppRouter
