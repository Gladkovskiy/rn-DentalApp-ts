import React, {FC} from 'react'
import styled from 'styled-components/native'

interface IButton {
  title: string
  bg?: string
  onPress: () => void
}

const Button: FC<IButton> = ({title, bg = '#2a86ff', onPress}) => {
  return (
    <Btn bg={bg} onPress={onPress}>
      <BtnText>{title}</BtnText>
    </Btn>
  )
}

export default Button

interface IBtn {
  bg: string
}
const Btn = styled.TouchableOpacity<IBtn>`
  flex: 1;
  border-radius: 30px;
  background-color: ${({bg}) => bg};
  align-items: center;
  justify-content: center;
  height: 45px;
  margin: 5px;
`

const BtnText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: white;
`
