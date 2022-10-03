import React, {FC, useState} from 'react'
import styled from 'styled-components/native'
import DeleteAllPatients from '../components/DeleteAllPatients'
import AddPatient from '../components/Modal/AddPatient'
import PatientsSearchResult from '../components/PatientsSearchResult'
import SearchInput from '../components/UI/SearchInput'

const PatientSettingsScreen: FC = () => {
  const [search, setSearch] = useState<string>('')

  const searchPatient = (text: string) => setSearch(text)

  return (
    <Container>
      <AddPatient />
      <DeleteAllPatients />
      <SearchInput
        placeholder="Введите фамилию пациента"
        value={search}
        onChangeText={searchPatient}
        label={'Изменить или удалить данные пациента'}
      />
      <PatientsSearchResult search={search} />
    </Container>
  )
}

export default PatientSettingsScreen

const Container = styled.View`
  padding: 10px;
`
