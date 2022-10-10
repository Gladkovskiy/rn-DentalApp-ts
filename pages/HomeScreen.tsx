import React, {FC} from 'react'
import {SectionList} from 'react-native'
import styled from 'styled-components/native'
import ListItem from '../components/ListItem'
import AddAppoinment from '../components/Modal/AddAppoinment'
import {useGetAppointment} from '../http/query/appointment'
import {IDateInfo} from '../types/user'

const HomeScreen: FC = () => {
  const apointments = useGetAppointment()

  if (apointments.isLoading) return null

  return (
    <>
      <SectionList
        style={{paddingHorizontal: 20}}
        sections={apointments?.data || ([] as IDateInfo[])}
        keyExtractor={(item, index) => item.time + index}
        renderItem={({item}) => <ListItem usersInfo={item} />}
        renderSectionHeader={({section: {title}}) => (
          <GroupTitle>{title}</GroupTitle>
        )}
      />
      <AddAppoinment />
    </>
  )
}

export default HomeScreen

const GroupTitle = styled.Text`
  font-size: 22px;
  font-weight: 800;
`
