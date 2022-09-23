import {useNavigation} from '@react-navigation/native'
import React, {FC} from 'react'
import {View} from 'react-native'
import styled from 'styled-components/native'
import {NavigationProps} from '../types/navigation'

import {IUserInfo} from '../types/user'
import {GreyText} from './StyledComponents/Text'
import SwipeableItem from './SwipeableItem'
import SwipeableSettings from './SwipeableSettings'

interface IGroupItem {
  usersInfo: IUserInfo
}

const ListItem: FC<IGroupItem> = ({
  usersInfo: {
    active = false,
    service: {diagnos},
    time,
    patient: {avatar, fullname, phone},
  },
}) => {
  const {navigate} = useNavigation<NavigationProps>()

  return (
    <SwipeableItem renderLeftAction={SwipeableSettings}>
      <GroupItem
        onPress={() =>
          navigate('PacientScreen', {patient: {avatar, fullname, phone}})
        }
      >
        <Avatar
          source={{
            uri: avatar,
          }}
        />
        <View style={{flex: 1}}>
          <FullName>{fullname}</FullName>
          <GreyText>{diagnos}</GreyText>
        </View>
        <GroupDate active={active}>{time}</GroupDate>
      </GroupItem>
    </SwipeableItem>
  )
}

export default ListItem

export const GroupItem = styled.TouchableOpacity`
  padding: 20px 0;
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-color: #ccc2c2;
  background-color: #eaeff1;
  border-radius: 10px;
  padding: 10px;
  margin: 5px 0;
`

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 15px;
`

export const FullName = styled.Text`
  font-size: 16px;
  font-weight: 800;
`

interface IGroupDate {
  active: boolean
}
const GroupDate = styled.Text<IGroupDate>`
  background: ${({active}) => (active ? '#4294ff' : '#e9f5ff')};
  border-radius: 18px;
  padding: 5px;
  font-weight: 800;
  color: ${({active}) => (active ? '#e9f5ff' : '#4294ff')};
  font-size: 14px;
`
