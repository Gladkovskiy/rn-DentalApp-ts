import {useNavigation} from '@react-navigation/native'
import React, {FC} from 'react'
import {View} from 'react-native'
import styled from 'styled-components/native'
import {NavigationProps} from '../types/navigation'

import {IUserInfo} from '../types/user'
import Diagnos from '../components/StyledComponents/GrayText'

interface IGroupItem {
  usersInfo: IUserInfo
}

const ListItem: FC<IGroupItem> = ({
  usersInfo: {
    active = false,
    diagnos,
    time,
    user: {avatar, fullname, phone},
  },
}) => {
  const {navigate} = useNavigation<NavigationProps>()

  return (
    <GroupItem
      onPress={() =>
        navigate('PacientScreen', {user: {avatar, fullname, phone}})
      }
    >
      <Avatar
        source={{
          uri: avatar,
        }}
      />
      <View style={{flex: 1}}>
        <FullName>{fullname}</FullName>
        <Diagnos>{diagnos}</Diagnos>
      </View>
      <GroupDate active={active}>{time}</GroupDate>
    </GroupItem>
  )
}

export default ListItem

const GroupItem = styled.TouchableOpacity`
  padding: 20px 0;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #f3f3f3;
`

const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 15px;
`

const FullName = styled.Text`
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
