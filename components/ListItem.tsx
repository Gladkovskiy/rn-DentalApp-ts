import {useNavigation} from '@react-navigation/native'
import React, {FC, useRef} from 'react'
import {View} from 'react-native'
import styled from 'styled-components/native'
import {useActionUpdate} from '../hooks/useAction'
import {baseURLStatic} from '../http/api'
import {useDeleteAppointment} from '../http/query/appointment'
import {NavigationProps} from '../types/navigation'
import {IUserInfo} from '../types/user'
import {GreyText} from './StyledComponents/Text'
import SwipeableItem from './SwipeableItem'
import SwipeableSettings from './SwipeableSettings'
import {Swipeable} from 'react-native-gesture-handler'

interface IGroupItem {
  usersInfo: IUserInfo
  date: string
}

const ListItem: FC<IGroupItem> = ({
  usersInfo: {active = false, service, time, patient, _id, price, dentNumber},
  date,
}) => {
  const {navigate} = useNavigation<NavigationProps>()
  const deleteAppoinment = useDeleteAppointment()
  const {setApoinment, setVisibleApoinment} = useActionUpdate()
  const swipRef = useRef<Swipeable>(null)

  //если услугу удалили, а она есть в заказах
  let diagnos = 'Услуга удалена'
  if (service) diagnos = service.diagnos
  //если пациента удалили, а он есть в заказах
  let person = {
    avatar: '',
    fullname: 'Данные пациента удалены',
    phone: '',
    _id: '',
  }
  if (patient) person = {...patient}

  const update = ({_id, patient, service, time}: IUserInfo, date: string) => {
    const dateAndTime = `${date} ${time}`

    setApoinment({
      dentNumber,
      _id,
      patient,
      service,
      time: dateAndTime,
      price: service.price,
    })
    setVisibleApoinment()
  }

  const renderLeftAction = (_id: string) => (
    <SwipeableSettings
      remove={() => {
        deleteAppoinment.mutate({_id})
      }}
      update={() => {
        update({_id, patient, service, time, price, dentNumber}, date)
        swipRef.current?.close()
      }}
    />
  )

  return (
    <SwipeableItem renderLeftAction={() => renderLeftAction(_id)} ref={swipRef}>
      <GroupItem
        onPress={() =>
          navigate('PacientScreen', {
            patient: {...person},
          })
        }
      >
        <Avatar
          source={{
            uri: `${baseURLStatic}${person.avatar}`,
          }}
        />
        <View style={{flex: 1}}>
          <FullName>{person.fullname}</FullName>
          <GreyText>{diagnos}</GreyText>
        </View>
        <GroupDate active={active}>{time}</GroupDate>
      </GroupItem>
    </SwipeableItem>
  )
}

export default ListItem

interface IGroupItem {
  active?: boolean
}
export const GroupItem = styled.TouchableOpacity<IGroupItem>`
  padding: 20px 0;
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-color: #ccc2c2;
  background-color: ${({active}) => (active ? '#e7b4d0' : '#eaeff1')};
  /* background-color: #eaeff1; */
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
