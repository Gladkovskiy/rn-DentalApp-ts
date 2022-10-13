import React, {FC} from 'react'
import {Avatar, FullName, GroupItem} from './ListItem'
import {FlexColumn} from './StyledComponents/Container'
import {GreyText} from './StyledComponents/Text'

interface IPatientItem {
  avatar: string
  fullname: string
  phone: string
  active?: boolean
  onPress?: () => void
}

const PatientItem: FC<IPatientItem> = ({
  avatar,
  fullname,
  phone,
  active = false,
  onPress = null,
}) => {
  return (
    <GroupItem active={active} onPress={onPress}>
      <Avatar
        source={{
          uri: avatar,
        }}
      />
      <FlexColumn>
        <FullName>{fullname}</FullName>
        <GreyText>{phone}</GreyText>
      </FlexColumn>
    </GroupItem>
  )
}

export default PatientItem
