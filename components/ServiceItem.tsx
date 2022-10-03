import React, {FC} from 'react'
import styled from 'styled-components/native'
import {IService} from '../types/user'
import {FullName, GroupItem} from './ListItem'
import {GreyText} from './StyledComponents/Text'

const ServiceItem: FC<IService> = ({diagnos, price}) => {
  return (
    <GroupItem>
      <FlexGrow2>
        <FullName>{diagnos}</FullName>
      </FlexGrow2>

      <GreyText>{price} грн.</GreyText>
    </GroupItem>
  )
}

export default ServiceItem

const FlexGrow2 = styled.View`
  flex-grow: 2;
`
