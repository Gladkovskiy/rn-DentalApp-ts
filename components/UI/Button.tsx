import React, {FC} from 'react'
import {ButtonProps} from 'react-native'
import styled from 'styled-components/native'
import {Spinner} from '../StyledComponents/Spinner'
import {lighten} from 'polished'

interface IButton {
  title: string
  bg?: string
  disabled?: boolean
  onPress: () => void
  loading?: boolean
}

const Button: FC<IButton> = ({
  title,
  bg = '#2a86ff',
  onPress,
  disabled = false,
  loading = false,
}) => {
  return (
    <Btn bg={bg} onPress={onPress} disabled={disabled}>
      <BtnText>{title}</BtnText>
      {loading && <Spinner top={50} left={80} />}
    </Btn>
  )
}

export default Button

interface IBtn extends ButtonProps {
  bg: string
}
const Btn = styled.TouchableOpacity<IBtn>`
  padding: 10px;
  border-radius: 30px;

  background-color: ${({bg, disabled}) => (!disabled ? bg : lighten(0.2, bg))};
  align-items: center;
  justify-content: center;
  height: 45px;
  margin: 5px;
`

const BtnText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: white;
  text-transform: uppercase;
`
