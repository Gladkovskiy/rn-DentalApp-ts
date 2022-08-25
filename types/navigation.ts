import {RouteProp} from '@react-navigation/native'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import {RootStackParamList} from '../components/AppRouter'

//для useNavigate type
export type NavigationProps = NativeStackNavigationProp<RootStackParamList>

//для useRoute экран PacientScreen
export type PacientScreenRouteProp = RouteProp<
  RootStackParamList,
  'PacientScreen'
>
