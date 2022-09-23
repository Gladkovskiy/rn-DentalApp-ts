import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import PatientSettingsScreen from '../pages/PatientSettingsScreen'
import ServiceSettingsScreen from '../pages/ServiceSettingsScreen'

import {AntDesign} from '@expo/vector-icons'
import {FontAwesome} from '@expo/vector-icons'

export type TabParamList = {
  patientSettings: undefined
  serviceSettings: undefined
}

const Tab = createBottomTabNavigator<TabParamList>()

export const TabNavigation = () => (
  <Tab.Navigator screenOptions={{headerShown: false}}>
    <Tab.Screen
      name="patientSettings"
      component={PatientSettingsScreen}
      options={{
        title: 'Пациент',
        tabBarIcon: ({size, color}) => (
          <AntDesign name="user" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="serviceSettings"
      component={ServiceSettingsScreen}
      options={{
        title: 'Прайс-лист',
        tabBarIcon: ({size, color}) => (
          <FontAwesome name="list-alt" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
)
