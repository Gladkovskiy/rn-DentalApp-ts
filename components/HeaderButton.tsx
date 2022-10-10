import {Ionicons} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'
import React, {FC} from 'react'
import styled from 'styled-components/native'
import {NavigationProps} from '../types/navigation'
import {FlexCenter} from './StyledComponents/Container'

interface IHeaderButton {
  tintColor: string | undefined
}

const HeaderButton: FC<IHeaderButton> = ({tintColor}) => {
  const {navigate} = useNavigation<NavigationProps>()
  return (
    <FlexCenter>
      <OpacityButton
        onPress={() => navigate('Settings', {screen: 'patientSettings'})}
      >
        <Ionicons name="settings-sharp" size={35} color={tintColor} />
      </OpacityButton>
    </FlexCenter>
  )
}

export default HeaderButton

const OpacityButton = styled.TouchableOpacity``
