import React, {FC, useState} from 'react'

import styled from 'styled-components/native'
import AddPatient from '../components/Modal/AddPatient'
import PatientItem from '../components/PatientItem'
import {Title} from '../components/StyledComponents/Text'
import SwipeableItem from '../components/SwipeableItem'
import SearchInput from '../components/UI/SearchInput'
import {useSearchPatient} from '../http/query/patient'
import SwipeableSettings from '../components/SwipeableSettings'
import DeleteAllPatients from '../components/DeleteAllPatients'

const PatientSettingsScreen: FC = () => {
  const [search, setSearch] = useState<string>('')
  const patients = useSearchPatient(search)

  const searchPatient = (text: string) => setSearch(text)

  return (
    <Container>
      <AddPatient />
      <DeleteAllPatients />
      <SearchInput
        placeholder="Введите фамилию пациента"
        value={search}
        onChangeText={searchPatient}
        loading={patients.isLoading}
        label={'Изменить или удалить данные пациента'}
      />

      {!patients.isSuccess ? (
        <Title>Ошибка сервера</Title>
      ) : patients.data.length === 0 ? (
        <Title>Ничего не найдено</Title>
      ) : (
        patients.data.map(item => (
          <SwipeableItem key={item._id} renderLeftAction={SwipeableSettings}>
            <PatientItem {...item} />
          </SwipeableItem>
        ))
      )}
    </Container>
  )
}

export default PatientSettingsScreen

const Container = styled.View`
  padding: 10px;
`
