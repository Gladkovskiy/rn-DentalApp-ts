import React, {FC} from 'react'
import {
  NavigationContainer,
  NavigatorScreenParams,
  useNavigation,
} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from '../pages/HomeScreen'
import PacientScreen from '../pages/PacientScreen'
import {IUser} from '../types/user'
import {TabNavigation, TabParamList} from './SettingsTabRouter'
import HeaderButton from './HeaderButton'
import AddAppoinmentScreen from '../pages/AddAppoinmentScreen'

//параметры страниц описываются
export type RootStackParamList = {
  HomeScreen: undefined
  PacientScreen: {patient: IUser}
  Settings: NavigatorScreenParams<TabParamList>
  AddAppoinment: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const AppRouter: FC = () => {
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
            title: 'Пациенты',
            headerRight: ({tintColor}) => (
              <HeaderButton tintColor={tintColor} />
            ),
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
