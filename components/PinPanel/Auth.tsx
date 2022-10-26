import React, {FC, useEffect, useState} from 'react'
import styled from 'styled-components/native'
import {Container} from '../StyledComponents/Container'
import EnterPin from './EnterPin'
import NumberPanel from './NumberPanel'

interface IAuth {
  func: (pin: string) => void
  pinLength?: 3 | 4 | 5 | 6
}

const Auth: FC<IAuth> = ({func, pinLength = 6}) => {
  const [pin, setPin] = useState('')

  const enterPin = (number: string) => () => {
    if (pin.length < pinLength && number !== 'del' && number !== 'C')
      setPin(state => state + number)
    if (number === 'del')
      setPin(state => {
        const arr = state.split('')
        arr.pop()
        return arr.join('')
      })
    if (number === 'C') setPin('')
  }

  useEffect(() => {
    if (pin.length === pinLength) func(pin)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pin])

  return (
    <ContainerCenter>
      <AuthContainer>
        <EnterPin activeLength={pin.length} pinLength={pinLength} />
        <NumberPanel setPin={enterPin} />
      </AuthContainer>
    </ContainerCenter>
  )
}

export default Auth

const ContainerCenter = styled(Container)`
  justify-content: center;
  align-items: center;
`
const AuthContainer = styled.View`
  width: 300px;
  padding: 5px;
`
