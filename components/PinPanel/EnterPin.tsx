import React, {FC, useMemo} from 'react'
import styled from 'styled-components/native'

interface IEnterPin {
  activeLength: number
  pinLength: number
  error?: boolean
}

const EnterPin: FC<IEnterPin> = ({pinLength, activeLength, error = false}) => {
  const arrPin = useMemo(() => Array(pinLength).fill(''), [pinLength])

  return (
    <>
      {!error ? (
        <TitleText>Введите PIN</TitleText>
      ) : (
        <ErrorText>Неправильный PIN</ErrorText>
      )}
      <ContainerRow>
        {arrPin.map((_, index) => (
          <CircleContainer active={index < activeLength} key={index}>
            <Circle active={index < activeLength} />
          </CircleContainer>
        ))}
      </ContainerRow>
    </>
  )
}

export default EnterPin

const ContainerRow = styled.View`
  flex-direction: row;
  margin-bottom: 30px;
`

interface ICircleContainer {
  active?: boolean
}
const CircleContainer = styled.View<ICircleContainer>`
  padding: 10px;
  margin: 4px;
  border-bottom-color: ${props => (props.active ? '#1694ce' : '#ebf1f3')};
  border-bottom-width: 2px;
`

interface ICircle {
  active?: boolean
}
const Circle = styled.View<ICircle>`
  background-color: ${props => (props.active ? '#1694ce' : '#71bee2')};
  width: 20px;
  height: 20px;
  border-radius: 10px;
`
const TitleText = styled.Text`
  text-align: center;
  font-size: 30px;
  color: #71bee2;
  margin-bottom: 10px;
`
const ErrorText = styled(TitleText)`
  color: #e25656;
`
