import React, {FC, useState} from 'react'
import styled from 'styled-components/native'
import DeleteAllServices from '../components/DeleteAllServices'
import AddService from '../components/Modal/AddService'
import UpdateService from '../components/Modal/UpdateService'
import ServiceSearchResult from '../components/ServiceSearchResult'
import SearchInput from '../components/UI/SearchInput'

const ServiceSettingsScreen: FC = () => {
  const [search, setSearch] = useState<string>('')

  const searchService = (text: string) => setSearch(text)
  return (
    <Container>
      <AddService />
      <DeleteAllServices />
      <SearchInput
        placeholder="Введите название услуги"
        value={search}
        onChangeText={searchService}
        label={'Изменить или удалить услугу'}
      />
      <ServiceSearchResult search={search} />
      <UpdateService />
    </Container>
  )
}

export default ServiceSettingsScreen

const Container = styled.View`
  padding: 10px;
`
