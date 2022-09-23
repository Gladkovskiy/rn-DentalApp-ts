import {ActivityIndicatorProps} from 'react-native'
import styled from 'styled-components/native'

interface ISpinner extends ActivityIndicatorProps {
  top: number
  left: number
}

export const Spinner = styled.ActivityIndicator.attrs<ISpinner>(props => ({
  color: '#0000ff',
  size: 'small',
}))<ISpinner>`
  position: absolute;
  top: ${props => props.top}%;
  left: ${props => props.left}%;
`
