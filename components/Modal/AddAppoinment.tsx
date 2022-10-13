import {AntDesign} from '@expo/vector-icons'
import {Formik} from 'formik'
import React, {FC, useState} from 'react'
import {Modal} from 'react-native'
import styled from 'styled-components/native'
import * as service from '../../formik/addAppointment'
import PickDateandTime from '../PickDateandTime'
import PreviewAppointment from '../PreviewAppointment'
import SelectDent from '../SelectDent'
import {Container} from '../StyledComponents/Container'
import Button from '../UI/Button'
import SelectPatient from './SelectPatient'
import SelectService from './SelectService'

const AddAppoinment: FC = () => {
  const [isVisible, setVisible] = useState(false)
  const [patientFullname, setPatientFullname] = useState('')
  const [serviceType, setServiceType] = useState('')

  const submit = (values: service.Appointment) => {
    console.log(values)
  }

  const cancel = () => {
    setVisible(state => !state)
    setPatientFullname('')
    setServiceType('')
  }

  const previewInfo = (
    values: service.Appointment,
    patient: string,
    service: string
  ): service.Appointment => ({
    ...values,
    patient,
    service,
  })

  return (
    <>
      <OpacityButton
        onPress={() => {
          setVisible(true)
        }}
      >
        <AntDesign name="pluscircle" size={50} color="#2a86ffb2" />
      </OpacityButton>
      <Modal animationType="slide" visible={isVisible}>
        <Formik {...service} onSubmit={submit} validateOnChange>
          {({
            values,
            errors,
            touched,
            handleSubmit,
            setFieldValue,
            setFieldTouched,
          }) => (
            <Container>
              <FlexGrow2>
                <PickDateandTime
                  setFieldValue={setFieldValue}
                  setFieldTouched={setFieldTouched}
                />
                <SelectDent
                  dentNumber={values.dentNumber}
                  setFieldValue={setFieldValue}
                  setFieldTouched={setFieldTouched}
                />
                <SelectPatient
                  setFieldValue={setFieldValue}
                  setPatientFullname={setPatientFullname}
                  setFieldTouched={setFieldTouched}
                />
                <SelectService
                  setFieldValue={setFieldValue}
                  setServiceType={setServiceType}
                  setFieldTouched={setFieldTouched}
                />
                <FlexGrow1>
                  <PreviewAppointment
                    values={previewInfo(values, patientFullname, serviceType)}
                    errors={errors}
                    touched={touched}
                  />
                </FlexGrow1>
              </FlexGrow2>

              <FlexGrow1>
                <Button title="добавить" onPress={handleSubmit} />
                <Button title="отмена" onPress={cancel} />
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
