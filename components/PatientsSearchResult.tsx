import React, {FC} from 'react'
import styled from 'styled-components/native'
import PatientItem from '../components/PatientItem'
import {Title} from '../components/StyledComponents/Text'
import SwipeableItem from '../components/SwipeableItem'
import SwipeableSettings from '../components/SwipeableSettings'
import {useDeletePatient, useSearchPatient} from '../http/query/patient'

interface IPatientsSearchResult {
  search: string
}

const PatientsSearchResult: FC<IPatientsSearchResult> = ({search}) => {
  const patients = useSearchPatient(search)
  const removePatient = useDeletePatient()

  return (
    <ScrollContainer>
      {!patients.isSuccess ? (
        <Title>Ошибка сервера</Title>
      ) : patients.data.length === 0 ? (
        <Title>Ничего не найдено</Title>
      ) : (
        patients.data.map(item => (
          <SwipeableItem
            key={item._id}
            renderLeftAction={() => (
              <SwipeableSettings
                remove={() => removePatient.mutate({_id: item._id})}
              />
            )}
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
