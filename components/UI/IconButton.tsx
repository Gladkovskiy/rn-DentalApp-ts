import React, {FC} from 'react'
import styled from 'styled-components/native'
import {Ionicons} from '@expo/vector-icons'

interface IIconButton {
  onPress: () => void
}

const IconButton: FC<IIconButton> = ({onPress}) => {
  return (
    <Button onPress={onPress}>
      <Ionicons name="call-sharp" size={20} color="white" />
    </Button>
  )
}

export default IconButton

const Button = styled.TouchableOpacity`
  border-radius: 30px;
  background-color: #84d269;
  width: 45px;
  height: 45px;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`
