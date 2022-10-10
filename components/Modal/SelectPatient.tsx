import React, {FC, useState} from 'react'
import Button from '../UI/Button'
import SearchInput from '../UI/SearchInput'
import {Modal} from 'react-native'
import styled from 'styled-components/native'
import {useSearchPatient} from '../../http/query/patient'
import PatientItem from '../PatientItem'
import {Container} from '../StyledComponents/Container'

const SelectPatient: FC = () => {
  const [search, setSearch] = useState<string>('')
  const [isVisible, setVisible] = useState(false)
  const patients = useSearchPatient(search)

  const searchPatient = (text: string) => setSearch(text)

  return (
    <>
      <Button title="Пациент" onPress={() => setVisible(true)} />

      <Modal animationType="slide" visible={isVisible}>
        <Container>
          <SearchInput
            placeholder="Введите фамилию пациента"
            value={search}
            onChangeText={searchPatient}
            label={''}
          />

          {patients.isSuccess &&
            patients.data.map(item => <PatientItem key={item._id} {...item} />)}

          <FlexGrow1>
            <Button title="выбрать" onPress={() => console.log('patient')} />
            <Button
              title="отмена"
              onPress={() => setVisible(state => !state)}
            />
          </FlexGrow1>
        </Container>
      </Modal>
    </>
  )
}

export default SelectPatient

const FlexGrow1 = styled.View`
  flex-grow: 1;
  justify-content: flex-end;
`
