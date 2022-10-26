import React, {FC} from 'react'
import styled from 'styled-components/native'

interface INumberPanel {
  setPin: (number: string) => void
}

const NumberPanel: FC<INumberPanel> = ({setPin}) => {
  const arrNumber = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    'del',
    'C',
  ]
  return (
    <NumberContainer>
      {arrNumber.map((number, index) => (
        <NumberCircle key={index} onPress={setPin(number)}>
          <NumberText>{number}</NumberText>
        </NumberCircle>
      ))}
    </NumberContainer>
  )
}

export default NumberPanel

const NumberContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`
const NumberCircle = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 30px;
  background-color: #71bee2;
  margin: 10px 15px;
  justify-content: center;
  align-items: center;
`
const NumberText = styled.Text`
  font-size: 25px;
  color: white;
`
