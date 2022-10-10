import React, {FC} from 'react'
import {Swipeable} from 'react-native-gesture-handler'
import styled from 'styled-components/native'
import PatientItem from '../components/PatientItem'
import {Title} from '../components/StyledComponents/Text'
import SwipeableItem from '../components/SwipeableItem'
import SwipeableSettings from '../components/SwipeableSettings'
import {useActionUpdate} from '../hooks/useAction'
import {useDeletePatient, useSearchPatient} from '../http/query/patient'
import {IUser} from '../types/user'

interface IPatientsSearchResult {
  search: string
}

const PatientsSearchResult: FC<IPatientsSearchResult> = ({search}) => {
  const patients = useSearchPatient(search)
  const removePatient = useDeletePatient()
  const {setVisiblePatient, setPatient} = useActionUpdate()
  const refSwip: Swipeable[] = []

  const closeAllSwipeable = () =>
    setTimeout(() => {
      refSwip.forEach(item => item.close())
    }, 100)

  const closeSwipeable = (index: number) => {
    refSwip.forEach((item, ind) => {
      if (ind !== index) item.close()
    })
  }

  const update = (item: IUser) => {
    setPatient(item)
    setVisiblePatient()
    closeAllSwipeable()
  }

  const renderLeftAction = (item: IUser) => (
    <SwipeableSettings
      remove={() => removePatient.mutate({_id: item._id})}
      update={() => update(item)}
    />
  )

  return (
    <ScrollContainer>
      {!patients.isSuccess ? (
        <Title>Ошибка сервера</Title>
      ) : patients.data.length === 0 ? (
        <Title>Ничего не найдено</Title>
      ) : (
        patients.data.map((item, index) => (
          <SwipeableItem
            key={item._id}
            ref={ref => {
              if (ref) refSwip[index] = ref
            }}
            onOpen={() => closeSwipeable(index)}
            renderLeftAction={() => renderLeftAction(item)}
          >
            <PatientItem {...item} />
          </SwipeableItem>
        ))
      )}
    </ScrollContainer>
  )
}

export default PatientsSearchResult

const ScrollContainer = styled.ScrollView`
  margin-bottom: 200px;
`
