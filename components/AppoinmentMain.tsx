import React, {FC} from 'react'
import {SectionList} from 'react-native'
import styled from 'styled-components/native'
import ListItem from './ListItem'
import AddAppoinment from './Modal/AddAppoinment'
import UpdateApoinment from './Modal/UpdateApoinment'
import {useGetAppointment} from '../http/query/appointment'
import {IDateInfo} from '../types/user'

const AppoinmentMain: FC = () => {
  const apointments = useGetAppointment()

  if (apointments.isLoading) return null

  return (
    <>
      <SectionList
        style={{paddingHorizontal: 20}}
        sections={apointments?.data || ([] as IDateInfo[])}
        keyExtractor={(item, index) => item.time + index}
        renderItem={({item, section: {title}}) => (
          <ListItem usersInfo={item} date={title} />
        )}
        renderSectionHeader={({section: {title}}) => (
          <GroupTitle>{title}</GroupTitle>
        )}
      />
      <AddAppoinment />
      <UpdateApoinment />
    </>
  )
}

export default AppoinmentMain

const GroupTitle = styled.Text`
  font-size: 22px;
  font-weight: 800;
`
