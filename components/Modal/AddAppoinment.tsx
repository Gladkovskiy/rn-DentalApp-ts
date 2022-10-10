import {AntDesign} from '@expo/vector-icons'
import {Formik} from 'formik'
import React, {FC, useState} from 'react'
import {Modal} from 'react-native'
import styled from 'styled-components/native'
import * as service from '../../formik/addAppointment'
import PickDateandTime from '../PickDateandTime'
import SelectDent from '../SelectDent'
import SelectPatient from './SelectPatient'
import SelectService from './SelectService'
import {Container} from '../StyledComponents/Container'
import {BlackText} from '../StyledComponents/Text'
import Button from '../UI/Button'

const AddAppoinment: FC = () => {
  const [isVisible, setVisible] = useState(false)

  const submit = (values: service.Appointment) => {
    console.log(values)
  }

  return (
    <>
      <OpacityButton
        onPress={() => {
          setVisible(true)
        }}
      >
        <AntDesign
          name="pluscircle"
          size={50}
          color="rgba(42, 134, 255, 0.7)"
        />
      </OpacityButton>
      <Modal animationType="slide" visible={isVisible}>
        <Formik {...service} onSubmit={submit}>
          {({
            values,
            errors,
            handleChange,
            handleSubmit,
            handleBlur,
            setFieldValue,
          }) => (
            <Container>
              <FlexGrow2>
                <PickDateandTime setFieldValue={setFieldValue} />
                <SelectDent
                  dentNumber={values.dentNumber}
                  setFieldValue={setFieldValue}
                />
                <SelectPatient />
                <SelectService />
                <FlexGrow1>
                  <BlackText>Дата: {values.date}</BlackText>
                  <BlackText>Время: {values.time}</BlackText>
                  <BlackText>Зуб номер: {values.dentNumber}</BlackText>
                  <BlackText>Пациент: {values.patient}</BlackText>
                  <BlackText>Услуга: {values.service}</BlackText>
                </FlexGrow1>
              </FlexGrow2>

              <FlexGrow1>
                <Button title="добавить" onPress={handleSubmit} />
                <Button
                  title="отмена"
                  onPress={() => setVisible(state => !state)}
                />
              </FlexGrow1>
            </Container>
          )}
        </Formik>
      </Modal>
    </>
  )
}

export default AddAppoinment

const OpacityButton = styled.TouchableOpacity`
  position: absolute;
  top: 85%;
  left: 80%;
`
const FlexGrow1 = styled.View`
  flex-grow: 1;
  justify-content: flex-end;
`
const FlexGrow2 = styled.View`
  flex-grow: 2;
`
