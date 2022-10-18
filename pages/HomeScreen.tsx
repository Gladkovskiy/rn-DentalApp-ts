import React, {FC} from 'react'
import {SectionList} from 'react-native'
import styled from 'styled-components/native'
import ListItem from '../components/ListItem'
import AddAppoinment from '../components/Modal/AddAppoinment'
import UpdateApoinment from '../components/Modal/UpdateApoinment'
import {useGetAppointment} from '../http/query/appointment'
import {IDateInfo} from '../types/user'

const HomeScreen: FC = () => {
  const apointments = useGetAppointment()
  console.log(apointments.data)
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

export default HomeScreen

const GroupTitle = styled.Text`
  font-size: 22px;
  font-weight: 800;
`
