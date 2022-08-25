import React, {FC} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from '../pages/HomeScreen'
import PacientScreen from '../pages/PacientScreen'
import {IUser} from '../types/user'

//параметры страниц описываются
export type RootStackParamList = {
  HomeScreen: undefined
  PacientScreen: {user: IUser}
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
          }}
        />
        <Stack.Screen
          name="PacientScreen"
          component={PacientScreen}
          options={{
            title: 'Карта пациента',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppRouter
