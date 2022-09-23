import {TextInputProps} from 'react-native'
import styled from 'styled-components/native'

import React, {FC} from 'react'
import {Spinner} from '../StyledComponents/Spinner'

interface ISearchInput extends TextInputProps {
  loading?: boolean
  label: string
}

const SearchInput: FC<ISearchInput> = ({loading = false, label, ...props}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Input {...props} />
      {loading && <Spinner top={10} left={70} />}
    </Container>
  )
}

export default SearchInput

const Input = styled.TextInput`
  font-size: 20px;
  margin: 5px 0;
  padding: 5px 0;
  border-bottom-width: 1px;
  border-bottom-color: #8b979f;
`
const Label = styled.Text`
  font-size: 16px;
  font-weight: bold;
`
const Container = styled.View`
  margin: 15px 0;
`
