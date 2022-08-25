import React, {FC} from 'react'
import styled from 'styled-components/native'
import {SectionList} from 'react-native'
import ListItem from '../components/ListItem'
import {AntDesign} from '@expo/vector-icons'
import {useGetAppointment} from '../http/query/appointment'
import {IDateInfo} from '../types/user'

const HomeScreen: FC = () => {
  const apointments = useGetAppointment()

  if (apointments.isLoading) return null

  return (
    <>
      <SectionList
        style={{paddingHorizontal: 20}}
        sections={apointments.data || ([] as IDateInfo[])}
        keyExtractor={(item, index) => item.time + index}
        renderItem={({item}) => <ListItem usersInfo={item} />}
        renderSectionHeader={({section: {title}}) => (
          <GroupTitle>{title}</GroupTitle>
        )}
      />
      <PlusButton>
        <AntDesign name="pluscircle" size={50} color="#4294ff" />
      </PlusButton>
    </>
  )
}

export default HomeScreen

const GroupTitle = styled.Text`
  font-size: 22px;
  font-weight: 800;
`
const PlusButton = styled.TouchableOpacity`
  position: absolute;
  top: 85%;
  left: 83%;
`
