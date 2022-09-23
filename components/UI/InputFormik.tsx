import React, {FC} from 'react'
import {TextInputProps} from 'react-native'
import styled from 'styled-components/native'

interface IInputFormik extends TextInputProps {
  error?: string
}

const InputFormik: FC<IInputFormik> = ({error, ...props}) => {
  return (
    <>
      <InputText {...props} />
      {error && <ErrorText>{error}</ErrorText>}
    </>
  )
}

export default InputFormik

const ErrorText = styled.Text`
  color: red;
  font-size: 16px;
`
const InputText = styled.TextInput`
  font-size: 20px;
  margin: 5px 0;
  padding: 5px 0;
  border-bottom-width: 1px;
  border-bottom-color: #8b979f;
`
