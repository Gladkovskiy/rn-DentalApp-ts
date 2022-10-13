import React, {FC, useState} from 'react'
import {Modal} from 'react-native'
import styled from 'styled-components/native'
import {useSearchPatient} from '../../http/query/patient'
import {SetFieldTouched, SetFieldValue} from '../../types/formik'
import {IUser} from '../../types/user'
import PatientItem from '../PatientItem'
import {Container} from '../StyledComponents/Container'
import Button from '../UI/Button'
import SearchInput from '../UI/SearchInput'

interface ISelectPatient {
  setFieldValue: SetFieldValue
  setPatientFullname: React.Dispatch<React.SetStateAction<string>>
  setFieldTouched: SetFieldTouched
}

const SelectPatient: FC<ISelectPatient> = ({
  setFieldValue,
  setPatientFullname,
  setFieldTouched,
}) => {
  const [search, setSearch] = useState<string>('')
  const [isVisible, setVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [activePatient, setActivePatient] = useState<IUser>()

  const patients = useSearchPatient(search)

  const searchPatient = (text: string) => setSearch(text)

  const select = (index: number, patient: IUser) => {
    setActiveIndex(index)
    setActivePatient(patient)
  }

  const confirm = () => {
    if (activePatient) {
      setFieldTouched('patient', true)
      setFieldValue('patient', activePatient._id)
      setPatientFullname(activePatient.fullname)
    }
    setVisible(state => !state)
  }

  return (
    <>
      <Button
        title="Пациент"
        onPress={() => {
          setActiveIndex(null)
          setVisible(true)
        }}
      />

      <Modal animationType="slide" visible={isVisible}>
        <Container>
          <SearchInput
            placeholder="Введите фамилию пациента"
            value={search}
            onChangeText={searchPatient}
            label={''}
          />

          {patients.isSuccess &&
            patients.data.map((item, index) => (
              <PatientItem
                key={item._id}
                {...item}
                active={activeIndex === index + 1}
                onPress={() => select(index + 1, item)}
              />
            ))}

          <FlexGrow1>
            <Button
              title="выбрать"
              onPress={confirm}
              disabled={!!!activeIndex}
            />
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
