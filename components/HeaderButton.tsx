import {Ionicons} from '@expo/vector-icons'
import {MaterialIcons} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'
import React, {FC} from 'react'
import styled from 'styled-components/native'
import {useActionAuth} from '../hooks/useAction'
import {NavigationProps} from '../types/navigation'
import {FlexCenter} from './StyledComponents/Container'

interface IHeaderButton {
  tintColor: string | undefined
}

const HeaderButton: FC<IHeaderButton> = ({tintColor}) => {
  const {navigate} = useNavigation<NavigationProps>()
  const {auth, setToken, setUserInfo} = useActionAuth()

  const goSettings = () => navigate('Settings', {screen: 'patientSettings'})

  const blockApp = () => {
    setToken('')
    setUserInfo({_id: '', login: '', role: ''})
    auth(false)
  }
  return (
    <FlexCenter>
      <OpacityButton onPress={blockApp}>
        <MaterialIcons name="app-blocking" size={35} color={tintColor} />
      </OpacityButton>

      <OpacityButton onPress={goSettings}>
        <Ionicons name="settings-sharp" size={35} color={tintColor} />
      </OpacityButton>
    </FlexCenter>
  )
}

export default HeaderButton

const OpacityButton = styled.TouchableOpacity`
  margin-left: 10px;
`
